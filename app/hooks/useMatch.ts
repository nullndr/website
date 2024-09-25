import { useMatches } from "@remix-run/react";

export function useMatch() {
  const matches = useMatches();
  const { handle, ...rest } = matches[matches.length - 1];

  if (handle == null) {
    throw new Error(`handle is missing for ${rest.pathname}`);
  }

  return { handle, ...rest } as unknown as typeof rest & {
    handle: { to: string; text: string };
  };
}
