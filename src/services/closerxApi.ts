/**
 * CloserX API Service Layer
 * Handles all API calls to the CloserX backend
 * API Documentation: https://docs.closerx.ai/api-reference/introduction
 */

const CLOSERX_API_BASE_URL = import.meta.env.VITE_CLOSERX_API_URL || 'https://api.closerx.ai/v1';
const CLOSERX_API_KEY = import.meta.env.VITE_CLOSERX_API_KEY || '';

// Types
export interface Agent {
  id: string;
  name: string;
  type: 'inbound' | 'outbound';
  status: 'active' | 'inactive' | 'draft';
  voice: string;
  language: string;
  created_at: string;
  updated_at: string;
  prompt?: string;
  temperature?: number;
  model?: string;
}

export interface Campaign {
  id: string;
  name: string;
  agent_id: string;
  agent_name?: string;
  phone_number?: string;
  type: 'inbound' | 'outbound';
  status: 'active' | 'paused' | 'completed' | 'scheduled';
  total_contacts: number;
  calls_made: number;
  calls_answered: number;
  calls_converted: number;
  progress_percentage: number;
  created_at: string;
  updated_at: string;
  scheduled_at?: string;
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  email?: string;
  company?: string;
  status: 'new' | 'contacted' | 'converted' | 'not_interested';
  tags?: string[];
  created_at: string;
  updated_at: string;
  last_contacted?: string;
}

export interface PhoneNumber {
  id: string;
  number: string;
  formatted_number: string;
  type: 'local' | 'toll-free';
  location: string;
  assigned_agent?: string;
  monthly_cost: number;
  status: 'active' | 'inactive';
  created_at: string;
}

export interface CallRecord {
  id: string;
  campaign_id: string;
  contact_id: string;
  agent_id: string;
  phone_number: string;
  duration: number;
  status: 'completed' | 'missed' | 'failed' | 'voicemail';
  recording_url?: string;
  transcription?: string;
  sentiment?: 'positive' | 'neutral' | 'negative';
  created_at: string;
}

export interface DashboardStats {
  // Agent metrics
  total_agents: number;
  active_agents: number;
  inactive_agents: number;

  // Campaign metrics
  active_campaigns: number;
  total_campaigns: number;
  paused_campaigns: number;

  // Call metrics
  total_calls_today: number;
  total_calls_week: number;
  total_calls_month: number;
  calls_completed: number;
  calls_missed: number;

  // Performance metrics
  call_success_rate: number;
  conversion_rate: number;
  average_call_duration: number;
  average_response_time: number;

  // AI metrics
  ai_accuracy_rate: number;
  sentiment_positive: number;
  transcription_accuracy: number;

  // Resource metrics
  active_phone_numbers: number;
  total_contacts: number;
  credits_remaining: number;
  credits_used_today: number;
}

export interface AnalyticsData {
  call_volume: {
    month: string;
    total_calls: number;
    completed: number;
    missed: number;
  }[];
  performance_metrics: {
    date: string;
    success_rate: number;
    conversion_rate: number;
    average_duration: number;
  }[];
  agent_performance: {
    agent_id: string;
    agent_name: string;
    total_calls: number;
    success_rate: number;
    average_duration: number;
  }[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// API Client
class CloserXAPI {
  private baseURL: string;
  private defaultApiKey: string;

  constructor(baseURL: string, defaultApiKey: string) {
    this.baseURL = baseURL;
    this.defaultApiKey = defaultApiKey;
  }

  private getApiKey(): string {
    // Try to get the user's API key from localStorage first
    // This is set after successful login
    const userApiKey = localStorage.getItem('closerx_api_key');
    return userApiKey || this.defaultApiKey;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const apiKey = this.getApiKey();
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.error || data.message || 'An error occurred',
        };
      }

      return {
        success: true,
        data: data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  // ============================================
  // AUTHENTICATION
  // ============================================

  async login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async refreshToken() {
    return this.request('/auth/refresh', {
      method: 'POST',
    });
  }

  // ============================================
  // DASHBOARD & ANALYTICS
  // ============================================

  async getDashboardStats(): Promise<ApiResponse<DashboardStats>> {
    return this.request<DashboardStats>('/dashboard/stats');
  }

  async getAnalytics(timeRange?: string): Promise<ApiResponse<AnalyticsData>> {
    const params = timeRange ? `?range=${timeRange}` : '';
    return this.request<AnalyticsData>(`/analytics${params}`);
  }

  async getCallVolume(startDate?: string, endDate?: string): Promise<ApiResponse<any>> {
    const params = new URLSearchParams();
    if (startDate) params.append('start_date', startDate);
    if (endDate) params.append('end_date', endDate);
    return this.request(`/analytics/call-volume?${params.toString()}`);
  }

  // ============================================
  // AGENTS
  // ============================================

  async getAgents(): Promise<ApiResponse<Agent[]>> {
    return this.request<Agent[]>('/agents');
  }

  async getAgent(id: string): Promise<ApiResponse<Agent>> {
    return this.request<Agent>(`/agents/${id}`);
  }

  async createAgent(agent: Partial<Agent>): Promise<ApiResponse<Agent>> {
    return this.request<Agent>('/agents', {
      method: 'POST',
      body: JSON.stringify(agent),
    });
  }

  async updateAgent(id: string, agent: Partial<Agent>): Promise<ApiResponse<Agent>> {
    return this.request<Agent>(`/agents/${id}`, {
      method: 'PUT',
      body: JSON.stringify(agent),
    });
  }

  async deleteAgent(id: string): Promise<ApiResponse<void>> {
    return this.request<void>(`/agents/${id}`, {
      method: 'DELETE',
    });
  }

  async testAgent(id: string, phoneNumber: string): Promise<ApiResponse<any>> {
    return this.request(`/agents/${id}/test`, {
      method: 'POST',
      body: JSON.stringify({ phone_number: phoneNumber }),
    });
  }

  async cloneAgent(id: string): Promise<ApiResponse<Agent>> {
    return this.request<Agent>(`/agents/${id}/clone`, {
      method: 'POST',
    });
  }

  // ============================================
  // CAMPAIGNS
  // ============================================

  async getCampaigns(): Promise<ApiResponse<Campaign[]>> {
    return this.request<Campaign[]>('/campaigns');
  }

  async getCampaign(id: string): Promise<ApiResponse<Campaign>> {
    return this.request<Campaign>(`/campaigns/${id}`);
  }

  async createCampaign(campaign: Partial<Campaign>): Promise<ApiResponse<Campaign>> {
    return this.request<Campaign>('/campaigns', {
      method: 'POST',
      body: JSON.stringify(campaign),
    });
  }

  async updateCampaign(id: string, campaign: Partial<Campaign>): Promise<ApiResponse<Campaign>> {
    return this.request<Campaign>(`/campaigns/${id}`, {
      method: 'PUT',
      body: JSON.stringify(campaign),
    });
  }

  async pauseCampaign(id: string): Promise<ApiResponse<Campaign>> {
    return this.request<Campaign>(`/campaigns/${id}/pause`, {
      method: 'POST',
    });
  }

  async resumeCampaign(id: string): Promise<ApiResponse<Campaign>> {
    return this.request<Campaign>(`/campaigns/${id}/resume`, {
      method: 'POST',
    });
  }

  async stopCampaign(id: string): Promise<ApiResponse<Campaign>> {
    return this.request<Campaign>(`/campaigns/${id}/stop`, {
      method: 'POST',
    });
  }

  async deleteCampaign(id: string): Promise<ApiResponse<void>> {
    return this.request<void>(`/campaigns/${id}`, {
      method: 'DELETE',
    });
  }

  async getCampaignCallbacks(id: string): Promise<ApiResponse<CallRecord[]>> {
    return this.request<CallRecord[]>(`/campaigns/${id}/callbacks`);
  }

  async redialCampaign(id: string): Promise<ApiResponse<Campaign>> {
    return this.request<Campaign>(`/campaigns/${id}/redial`, {
      method: 'POST',
    });
  }

  // ============================================
  // CONTACTS
  // ============================================

  async getContacts(filters?: { status?: string; tags?: string[] }): Promise<ApiResponse<Contact[]>> {
    const params = new URLSearchParams();
    if (filters?.status) params.append('status', filters.status);
    if (filters?.tags) params.append('tags', filters.tags.join(','));
    return this.request<Contact[]>(`/contacts?${params.toString()}`);
  }

  async getContact(id: string): Promise<ApiResponse<Contact>> {
    return this.request<Contact>(`/contacts/${id}`);
  }

  async createContact(contact: Partial<Contact>): Promise<ApiResponse<Contact>> {
    return this.request<Contact>('/contacts', {
      method: 'POST',
      body: JSON.stringify(contact),
    });
  }

  async updateContact(id: string, contact: Partial<Contact>): Promise<ApiResponse<Contact>> {
    return this.request<Contact>(`/contacts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(contact),
    });
  }

  async deleteContact(id: string): Promise<ApiResponse<void>> {
    return this.request<void>(`/contacts/${id}`, {
      method: 'DELETE',
    });
  }

  async uploadContacts(file: File): Promise<ApiResponse<{ imported: number; failed: number }>> {
    const formData = new FormData();
    formData.append('file', file);

    return this.request<{ imported: number; failed: number }>('/contacts/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: formData,
    });
  }

  async importFromCRM(crmType: string, credentials: any): Promise<ApiResponse<{ imported: number }>> {
    return this.request<{ imported: number }>('/contacts/import-crm', {
      method: 'POST',
      body: JSON.stringify({ crm_type: crmType, credentials }),
    });
  }

  async transferContacts(fromCampaignId: string, toCampaignId: string, contactIds: string[]): Promise<ApiResponse<any>> {
    return this.request('/contacts/transfer', {
      method: 'POST',
      body: JSON.stringify({
        from_campaign_id: fromCampaignId,
        to_campaign_id: toCampaignId,
        contact_ids: contactIds,
      }),
    });
  }

  // ============================================
  // PHONE NUMBERS
  // ============================================

  async getPhoneNumbers(): Promise<ApiResponse<PhoneNumber[]>> {
    return this.request<PhoneNumber[]>('/phone-numbers');
  }

  async getPhoneNumber(id: string): Promise<ApiResponse<PhoneNumber>> {
    return this.request<PhoneNumber>(`/phone-numbers/${id}`);
  }

  async searchAvailableNumbers(areaCode: string, type: 'local' | 'toll-free'): Promise<ApiResponse<PhoneNumber[]>> {
    return this.request<PhoneNumber[]>('/phone-numbers/search', {
      method: 'POST',
      body: JSON.stringify({ area_code: areaCode, type }),
    });
  }

  async buyPhoneNumber(areaCode: string, type: 'local' | 'toll-free'): Promise<ApiResponse<PhoneNumber>> {
    return this.request<PhoneNumber>('/phone-numbers/buy', {
      method: 'POST',
      body: JSON.stringify({ area_code: areaCode, type }),
    });
  }

  async releasePhoneNumber(id: string): Promise<ApiResponse<void>> {
    return this.request<void>(`/phone-numbers/${id}`, {
      method: 'DELETE',
    });
  }

  async assignPhoneNumber(numberId: string, agentId: string): Promise<ApiResponse<PhoneNumber>> {
    return this.request<PhoneNumber>(`/phone-numbers/${numberId}/assign`, {
      method: 'POST',
      body: JSON.stringify({ agent_id: agentId }),
    });
  }

  // ============================================
  // CALL RECORDS & HISTORY
  // ============================================

  async getCallHistory(filters?: { campaign_id?: string; status?: string; start_date?: string; end_date?: string }): Promise<ApiResponse<CallRecord[]>> {
    const params = new URLSearchParams();
    if (filters?.campaign_id) params.append('campaign_id', filters.campaign_id);
    if (filters?.status) params.append('status', filters.status);
    if (filters?.start_date) params.append('start_date', filters.start_date);
    if (filters?.end_date) params.append('end_date', filters.end_date);
    return this.request<CallRecord[]>(`/calls?${params.toString()}`);
  }

  async getCallDetails(id: string): Promise<ApiResponse<CallRecord>> {
    return this.request<CallRecord>(`/calls/${id}`);
  }

  // ============================================
  // CREDITS & BILLING
  // ============================================

  async getCredits(): Promise<ApiResponse<{ balance: number; used_today: number; used_month: number }>> {
    return this.request('/credits');
  }

  async purchaseCredits(amount: number): Promise<ApiResponse<any>> {
    return this.request('/credits/purchase', {
      method: 'POST',
      body: JSON.stringify({ amount }),
    });
  }

  async getCreditHistory(): Promise<ApiResponse<any[]>> {
    return this.request('/credits/history');
  }
}

// Export singleton instance
export const closerxApi = new CloserXAPI(CLOSERX_API_BASE_URL, CLOSERX_API_KEY);
