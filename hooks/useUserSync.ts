import { useQuery } from "@tanstack/react-query";
import { useUser as useClerkUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { userApi } from "@/lib/api/axios";
import { useUserStore } from "@/store/userStore";

export function useUserSync() {
  const { isSignedIn, user: clerkUser } = useClerkUser();
  const { setUser, setLoading, setError, clearUser } = useUserStore();

  // Query to sync user data
  const query = useQuery({
    queryKey: ["user-sync", clerkUser?.id],
    queryFn: userApi.syncUser,
    enabled: isSignedIn && !!clerkUser,
    staleTime: 1000 * 60 * 5,
    retry: 2,
  });

  // Sync query state pake Zustand store
  useEffect(() => {
    if (query.isLoading) {
      setLoading(true);
    } else if (query.error) {
      setLoading(false);
      setError(query.error instanceof Error ? query.error.message : "Failed to sync user");
    } else if (query.data?.user) {
      setLoading(false);
      setUser(query.data.user);
    }
  }, [query.isLoading, query.error, query.data, setLoading, setError, setUser]);

  // Clear data user kalo udah logout
  useEffect(() => {
    if (!isSignedIn) {
      clearUser();
    }
  }, [isSignedIn, clearUser]);

  return query;
}
