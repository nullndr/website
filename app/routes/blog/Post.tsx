import { Link } from "@remix-run/react";

type PostProps = {
  title: string;
  description?: string;
  href: string;
};

export function Post({ title, description, href }: PostProps) {
  return (
    <div className="mt-10">
      <Link to={href}>
        <div className="text-[#ffff00] font-bold text-2xl">{title}</div>
        <div className="italic text-xl">{description}</div>
      </Link>
    </div>
  );
}
