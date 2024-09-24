import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
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
