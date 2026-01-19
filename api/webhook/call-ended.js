/**
 * Webhook Endpoint: Call Ended
 * Receives call completion events and sends email notification
 *
 * POST /api/webhook/call-ended
 *
 * Expected payload from CloserX/Euphoric AI:
 * {
 *   "full_name": "John Doe",
 *   "contact_number": "+1234567890",
 *   "call_duration": 120,
 *   "status": "completed",
 *   "outcome": "appointment_booked",
 *   "recording_url": "https://...",
 *   "transcription_text": "...",
 *   "campaign": "Sales Campaign",
 *   "created_at": "2025-01-20T10:30:00Z"
 * }
 */

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const callData = req.body;

    // Validate required fields
    if (!callData || !callData.contact_number) {
      return res.status(400).json({ error: 'Invalid payload: missing call data' });
    }

    // Format call duration
    const duration = callData.call_duration
      ? `${Math.floor(callData.call_duration / 60)}m ${callData.call_duration % 60}s`
      : 'N/A';

    // Format the email content
    const emailSubject = `📞 Call Ended: ${callData.full_name || 'Unknown'} - ${callData.outcome || callData.status || 'Completed'}`;

    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #42a4bf; border-bottom: 2px solid #42a4bf; padding-bottom: 10px;">
          📞 Call Ended Notification
        </h2>

        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 140px;">Contact Name:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${callData.full_name || 'Unknown'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone Number:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${callData.contact_number}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Duration:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${duration}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Status:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${callData.status || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Outcome:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">
              <span style="background: ${callData.outcome === 'appointment_booked' ? '#10b981' : '#6b7280'}; color: white; padding: 4px 12px; border-radius: 12px; font-size: 14px;">
                ${callData.outcome || 'N/A'}
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Campaign:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${callData.campaign || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Date/Time:</td>
            <td style="padding: 10px; border-bottom: 1px solid #eee;">${callData.created_at ? new Date(callData.created_at).toLocaleString() : new Date().toLocaleString()}</td>
          </tr>
        </table>

        ${callData.recording_url ? `
          <div style="margin: 20px 0;">
            <a href="${callData.recording_url}" style="background: #42a4bf; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
              🎧 Listen to Recording
            </a>
          </div>
        ` : ''}

        ${callData.transcription_text ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">📝 Transcription</h3>
            <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; font-size: 14px; line-height: 1.6; max-height: 300px; overflow-y: auto;">
              ${callData.transcription_text}
            </div>
          </div>
        ` : ''}

        ${callData.notes ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #333; margin-bottom: 10px;">📋 Notes</h3>
            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; font-size: 14px;">
              ${callData.notes}
            </div>
          </div>
        ` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
          <p>This notification was sent from Euphoric AI Voice Agents</p>
          <p><a href="https://app.euphoricai.io" style="color: #42a4bf;">View Dashboard</a></p>
        </div>
      </div>
    `;

    // Send email using Resend API
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || 'monil@euphoricai.io';

    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY not configured');
      // Log the call data even if email fails
      console.log('Call ended:', JSON.stringify(callData, null, 2));
      return res.status(200).json({
        success: true,
        warning: 'Email not sent - RESEND_API_KEY not configured',
        data: callData
      });
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Euphoric AI <notifications@euphoricai.io>',
        to: [NOTIFICATION_EMAIL],
        subject: emailSubject,
        html: emailBody,
      }),
    });

    const emailResult = await emailResponse.json();

    if (!emailResponse.ok) {
      console.error('Failed to send email:', emailResult);
      return res.status(200).json({
        success: true,
        warning: 'Call logged but email failed',
        error: emailResult
      });
    }

    console.log('Email sent successfully:', emailResult);

    return res.status(200).json({
      success: true,
      message: 'Call ended notification sent',
      emailId: emailResult.id
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}
