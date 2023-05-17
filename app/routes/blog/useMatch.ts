import { useMatches } from "@remix-run/react";

export function useMatch() {
  const matches = useMatches();
  const { handle, ...rest } = matches[matches.length - 1];

  if (handle == null) {
    throw new Error("Bruh");
  }

  return { handle, ...rest};
}
