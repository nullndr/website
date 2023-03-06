import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";
import { Link } from "~/components/Link";
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
  const MdxComponent = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className="h-fit mb-5 w-full flex flex-col items-center">
      <Link to="/blog">Go Back</Link>
      <div className="mt-5 text-[#ffff00] text-3xl font-bold">{post.title}</div>
      <div className="m-3 xl:w-1/2 prose dark:prose-invert prose-a:no-underline prose-a:font-bold">
        <MdxComponent />
      </div>
    </div>
  );
}
