import { useLoaderData } from "@remix-run/react";
import { Title } from "~/components/Title";
import { findPosts } from "~/utils/posts.server";
import { EmptyState } from "./EmptyState";
import { Post } from "./Post";

export const handle = {
  to: "/",
  text: "Home",
};

export const loader = async () => {
  return findPosts();
};

export default function () {
  const posts = useLoaderData<typeof loader>();
  return (
    <>
      <Title>Here I blog about whatever get my attention</Title>
      {posts.length > 0 ? (
        <div className="mt-10 w-full flex flex-col items-center space-y-5">
          {posts.map((post, i) => (
            <Post {...post} key={i} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </>
  );
}
