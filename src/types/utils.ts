// Utility Types and Helper Functions

// ===== TYPE UTILITIES =====
export type Nullable<T> = T | null;
export type Undefined<T> = T | undefined;
export type Optional<T> = T | null | undefined;

// Make specific properties optional
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// Make specific properties required
export type MakeRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// Extract only the keys that have a specific type
export type KeysOfType<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

// Extract only the properties that have a specific type
export type PropertiesOfType<T, U> = Pick<T, KeysOfType<T, U>>;

// ===== ARRAY UTILITIES =====
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;
export type NonEmptyArray<T> = [T, ...T[]];

// ===== FUNCTION UTILITIES =====
export type FunctionReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
export type FunctionParameters<T> = T extends (...args: infer P) => any ? P : never;

// Async function types
export type AsyncFunction<TArgs extends any[], TReturn> = (...args: TArgs) => Promise<TReturn>;
export type SyncFunction<TArgs extends any[], TReturn> = (...args: TArgs) => TReturn;

// ===== EVENT HANDLERS =====
export type EventHandler<T = Event> = (event: T) => void;
export type ChangeHandler<T = string> = (value: T) => void;
export type ClickHandler = (event: React.MouseEvent) => void;
export type SubmitHandler = (event: React.FormEvent) => void;

// ===== FORM UTILITIES =====
export type FormData<T> = {
  [K in keyof T]: T[K];
};

export type FormErrors<T> = {
  [K in keyof T]?: string;
};

export type FormTouched<T> = {
  [K in keyof T]?: boolean;
};

export type FormState<T> = {
  values: FormData<T>;
  errors: FormErrors<T>;
  touched: FormTouched<T>;
  isSubmitting: boolean;
  isValid: boolean;
};

// ===== API UTILITIES =====
export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type RequestConfig = {
  method: HttpMethod;
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string | number | boolean>;
};

export type ApiError = {
  code: string;
  message: string;
  details?: any;
  timestamp: Date;
};

// ===== STATE MANAGEMENT =====
export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export type AsyncState<T> = {
  data: T | null;
  loading: boolean;
  error: string | null;
  lastUpdated?: Date;
};

export type PaginationState = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

// ===== VALIDATION UTILITIES =====
export type ValidationResult = {
  isValid: boolean;
  errors: string[];
};

export type ValidationRule<T = any> = {
  test: (value: T) => boolean;
  message: string;
  code?: string;
};

export type FieldValidator<T = any> = {
  field: keyof T;
  rules: ValidationRule<T[keyof T]>[];
};

// ===== DATE UTILITIES =====
export type DateRange = {
  start: Date;
  end: Date;
};

export type TimeRange = {
  start: string; // HH:MM format
  end: string;   // HH:MM format
};

export type DateFormat = 'short' | 'long' | 'relative' | 'iso' | 'custom';

// ===== FILTER UTILITIES =====
export type FilterOperator = 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte' | 'in' | 'nin' | 'contains' | 'startsWith' | 'endsWith';

export type FilterCondition<T> = {
  field: keyof T;
  operator: FilterOperator;
  value: any;
};

export type SortDirection = 'asc' | 'desc';

export type SortOption<T> = {
  field: keyof T;
  direction: SortDirection;
};

// ===== THEME & STYLING =====
export type ThemeMode = 'light' | 'dark' | 'system';
export type ColorScheme = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';

export type ResponsiveBreakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

// ===== COMPONENT UTILITIES =====
export type ComponentVariant = 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary';
export type ComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type CommonProps = {
  className?: string;
  id?: string;
  'data-testid'?: string;
  style?: React.CSSProperties;
};

// ===== CONDITIONAL TYPES =====
export type If<T extends boolean, A, B> = T extends true ? A : B;

export type IsNever<T> = [T] extends [never] ? true : false;

export type IsAny<T> = 0 extends (1 & T) ? true : false;

export type IsUnknown<T> = IsNever<T> extends false ? T extends unknown ? unknown extends T ? IsNever<T> extends false ? true : false : false : false : false;

// ===== MAPPED TYPES =====
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

export type Writable<T> = {
  -readonly [P in keyof T]: T[P];
};

// ===== UNION UTILITIES =====
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

export type UnionToTuple<T> = UnionToIntersection<T extends any ? () => T : never> extends () => infer R ? [R] : never;

// ===== STRING UTILITIES =====
export type StringLiteral<T> = T extends string ? string extends T ? never : T : never;

export type Capitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S;

export type Uncapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Lowercase<F>}${R}` : S;

// ===== NUMBER UTILITIES =====
export type NumberRange<Start extends number, End extends number> = Exclude<number, Exclude<number, Start | End>>;

export type IsPositive<T extends number> = T extends 0 ? false : T extends number ? true : false;

// ===== OBJECT UTILITIES =====
export type Keys<T> = keyof T;
export type Values<T> = T[keyof T];
export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];

// ===== RECORD UTILITIES =====
export type RecordKeys<T> = T extends Record<infer K, any> ? K : never;
export type RecordValues<T> = T extends Record<any, infer V> ? V : never;

// ===== PROMISE UTILITIES =====
export type PromiseType<T> = T extends Promise<infer U> ? U : T;
export type PromiseReturnType<T> = T extends (...args: any[]) => Promise<infer R> ? R : T extends (...args: any[]) => infer R ? R : never;

// ===== CONDITIONAL RENDERING =====
export type ConditionalRender<T, U> = T extends true ? U : never;

// ===== ERROR HANDLING =====
export type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
};

// ===== ROUTING =====
export type RouteParams<T extends string> = T extends `${string}:${infer Param}/${infer Rest}` 
  ? Param | RouteParams<Rest>
  : T extends `${string}:${infer Param}` 
  ? Param 
  : never;

export type RouteQuery<T extends string> = T extends `${string}?${infer Query}` ? Query : never;
