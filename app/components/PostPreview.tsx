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
    <div className="">
      <Link to={filename}>
        <div className="py-3 font-bold">
          <div className="text-[#ffff00]">{title}</div>
          <div>{description}</div>
          <time className="text-sm">{formattedDate}</time>
        </div>
      </Link>
    </div>
  );
}
