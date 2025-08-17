// Ad Center Application Types and Interfaces

// ===== USER MANAGEMENT =====
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

export type UserRole = 'admin' | 'manager' | 'analyst' | 'viewer';

// ===== AD CAMPAIGNS =====
export interface AdCampaign {
  id: string;
  name: string;
  description?: string;
  status: CampaignStatus;
  budget: number;
  spent: number;
  startDate: Date;
  endDate: Date;
  targetAudience: TargetAudience;
  adGroups: AdGroup[];
  metrics: CampaignMetrics;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CampaignStatus = 'draft' | 'active' | 'paused' | 'completed' | 'archived';

export interface TargetAudience {
  ageRange?: [number, number];
  locations: string[];
  interests: string[];
  demographics: Demographics;
  customAudiences?: string[];
}

export interface Demographics {
  gender?: 'male' | 'female' | 'all';
  income?: 'low' | 'medium' | 'high' | 'all';
  education?: 'high_school' | 'college' | 'graduate' | 'all';
}

// ===== AD GROUPS =====
export interface AdGroup {
  id: string;
  name: string;
  status: AdGroupStatus;
  ads: Ad[];
  keywords: string[];
  bidAmount: number;
  targeting: TargetingCriteria;
  performance: AdGroupMetrics;
}

export type AdGroupStatus = 'active' | 'paused' | 'archived';

export interface TargetingCriteria {
  locations: string[];
  languages: string[];
  devices: DeviceType[];
  timeOfDay?: TimeRange;
  dayOfWeek?: DayOfWeek[];
}

export type DeviceType = 'desktop' | 'mobile' | 'tablet' | 'all';
export type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

export interface TimeRange {
  start: string; // HH:MM format
  end: string;   // HH:MM format
}

// ===== ADS =====
export interface Ad {
  id: string;
  name: string;
  type: AdType;
  status: AdStatus;
  content: AdContent;
  destination: string;
  performance: AdMetrics;
  createdAt: Date;
  updatedAt: Date;
}

export type AdType = 'text' | 'image' | 'video' | 'responsive' | 'dynamic';
export type AdStatus = 'active' | 'paused' | 'rejected' | 'under_review';

export interface AdContent {
  headline: string;
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
  callToAction?: string;
  displayUrl: string;
}

// ===== METRICS & ANALYTICS =====
export interface CampaignMetrics {
  impressions: number;
  clicks: number;
  ctr: number; // Click-through rate
  cpc: number; // Cost per click
  cpm: number; // Cost per thousand impressions
  conversions: number;
  conversionRate: number;
  costPerConversion: number;
  revenue: number;
  roas: number; // Return on ad spend
}

export interface AdGroupMetrics {
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  conversionRate: number;
}

export interface AdMetrics {
  impressions: number;
  clicks: number;
  ctr: number;
  cpc: number;
  conversions: number;
  conversionRate: number;
  qualityScore?: number;
}

// ===== BUDGET & BILLING =====
export interface Budget {
  id: string;
  campaignId: string;
  dailyBudget: number;
  totalBudget: number;
  spent: number;
  remaining: number;
  resetDate: Date;
}

export interface BillingInfo {
  id: string;
  userId: string;
  paymentMethod: PaymentMethod;
  billingAddress: Address;
  taxInfo?: TaxInfo;
}

export interface PaymentMethod {
  type: 'credit_card' | 'debit_card' | 'bank_transfer' | 'paypal';
  last4?: string;
  expiryDate?: string;
  cardholderName?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface TaxInfo {
  taxId: string;
  taxExempt: boolean;
}

// ===== NOTIFICATIONS & ALERTS =====
export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export type NotificationType = 'info' | 'warning' | 'error' | 'success';

export interface Alert {
  id: string;
  campaignId: string;
  type: AlertType;
  condition: AlertCondition;
  isActive: boolean;
  lastTriggered?: Date;
}

export type AlertType = 'budget_exceeded' | 'low_performance' | 'high_cost' | 'quality_score_drop';
export type AlertCondition = 'above' | 'below' | 'equals';

// ===== API RESPONSES =====
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: Date;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationInfo;
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// ===== FORM TYPES =====
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'date' | 'checkbox';
  required: boolean;
  placeholder?: string;
  options?: SelectOption[];
  validation?: ValidationRule[];
}

export interface SelectOption {
  value: string | number;
  label: string;
}

export interface ValidationRule {
  type: 'required' | 'min' | 'max' | 'pattern' | 'custom';
  value?: any;
  message: string;
}

// ===== UI COMPONENT PROPS =====
export interface ButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export interface CardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  headerActions?: React.ReactNode;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

// ===== UTILITY TYPES =====
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type MakeRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// ===== CONSTANTS =====
export const CAMPAIGN_STATUSES: CampaignStatus[] = ['draft', 'active', 'paused', 'completed', 'archived'];
export const USER_ROLES: UserRole[] = ['admin', 'manager', 'analyst', 'viewer'];
export const AD_TYPES: AdType[] = ['text', 'image', 'video', 'responsive', 'dynamic'];
export const DEVICE_TYPES: DeviceType[] = ['desktop', 'mobile', 'tablet', 'all'];
export const DAYS_OF_WEEK: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

// ===== BARREL EXPORTS =====
// Re-export utility types for easier importing
export * from './utils';
