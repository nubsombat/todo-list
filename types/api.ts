export interface PaginatedResponse<T> {
    data: T[];
    total: number;
    page: number;
    limit: number;
  }
  
  export interface ApiError {
    message: string;
    code: string;
  }

  export interface ApiResponse<T> {
    isSuccess: boolean;
    data: T;
  }
