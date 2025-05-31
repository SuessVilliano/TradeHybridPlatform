import axios from 'axios';

const WHOP_API_BASE_URL = 'https://api.whop.com/api/v3';

export class WhopAPI {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.WHOP_API_KEY!;
    
    if (!this.apiKey) {
      throw new Error('Whop API key not found in environment variables');
    }
  }

  private async makeRequest(endpoint: string, method: 'GET' | 'POST' = 'GET', data?: any) {
    try {
      const response = await axios({
        method,
        url: `${WHOP_API_BASE_URL}${endpoint}`,
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        data,
      });

      return response.data;
    } catch (error) {
      console.error(`Whop API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  async getUserSubscriptions(userId: string) {
    return this.makeRequest(`/memberships?user_id=${userId}`);
  }

  async getSubscriptionDetails(subscriptionId: string) {
    return this.makeRequest(`/memberships/${subscriptionId}`);
  }

  async getUserDetails(userId: string) {
    return this.makeRequest(`/users/${userId}`);
  }

  async getCompanyDetails() {
    return this.makeRequest('/company');
  }

  async getProducts() {
    return this.makeRequest('/products');
  }
}

export const whopAPI = new WhopAPI();