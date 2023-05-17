import { Link } from "@remix-run/react";
import { BlogWrapper } from "~/components/BlogWrapper";

type PostProps = {
  filename: string;
  title: string;
  published: string;
  description: string | null;
};

export function Post({ title, description, filename, published }: PostProps) {
  return (
    <BlogWrapper>
      <div className="p-5 text-center font-bold border-gray-600 border-2 rounded-lg">
        <Link to={filename}>
          <span className="text-[#ffff00] hover:text-[#e6c2bf] text-2xl">
            {title}
          </span>
          <span className="ml-2">{`(${new Date(
            published,
          ).toLocaleDateString()})`}</span>
          {description && <div className="mt-5 text-xl">{description}</div>}
        </Link>
      </div>
    </BlogWrapper>
  );
}
