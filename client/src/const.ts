export { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";

export const getLoginUrl = () => {
  if (typeof window === "undefined") {
    return "/";
  }

  return `${window.location.origin}/`;
};
