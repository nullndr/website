import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import { LinkWrapper } from "~/components/LinkWrapper";
import { useMatch } from "./useMatch";

export default function () {
  const { handle } = useMatch() as unknown as {
    handle: { to: string; text: string };
  };
  return (
    <div>
      <LinkWrapper>
        <Link to={handle.to}>{handle.text}</Link>
      </LinkWrapper>
      <Outlet />
    </div>
  );
}
