import { useLoaderData } from "@remix-run/react";
import { Title } from "~/components/Title";
import { findPosts } from "~/utils/posts.server";
import { EmptyState } from "./EmptyState";
import { PostPreview } from "./PostPreview";

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
    <div className="space-y-6">
      <Title>Here I blog about whatever get my attention</Title>
      {posts.length > 0 ? (
        <div className="flex flex-col items-center space-y-5">
          {posts.map((post, i) => (
            <PostPreview {...post} key={i} />
          ))}
        </div>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
