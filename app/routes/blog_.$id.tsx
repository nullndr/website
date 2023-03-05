import type { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";
import { findPost } from "~/models/posts.server";
import { getMdxFile } from "~/utils/posts.server";

export const loader = async ({ params }: LoaderArgs) => {
  const id = params.id;
  if (id == null) {
    throw new Response(null, { status: 400 });
  }

  const post = await findPost(id);
  if (post == null) {
    throw new Response(null, { status: 404 });
  }

  const { code } = await getMdxFile(post.path);
  return { post, code };
};

export default function () {
  const { post, code } = useLoaderData<typeof loader>();
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className="h-fit w-full flex flex-col items-center">
      <div className="mt-5 hover:text-[#e6c2bf] text-xl font-bold">
        <Link to="/blog">Go back</Link>
      </div>
      <div className="mt-5 text-[#ffff00] text-3xl font-bold">{post.title}</div>
      <div className="m-3 lg:w-1/3 prose dark:prose-invert prose-a:no-underline prose-a:font-bold">
        <Component />
      </div>
      <div className="mt-5 mb-5 hover:text-[#e6c2bf] text-xl font-bold">
        <Link to="/blog">Go back</Link>
      </div>
    </div>
  );
}
