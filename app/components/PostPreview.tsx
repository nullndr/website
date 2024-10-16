import type { SerializeFrom } from "@remix-run/node";
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
    <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/3">
      <Link to={filename}>
        <div className="space-y-4 py-3 text-center font-bold border-gray-600 border-2 rounded-lg">
          <div className="text-[#ffff00]">{title}</div>
          <div>{description}</div>
          <div>
            <time>{formattedDate}</time>
          </div>
        </div>
      </Link>
    </div>
  );
}
