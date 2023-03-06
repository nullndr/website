import { Link as RemixLink } from "@remix-run/react";

type LinkProps = React.PropsWithChildren<{ to: string }>;

export function Link({ to, children }: LinkProps) {
  return (
    <RemixLink to={to} className="mt-5 hover:text-[#e6c2bf] text-xl font-bold">
      {children}
    </RemixLink>
  );
}
