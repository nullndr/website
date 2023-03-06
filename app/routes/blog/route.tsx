import { useLoaderData } from "@remix-run/react";
import { Link } from "~/components/Link";
import { findPosts } from "~/models/posts.server";
import { EmptyState } from "./EmptyState";
import { Post } from "./Post";

export const loader = async () => {
  return findPosts();
};

export default function () {
  const posts = useLoaderData<typeof loader>();
  return (
    <div className="h-fit w-full flex flex-col items-center">
      <Link to="/">Home</Link>
      <div className="mt-5 mx-5 sm:mx-0 md:text-3xl text-[#ffff00] font-bold">
        <span>Here I blog about whatever get my attention</span>
      </div>
      {posts.length > 0 ? (
        <div className="mt-10 w-full flex flex-col items-center space-y-5">
          {posts.map((post, i) => (
            <Post {...post} key={i} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
