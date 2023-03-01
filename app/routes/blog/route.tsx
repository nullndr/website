import { Link, useLoaderData } from "@remix-run/react";
import { findPosts } from "~/models/posts.server";
import { EmptyState } from "./EmptyState";
import { Post } from "./Post";
import { PostsWrapper } from "./PostsWrapper";

export const loader = async () => {
  return findPosts();
};

export default function () {
  const posts = useLoaderData<typeof loader>();
  return (
    <div className="m-5 h-max flex flex-col items-center">
      <div className="hover:text-[#e6c2bf] text-xl">
        <Link to="/">Home</Link>
      </div>
      <div className="mt-5 lg:text-3xl">
        <span>Here I blog about whatever get my attention</span>
      </div>
      {posts.length > 0 ? (
        <PostsWrapper>
          {posts.map((post) => (
            <Post {...post} />
          ))}
        </PostsWrapper>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
