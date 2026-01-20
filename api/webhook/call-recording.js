/**
 * Webhook Endpoint: Call Recording
 * Receives call data and forwards recording to n8n for analysis
 *
 * POST /api/webhook/call-recording
 *
 * Forwards to n8n:
 * {
 *   "recording_url": "https://...",
 *   "call_id": "...",
 *   "contact_name": "John Doe",
 *   "contact_number": "+1234567890",
 *   "duration": 120,
 *   "outcome": "appointment_booked",
 *   "campaign": "Sales Campaign",
 *   "timestamp": "2025-01-20T10:30:00Z"
 * }
 */

export default async function handler(req, res) {
  // Allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers for external webhooks
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const callData = req.body;

    // Validate recording URL exists
    if (!callData || !callData.recording_url) {
      return res.status(400).json({
        error: 'No recording URL provided',
        received: callData
      });
    }

    // Get n8n webhook URL from environment
    const N8N_WEBHOOK_URL = process.env.N8N_WEBHOOK_URL;

    if (!N8N_WEBHOOK_URL) {
      console.error('N8N_WEBHOOK_URL not configured');
      return res.status(500).json({
        error: 'N8N_WEBHOOK_URL not configured in environment variables'
      });
    }

    // Prepare payload for n8n
    const n8nPayload = {
      // Recording data
      recording_url: callData.recording_url,

      // Call metadata
      call_id: callData.id || callData.sid || null,
      contact_name: callData.full_name || null,
      contact_number: callData.contact_number || null,
      duration_seconds: callData.call_duration || null,

      // Call outcome
      status: callData.status || null,
      outcome: callData.outcome || null,
      appointment_booked: callData.appointment_booked || false,

      // Campaign info
      campaign: callData.campaign || null,
      campaign_id: callData.campaign_id || null,

      // Existing transcription (if any)
      transcription: callData.transcription_text || callData.transcription || null,

      // Timestamps
      timestamp: callData.created_at || new Date().toISOString(),

      // Full original payload for reference
      raw_data: callData
    };

    // Forward to n8n webhook
    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(n8nPayload),
    });

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      console.error('n8n webhook failed:', errorText);
      return res.status(502).json({
        error: 'Failed to forward to n8n',
        details: errorText
      });
    }

    let n8nResult;
    try {
      n8nResult = await n8nResponse.json();
    } catch {
      n8nResult = { status: 'received' };
    }

    console.log('Recording forwarded to n8n:', {
      recording_url: callData.recording_url,
      contact: callData.full_name,
      n8n_response: n8nResult
    });

    return res.status(200).json({
      success: true,
      message: 'Recording forwarded to n8n for analysis',
      recording_url: callData.recording_url,
      n8n_response: n8nResult
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
