import { Link } from "@remix-run/react";

type PostProps = {
  filename: string;
  title: string;
  published: string;
  description: string | null;
};

export function Post({ title, description, filename, published }: PostProps) {
  return (
    <div className="mx-5 md:mx-0 md:w-1/2 lg:w-1/3">
      <div className="p-5 border-gray-600 border-2 rounded-lg">
        <Link to={filename}>
          <div className="text-center font-bold">
            <span className="text-[#ffff00] hover:text-[#e6c2bf] md:text-2xl">
              {title}
            </span>
            <span className="ml-2">{`(${new Date(
              published
            ).toLocaleDateString()})`}</span>
          </div>
          {description && (
            <div className="mt-5 italic md:text-xl max-w-3xl text-center">
              {description}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
