import { Link, useLoaderData } from "@remix-run/react";
import { findPosts } from "~/models/posts.server";
import { EmptyState } from "./EmptyState";
import { Post } from "./Post";

export const loader = async () => {
  return findPosts();
};

export default function () {
  const posts = useLoaderData<typeof loader>();
  return (
    <div className="h-fit flex flex-col items-center">
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="mt-5 hover:text-[#e6c2bf] lg:text-xl font-bold">
            <Link to="/">Home</Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center">
          <div className="mt-5 mx-5 sm:mx-0 lg:text-3xl text-[#ffff00] font-bold">
            <span>Here I blog about whatever get my attention</span>
          </div>
        </div>
      </div>
      {posts.length > 0 ? (
        <div className="w-full">
          <div className="mt-10 flex flex-col items-center space-y-5">
            {posts.map((post, i) => (
              <Post {...post} key={i} />
            ))}
          </div>
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
