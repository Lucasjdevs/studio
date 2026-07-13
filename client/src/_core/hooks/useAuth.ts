import { getLoginUrl } from "@/const";
import { useCallback, useEffect, useMemo } from "react";

type UseAuthOptions = {
  redirectOnUnauthenticated?: boolean;
  redirectPath?: string;
};

type AuthUser = {
  name?: string;
  email?: string;
};

export function useAuth(options?: UseAuthOptions) {
  const { redirectOnUnauthenticated = false, redirectPath = getLoginUrl() } =
    options ?? {};

  const logout = useCallback(() => {
    if (typeof window !== "undefined") {
      try {
        sessionStorage.removeItem("manus-cookie");
      } catch {}
    }
  }, []);

  useEffect(() => {
    if (!redirectOnUnauthenticated || typeof window === "undefined") return;
    if (window.location.pathname === redirectPath) return;

    window.location.href = redirectPath;
  }, [redirectOnUnauthenticated, redirectPath]);

  return useMemo(
    () => ({
      user: null as AuthUser | null,
      loading: false,
      error: null,
      isAuthenticated: false,
      refresh: () => undefined,
      logout,
    }),
    [logout]
  );
}
