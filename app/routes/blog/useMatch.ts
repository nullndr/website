import { useMatches } from "@remix-run/react";

export function useMatch() {
  const matches = useMatches();
  return matches[matches.length - 1];
}
