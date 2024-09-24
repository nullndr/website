import { SerializeFrom } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { useFormattedDate } from "~/hooks";
import type { Post } from "~/utils/posts.server";

export function PostPreview({
  title,
  description,
  filename,
  published,
}: SerializeFrom<Post>) {
  const formattedDate = useFormattedDate(published);
  return (
    <div className="sm:w-full sm:px-5 lg:w-5/6 xl:w-1/3">
      <Link to={filename}>
        <div className="space-y-4 py-3 text-center font-bold border-gray-600 border-2 rounded-lg">
          <div className="text-[#ffff00] text-2xl">{title}</div>
          <div className="text-xl">{description}</div>
          <div>
            <time>{formattedDate}</time>
          </div>
        </div>
      </Link>
    </div>
  );
}
