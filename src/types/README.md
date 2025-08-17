# TypeScript Types & Interfaces

This directory contains comprehensive TypeScript type definitions for the Ad Center application.

## 📁 File Structure

```
src/types/
├── index.ts          # Main type definitions and barrel exports
├── utils.ts          # Utility types and helper functions
└── README.md         # This documentation file
```

## 🏗️ Core Types

### User Management

#### `User`
Represents a user in the system with role-based access control.

```typescript
interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}
```

#### `UserRole`
Defines the available user roles in the system.

```typescript
type UserRole = 'admin' | 'manager' | 'analyst' | 'viewer';
```

### Ad Campaigns

#### `AdCampaign`
The main entity representing an advertising campaign.

```typescript
interface AdCampaign {
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
```

#### `CampaignStatus`
Available campaign statuses.

```typescript
type CampaignStatus = 'draft' | 'active' | 'paused' | 'completed' | 'archived';
```

### Ad Groups

#### `AdGroup`
Represents a group of related ads within a campaign.

```typescript
interface AdGroup {
  id: string;
  name: string;
  status: AdGroupStatus;
  ads: Ad[];
  keywords: string[];
  bidAmount: number;
  targeting: TargetingCriteria;
  performance: AdGroupMetrics;
}
```

### Ads

#### `Ad`
Individual advertisement within an ad group.

```typescript
interface Ad {
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
```

#### `AdType`
Available ad formats.

```typescript
type AdType = 'text' | 'image' | 'video' | 'responsive' | 'dynamic';
```

## 📊 Metrics & Analytics

### `CampaignMetrics`
Performance metrics for campaigns.

```typescript
interface CampaignMetrics {
  impressions: number;
  clicks: number;
  ctr: number;        // Click-through rate
  cpc: number;        // Cost per click
  cpm: number;        // Cost per thousand impressions
  conversions: number;
  conversionRate: number;
  costPerConversion: number;
  revenue: number;
  roas: number;       // Return on ad spend
}
```

### `AdGroupMetrics` & `AdMetrics`
Similar metrics structures for ad groups and individual ads.

## 💰 Budget & Billing

### `Budget`
Budget management for campaigns.

```typescript
interface Budget {
  id: string;
  campaignId: string;
  dailyBudget: number;
  totalBudget: number;
  spent: number;
  remaining: number;
  resetDate: Date;
}
```

## 🔔 Notifications & Alerts

### `Notification`
System notifications for users.

```typescript
interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  actionUrl?: string;
}
```

## 🌐 API Responses

### `ApiResponse<T>`
Generic API response wrapper.

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  timestamp: Date;
}
```

### `PaginatedResponse<T>`
Paginated data responses.

```typescript
interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationInfo;
}
```

## 📝 Form Types

### `FormField`
Dynamic form field configuration.

```typescript
interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea' | 'date' | 'checkbox';
  required: boolean;
  placeholder?: string;
  options?: SelectOption[];
  validation?: ValidationRule[];
}
```

## 🎨 UI Component Props

### `ButtonProps`, `CardProps`, `InputProps`
Type-safe props for reusable UI components.

## 🛠️ Utility Types

### Type Manipulation

#### `Optional<T, K>`
Makes specific properties optional.

```typescript
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Example: Make budget optional in AdCampaign
type CampaignWithoutBudget = Optional<AdCampaign, 'budget'>;
```

#### `MakeRequired<T, K>`
Makes specific properties required.

```typescript
type MakeRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Example: Make description required in AdCampaign
type CampaignWithRequiredDescription = MakeRequired<AdCampaign, 'description'>;
```

#### `DeepPartial<T>`
Makes all properties deeply optional.

```typescript
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

// Example: Make all campaign properties optional
type PartialCampaign = DeepPartial<AdCampaign>;
```

### Array & Function Utilities

#### `ArrayElement<T>`
Extracts the element type from an array.

```typescript
type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

// Example: Get the type of campaign ad groups
type AdGroupType = ArrayElement<AdCampaign['adGroups']>;
```

#### `AsyncFunction<TArgs, TReturn>`
Type for async functions.

```typescript
type AsyncFunction<TArgs extends any[], TReturn> = (...args: TArgs) => Promise<TReturn>;

// Example: Async function to fetch campaigns
const fetchCampaigns: AsyncFunction<[string], AdCampaign[]> = async (userId) => {
  // Implementation
};
```

### Event Handlers

#### `ChangeHandler<T>`, `ClickHandler`, `SubmitHandler`
Type-safe event handlers for React components.

```typescript
type ChangeHandler<T = string> = (value: T) => void;
type ClickHandler = (event: React.MouseEvent) => void;
type SubmitHandler = (event: React.FormEvent) => void;
```

## 📋 Constants

Predefined arrays of valid values for type-safe operations:

```typescript
export const CAMPAIGN_STATUSES: CampaignStatus[] = ['draft', 'active', 'paused', 'completed', 'archived'];
export const USER_ROLES: UserRole[] = ['admin', 'manager', 'analyst', 'viewer'];
export const AD_TYPES: AdType[] = ['text', 'image', 'video', 'responsive', 'dynamic'];
export const DEVICE_TYPES: DeviceType[] = ['desktop', 'mobile', 'tablet', 'all'];
export const DAYS_OF_WEEK: DayOfWeek[] = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
```

## 🚀 Usage Examples

### Creating a New Campaign

```typescript
import { AdCampaign, CampaignStatus } from '@/types';

const newCampaign: AdCampaign = {
  id: 'campaign-1',
  name: 'Summer Sale 2024',
  description: 'Promote summer products',
  status: 'draft' as CampaignStatus,
  budget: 5000,
  spent: 0,
  startDate: new Date('2024-06-01'),
  endDate: new Date('2024-08-31'),
  targetAudience: {
    ageRange: [18, 45],
    locations: ['United States'],
    interests: ['fashion', 'summer'],
    demographics: {
      gender: 'all',
      income: 'medium',
      education: 'college'
    }
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
    roas: 0
  },
  createdBy: 'user-123',
  createdAt: new Date(),
  updatedAt: new Date()
};
```

### Using Utility Types

```typescript
import { Optional, DeepPartial, ApiResponse } from '@/types';

// Make specific fields optional
type CampaignFormData = Optional<AdCampaign, 'id' | 'createdAt' | 'updatedAt'>;

// Make all fields optional for form inputs
type CampaignForm = DeepPartial<AdCampaign>;

// API response type
type CampaignResponse = ApiResponse<AdCampaign>;
```

### Type Guards

```typescript
import { CampaignStatus, CAMPAIGN_STATUSES } from '@/types';

function isValidCampaignStatus(status: string): status is CampaignStatus {
  return CAMPAIGN_STATUSES.includes(status as CampaignStatus);
}

// Usage
const status = 'active';
if (isValidCampaignStatus(status)) {
  // TypeScript now knows status is CampaignStatus
  console.log(status); // 'active'
}
```

## 🔧 Best Practices

1. **Use Type Imports**: Always import types from the types directory
   ```typescript
   import { AdCampaign, CampaignStatus } from '@/types';
   ```

2. **Leverage Utility Types**: Use utility types to create variations of existing types
   ```typescript
   type CampaignForm = DeepPartial<AdCampaign>;
   ```

3. **Use Constants**: Use predefined constants for validation and iteration
   ```typescript
   CAMPAIGN_STATUSES.forEach(status => {
     // Type-safe iteration
   });
   ```

4. **Type Guards**: Create type guards for runtime validation
   ```typescript
   function isActiveCampaign(campaign: AdCampaign): boolean {
     return campaign.status === 'active';
   }
   ```

5. **Generic Components**: Use generics with your types for reusable components
   ```typescript
   interface DataTableProps<T> {
     data: T[];
     columns: Column<T>[];
   }
   ```

## 🧪 Testing Types

You can test the types by visiting the demo page at `/demo` which showcases:

- Sample data using all the defined types
- Interactive components demonstrating type usage
- Examples of utility type applications
- Real-world usage patterns

## 📚 Additional Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TypeScript Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
