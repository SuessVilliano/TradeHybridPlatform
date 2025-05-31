import axios from 'axios';

export interface CRMUser {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  membershipTier?: string;
  joinDate?: string;
  lastLogin?: string;
  isNewUser?: boolean;
  tags?: string[];
  customFields?: Record<string, any>;
}

export interface CRMActivity {
  userId: string;
  activityType: string;
  description: string;
  timestamp: Date;
  metadata?: Record<string, any>;
}

export class CRMIntegration {
  private apiUrl: string;
  private apiKey: string;

  constructor() {
    // VBOut CRM configuration
    this.apiUrl = 'https://api.vbout.com/1';
    this.apiKey = process.env.VBOUT_API_KEY || '5375854520188470321411853';
  }

  private async makeRequest(endpoint: string, method: 'GET' | 'POST' | 'PUT' = 'GET', data?: any) {
    if (!this.apiUrl || !this.apiKey) {
      console.log('VBOut CRM integration not configured - API URL or key missing');
      return null;
    }

    try {
      const params: any = {
        key: this.apiKey,
        ...data
      };

      const response = await axios({
        method,
        url: `${this.apiUrl}${endpoint}`,
        headers: {
          'Content-Type': 'application/json',
        },
        params: method === 'GET' ? params : { key: this.apiKey },
        data: method !== 'GET' ? data : undefined,
      });

      return response.data;
    } catch (error) {
      console.error(`VBOut CRM API request failed for ${endpoint}:`, error);
      throw error;
    }
  }

  async getUserProfile(userId: string): Promise<CRMUser | null> {
    try {
      // VBOut API: Get contact by email or ID
      const response = await this.makeRequest('/contacts/get', 'GET', { 
        email: userId 
      });
      
      if (response && response.data) {
        const contact = response.data;
        return {
          id: contact.id || userId,
          email: contact.email,
          firstName: contact.fname,
          lastName: contact.lname,
          membershipTier: contact.customfield1 || 'Unknown',
          joinDate: contact.created,
          lastLogin: contact.lastlogin,
          isNewUser: !contact.lastlogin,
          tags: contact.tags || [],
          customFields: contact.customfields || {}
        };
      }
      
      return null;
    } catch (error) {
      console.log('Could not fetch user profile from VBOut:', error);
      return null;
    }
  }

  async updateUserProfile(userId: string, updates: Partial<CRMUser>): Promise<CRMUser | null> {
    try {
      const contactData: any = {};
      
      if (updates.email) contactData.email = updates.email;
      if (updates.firstName) contactData.fname = updates.firstName;
      if (updates.lastName) contactData.lname = updates.lastName;
      if (updates.membershipTier) contactData.customfield1 = updates.membershipTier;
      if (updates.lastLogin) contactData.lastlogin = updates.lastLogin;
      
      await this.makeRequest('/contacts/add', 'POST', contactData);
      return await this.getUserProfile(userId);
    } catch (error) {
      console.log('Could not update user profile in VBOut:', error);
      return null;
    }
  }

  async trackActivity(activity: CRMActivity): Promise<void> {
    try {
      // VBOut API: Add activity/note to contact
      await this.makeRequest('/contacts/addnote', 'POST', {
        email: activity.userId,
        note: `${activity.activityType}: ${activity.description}`,
        timestamp: activity.timestamp.toISOString()
      });
    } catch (error) {
      console.log('Could not track activity in VBOut:', error);
    }
  }

  async markTutorialComplete(userId: string): Promise<void> {
    await this.trackActivity({
      userId,
      activityType: 'tutorial_completed',
      description: 'User completed the Trade Hybrid dashboard tutorial',
      timestamp: new Date(),
    });
    
    // Update user to mark as no longer new
    await this.updateUserProfile(userId, { 
      customFields: { tutorial_completed: true }
    });
  }

  async trackLogin(userId: string): Promise<void> {
    await this.trackActivity({
      userId,
      activityType: 'login',
      description: 'User logged into Trade Hybrid dashboard',
      timestamp: new Date(),
    });
    
    await this.updateUserProfile(userId, { 
      lastLogin: new Date().toISOString() 
    });
  }

  async trackFeatureUsage(userId: string, feature: string): Promise<void> {
    await this.trackActivity({
      userId,
      activityType: 'feature_usage',
      description: `User accessed ${feature} in Trade Hybrid`,
      timestamp: new Date(),
      metadata: { feature },
    });
  }

  async syncUserWithWhop(userId: string, whopData: any): Promise<void> {
    const updates: Partial<CRMUser> = {
      membershipTier: whopData.product?.name || 'Trade Hybrid Member',
      lastLogin: new Date().toISOString(),
    };

    if (whopData.email && !whopData.email.includes('noreply')) {
      updates.email = whopData.email;
    }

    await this.updateUserProfile(userId, updates);
  }

  async checkIfNewUser(userId: string): Promise<boolean> {
    try {
      const user = await this.getUserProfile(userId);
      // Consider user new if they don't exist in CRM or haven't logged in before
      return !user || !user.lastLogin || user.isNewUser === true;
    } catch (error) {
      // If VBOut is not available, assume returning user to avoid tutorial spam
      console.log('VBOut CRM check failed, assuming returning user');
      return false;
    }
  }
}

export const crmIntegration = new CRMIntegration();