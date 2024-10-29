import { Link, useLoaderData } from "@remix-run/react";
import { LinkWrapper } from "~/components/LinkWrapper";
import { PostPreview } from "~/components/PostPreview";
import { Title } from "~/components/Title";
import { findPosts } from "~/utils/posts.server";

export const loader = () => {
  return findPosts();
};

export default function Blog() {
  const posts = useLoaderData<typeof loader>();

  return (
    <>
      <LinkWrapper>
        <Link to="/">Home</Link>
      </LinkWrapper>
      <Title>Here I blog about whatever get my attention</Title>
      <div className="mt-5">
        {posts.map((post) => (
          <PostPreview {...post} key={post.title} />
        ))}
      </div>
    </>
  );
}
