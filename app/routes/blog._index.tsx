import { useLoaderData } from "@remix-run/react";
import { EmptyState } from "~/components/EmptyState";
import { PostPreview } from "~/components/PostPreview";
import { Title } from "~/components/Title";
import { findPosts } from "~/utils/posts.server";

export const handle = {
  to: "/",
  text: "Home",
};

export const loader = () => {
  return findPosts();
};

export default function Blog() {
  const posts = useLoaderData<typeof loader>();

  return (
    <>
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
    </>
  );
}
