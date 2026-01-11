"use client";

import { useUserSync } from "@/hooks/useUserSync";

/**
 * UserSyncProvider
 *
 * Automatically syncs user data from Clerk to NeonDB when user logs in.
 * This component should be placed high in the component tree, inside QueryProvider.
 *
 * The hook will:
 * - Trigger when user signs in with Clerk
 * - Call the /api/user/sync endpoint
 * - Save user data to NeonDB
 * - Update Zustand store with user data
 */
export function UserSyncProvider({ children }: { children: React.ReactNode }) {
  // This hook automatically syncs user on authentication
  useUserSync();

  return <>{children}</>;
}
