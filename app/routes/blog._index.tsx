import { useLoaderData } from "@remix-run/react";
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
      <div className="flex flex-col items-center space-y-5">
        {posts.map((post) => (
          <PostPreview {...post} key={post.title} />
        ))}
      </div>
    </>
  );
}
