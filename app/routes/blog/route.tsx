import { Link, Outlet } from "@remix-run/react";
import { LinkWrapper } from "~/components/LinkWrapper";
import { useMatch } from "./useMatch";

export default function () {
  const { handle } = useMatch();
  return (
    <div>
      <LinkWrapper>
        <Link to={handle.to}>{handle.text}</Link>
      </LinkWrapper>
      <Outlet />
    </div>
  );
}
