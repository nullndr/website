import { Link } from "@remix-run/react";

export const loader = () => {
  throw new Response(null, {
    status: 404,
  });
};

export default function () {
  return (
    <div className="m-5 h-max">
      <div className="flex flex-col items-center text-[#ffff00] text-3xl font-bold">
        foo
      </div>
      <div className="mt-10 flex flex-col items-end hover:text-[#e6c2bf] text-xl">
        <Link to="/blog">Go back</Link>
      </div>
    </div>
  );
}
