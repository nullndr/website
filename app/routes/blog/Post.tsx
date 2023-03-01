import { Link } from "@remix-run/react";

type PostProps = {
  title: string;
  description: string | null;
  id: string;
  createdAt: string;
};

export function Post({ title, description, id, createdAt }: PostProps) {
  return (
    <div className="mt-5">
      <div className="p-5 border-gray-600 border-2 rounded-lg">
        <Link to={id}>
          <div className="text-center">
            <span className="text-[#ffff00] hover:text-[#e6c2bf] font-bold text-2xl">
              {title}
            </span>
            <span className="ml-2 font-bold">{`(${new Date(
              createdAt
            ).toLocaleDateString()})`}</span>
          </div>
          {description && (
            <div className="mt-5 italic text-xl max-w-3xl text-center">
              {description}
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}
