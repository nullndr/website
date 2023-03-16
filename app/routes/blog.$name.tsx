import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import React from "react";
import { Title } from "~/components/Title";
import { getMdxFile } from "~/utils/posts.server";

export const handle = {
  to: "/blog",
  text: "Go Back",
};

export const loader = async ({ params }: LoaderArgs) => {
  const name = params.name;
  if (name == null) {
    throw new Response(null, { status: 400 });
  }

  return getMdxFile(name);
};

export default function () {
  const {
    code,
    frontmatter: { title },
  } = useLoaderData<typeof loader>();
  const MdxComponent = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <Title>{title}</Title>
      <div className="mx-3 py-10 sm:mx-0 xl:w-1/2 prose dark:prose-invert prose-a:no-underline prose-a:font-bold">
        <MdxComponent />
      </div>
    </>
  );
}
