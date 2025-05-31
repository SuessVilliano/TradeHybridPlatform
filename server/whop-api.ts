import axios from 'axios';

const WHOP_API_BASE_URL = 'https://api.whop.com/api/v3';

export class WhopAPI {
  private clientId: string;
  private clientSecret: string;
  private accessToken?: string;

  constructor() {
    this.clientId = process.env.WHOP_CLIENT_ID!;
    this.clientSecret = process.env.WHOP_CLIENT_SECRET!;
    
    if (!this.clientId || !this.clientSecret) {
      throw new Error('Whop API credentials not found in environment variables');
    }
  }

  private async getAccessToken(): Promise<string> {
    if (this.accessToken) {
      return this.accessToken;
    }

    try {
      const response = await axios.post(`${WHOP_API_BASE_URL}/oauth/token`, {
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret,
      });

      const token: string = response.data.access_token;
      if (!token) {
        throw new Error('No access token received from Whop API');
      }
      
      this.accessToken = token;
      return token;
    } catch (error) {
      console.error('Failed to get Whop access token:', error);
      throw new Error('Failed to authenticate with Whop API');
    }
  }

  private async makeRequest(endpoint: string, method: 'GET' | 'POST' = 'GET', data?: any) {
    const token = await this.getAccessToken();
    
    try {
      const response = await axios({
        method,
        url: `${WHOP_API_BASE_URL}${endpoint}`,
        headers: {
          'Authorization': `Bearer ${token}`,
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