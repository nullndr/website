import { Link, Outlet } from "@remix-run/react";
import { useMatch } from "./useMatch";

export default function () {
  const { handle } = useMatch();
  return (
    <div className="flex h-screen min-h-full flex-col items-center">
      {handle && (
        <Link
          className="mt-5 hover:text-[#e6c2bf] text-xl font-bold"
          to={handle.to}
        >
          {handle.text}
        </Link>
      )}
      <Outlet />
    </div>
  );
}
