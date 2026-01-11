import { create } from "zustand";
import { User, UserState } from "@/type/user";

/**
 * Global user store using Zustand
 * 
 * Manages:
 * - User data (including credits)
 * - Loading states
 * - Error states
 * 
 * Note: Credits are read-only from frontend perspective
 * They can only be modified through backend API endpoints
 */
export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  setUser: (user: User | null) => set({ user, error: null }),
  
  setLoading: (isLoading: boolean) => set({ isLoading }),
  
  setError: (error: string | null) => set({ error, isLoading: false }),
  
  clearUser: () => set({ user: null, error: null, isLoading: false }),
}));

/**
 * Selector hooks for specific user data
 * These provide optimized re-renders
 */
export const useUser = () => useUserStore((state) => state.user);
export const useUserCredits = () => useUserStore((state) => state.user?.credits ?? 0);
export const useUserLoading = () => useUserStore((state) => state.isLoading);
export const useUserError = () => useUserStore((state) => state.error);
