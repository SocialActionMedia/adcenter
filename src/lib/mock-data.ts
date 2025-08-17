import { AdCampaign, User, CampaignStatus, UserRole } from '@/types'

// Mock users
export const mockUsers: User[] = [
  {
    id: '1',
    email: 'admin@adagency.com',
    name: 'Admin User',
    role: 'admin',
    avatar: '/api/avatars/admin.jpg',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    isActive: true,
  },
  {
    id: '2',
    email: 'manager@adagency.com',
    name: 'Campaign Manager',
    role: 'manager',
    avatar: '/api/avatars/manager.jpg',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    isActive: true,
  },
  {
    id: '3',
    email: 'analyst@adagency.com',
    name: 'Data Analyst',
    role: 'analyst',
    avatar: '/api/avatars/analyst.jpg',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    isActive: true,
  },
]

// Mock campaigns
export const mockCampaigns: AdCampaign[] = [
  {
    id: '1',
    name: 'Summer Sale Campaign',
    description: 'Promote summer products with special discounts',
    status: 'active',
    budget: 50000,
    spent: 12500,
    startDate: new Date('2024-06-01'),
    endDate: new Date('2024-08-31'),
    targetAudience: {
      ageRange: [25, 45],
      locations: ['United States', 'Canada'],
      interests: ['shopping', 'fashion', 'lifestyle'],
      demographics: {
        gender: 'all',
        income: 'medium',
        education: 'college',
      },
    },
    adGroups: [],
    metrics: {
      impressions: 1250000,
      clicks: 25000,
      ctr: 2.0,
      cpc: 0.50,
      cpm: 10.0,
      conversions: 1250,
      conversionRate: 5.0,
      costPerConversion: 10.0,
      revenue: 62500,
      roas: 5.0,
    },
    createdBy: '2',
    createdAt: new Date('2024-05-15'),
    updatedAt: new Date('2024-06-15'),
  },
  {
    id: '2',
    name: 'Holiday Season Promotion',
    description: 'End of year holiday shopping campaign',
    status: 'draft',
    budget: 75000,
    spent: 0,
    startDate: new Date('2024-11-01'),
    endDate: new Date('2024-12-31'),
    targetAudience: {
      ageRange: [18, 65],
      locations: ['United States', 'United Kingdom', 'Germany'],
      interests: ['shopping', 'gifts', 'holidays'],
      demographics: {
        gender: 'all',
        income: 'all',
        education: 'all',
      },
    },
    adGroups: [],
    metrics: {
      impressions: 0,
      clicks: 0,
      ctr: 0,
      cpc: 0,
      cpm: 0,
      conversions: 0,
      conversionRate: 0,
      costPerConversion: 0,
      revenue: 0,
      roas: 0,
    },
    createdBy: '2',
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-06-01'),
  },
  {
    id: '3',
    name: 'Mobile App Launch',
    description: 'Promote new mobile application',
    status: 'paused',
    budget: 30000,
    spent: 15000,
    startDate: new Date('2024-05-01'),
    endDate: new Date('2024-07-31'),
    targetAudience: {
      ageRange: [18, 35],
      locations: ['United States'],
      interests: ['technology', 'mobile', 'apps'],
      demographics: {
        gender: 'all',
        income: 'medium',
        education: 'college',
      },
    },
    adGroups: [],
    metrics: {
      impressions: 800000,
      clicks: 12000,
      ctr: 1.5,
      cpc: 1.25,
      cpm: 18.75,
      conversions: 600,
      conversionRate: 5.0,
      costPerConversion: 25.0,
      revenue: 30000,
      roas: 2.0,
    },
    createdBy: '1',
    createdAt: new Date('2024-04-15'),
    updatedAt: new Date('2024-06-10'),
  },
]

// Mock authentication
export const mockAuth = {
  currentUser: null as User | null,
  
  login: async (email: string, password: string): Promise<User | null> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const user = mockUsers.find(u => u.email === email)
    if (user && password === 'password') {
      mockAuth.currentUser = user
      return user
    }
    return null
  },
  
  logout: async (): Promise<void> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    mockAuth.currentUser = null
  },
  
  getCurrentUser: (): User | null => {
    return mockAuth.currentUser
  },
  
  isAuthenticated: (): boolean => {
    return mockAuth.currentUser !== null
  },
}

// Mock campaign service
export const mockCampaignService = {
  getCampaigns: async (): Promise<AdCampaign[]> => {
    await new Promise(resolve => setTimeout(resolve, 800))
    return mockCampaigns
  },
  
  getCampaign: async (id: string): Promise<AdCampaign | null> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    return mockCampaigns.find(c => c.id === id) || null
  },
  
  createCampaign: async (campaign: Omit<AdCampaign, 'id' | 'createdAt' | 'updatedAt'>): Promise<AdCampaign> => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const newCampaign: AdCampaign = {
      ...campaign,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    
    mockCampaigns.push(newCampaign)
    return newCampaign
  },
  
  updateCampaign: async (id: string, updates: Partial<AdCampaign>): Promise<AdCampaign | null> => {
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const index = mockCampaigns.findIndex(c => c.id === id)
    if (index === -1) return null
    
    mockCampaigns[index] = {
      ...mockCampaigns[index],
      ...updates,
      updatedAt: new Date(),
    }
    
    return mockCampaigns[index]
  },
  
  deleteCampaign: async (id: string): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 500))
    
    const index = mockCampaigns.findIndex(c => c.id === id)
    if (index === -1) return false
    
    mockCampaigns.splice(index, 1)
    return true
  },
}
