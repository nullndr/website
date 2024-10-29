import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "react-router-dom";

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

export default function BlogLayout() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <Outlet />
    </div>
  );
}
