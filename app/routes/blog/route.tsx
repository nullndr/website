import { Link, useLoaderData } from "@remix-run/react";
import { Post } from "./Post";
import { PostsWrapper } from "./PostsWrapper";

export const loader = async () => {
  const posts: {
    title: string;
    description: string;
    href: string;
  }[] = [];

  return posts;
};

export default function () {
  const posts = useLoaderData<typeof loader>();
  return (
    <div className="h-max">
      <div className="mx-10 mt-10">
        <div className="flex flex-col items-center">
          <div className="text-3xl">
            <span>Here I blog about whatever get my attention</span>
          </div>
        </div>
        <div className="mt-5 flex flex-col items-end">
          <Link to="/" className="hover:text-[#e6c2bf] text-xl">
            Home
          </Link>
        </div>
      </div>
      {posts.length > 0 ? (
        <PostsWrapper>
          {posts.map((post) => (
            <Post {...post} />
          ))}
        </PostsWrapper>
      ) : (
        <div className="flex flex-col items-center">
          <div className="text-[#ffff00] font-bold">
            I haven't post anything yet! So here's a pic of my cat
          </div>
          <img src="/cat.jpg" />
        </div>
      )}
    </div>
  );
}
