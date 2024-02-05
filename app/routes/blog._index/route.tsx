import { useLoaderData } from "@remix-run/react";
import { Title } from "~/components/Title";
import { findPosts } from "~/utils/posts.server";
import { EmptyState } from "./EmptyState";
import { Post } from "./Post";

export const handle = {
  to: "/",
  text: "Home",
};

export const loader = () => {
  return findPosts();
};

export default function () {
  const posts = useLoaderData<typeof loader>();
  return (
    <div className="space-y-5">
      <Title>Here I blog about whatever get my attention</Title>
      {posts.length > 0 ? (
        posts.map((post, i) => <Post {...post} key={i} />)
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
