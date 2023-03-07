import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";
import { Title } from "~/components/Title";
import { findPost } from "~/models/posts.server";
import { getMdxFile } from "~/utils/posts.server";

export const handle = {
  to: "/blog",
  text: "Go Back",
};

export const loader = async ({ params }: LoaderArgs) => {
  const id = params.id;
  if (id == null) {
    throw new Response(null, { status: 400 });
  }

  const post = await findPost(id);
  if (post == null) {
    throw new Response(null, { status: 404 });
  }

  const { code } = await getMdxFile(post.fileName);
  return { post, code };
};

export default function () {
  const { post, code } = useLoaderData<typeof loader>();
  const MdxComponent = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Title>{post.title}</Title>
      <div className="m-3 mt-10 xl:w-1/2 prose dark:prose-invert prose-a:no-underline prose-a:font-bold">
        <MdxComponent />
      </div>
    </>
  );
}
