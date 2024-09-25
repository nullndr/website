import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Outlet } from "react-router-dom";
import { LinkWrapper } from "~/components/LinkWrapper";
import { useMatch } from "~/hooks/useMatch";

export const meta: MetaFunction = () => {
  return [
    {
      title: "Nullndr's blog",
    },
    {
      property: "og:title",
      content: "Nullndr's blog",
    },
    {
      property: "description",
      content: "Another blog by Nullndr.",
    },
  ];
};

export default function () {
  const { handle } = useMatch();

  return (
    <div className="space-y-6">
      <LinkWrapper>
        <Link to={handle.to}>{handle.text}</Link>
      </LinkWrapper>
      <Outlet />
    </div>
  );
}
