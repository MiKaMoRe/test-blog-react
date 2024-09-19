export interface Post {
  id: number;
  title: string;
  content: string;
  slug: string;
  user_id?: number;
  created_at: string;
  updated_at: string;
}

export type TGetResponse<T> = {
  data: T | null;
  status: number;
  message?: string;
};

export interface JWTHeaders {
  "Content-Type"?: string;
  Authorization?: string;
}
