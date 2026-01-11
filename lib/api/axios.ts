import axios from "axios";
import { UserSyncResponse, UserSyncError } from "@/type/user";

/**
 * Configured Axios instance for API calls
 * Using empty baseURL to make relative requests to Next.js API routes
 */
export const apiClient = axios.create({
  baseURL: "", // Empty for relative paths in Next.js
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * API response interceptor for error handling
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Server responded with error status
      console.error("API Error:", error.response.data);
    } else if (error.request) {
      // Request made but no response
      console.error("Network Error:", error.request);
    } else {
      // Error setting up request
      console.error("Request Error:", error.message);
    }
    return Promise.reject(error);
  }
);

/**
 * User API endpoints
 */
export const userApi = {
  /**
   * Sync user data from Clerk to database
   * No body needed - data extracted from Clerk session on server
   */
  syncUser: async (): Promise<UserSyncResponse> => {
    const { data } = await apiClient.post<UserSyncResponse>("/api/user/sync");
    return data;
  },
};
