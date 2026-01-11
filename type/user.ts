// type user untuk definisi data schema user
export interface User {
  id: string;
  full_name: string;
  email: string;
  image_url: string | null;
  credits: number;
  created_at: Date;
  updated_at: Date;
}

// type response API
export interface UserSyncResponse {
  success: true;
  user: User;
}

export interface UserSyncError {
  error: string;
  details?: string;
}

// type state user untuk zustand
export interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearUser: () => void;
}
