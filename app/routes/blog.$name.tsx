import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import React from "react";
import { BlogWrapper } from "~/components/BlogWrapper";
import { Title } from "~/components/Title";
import { getMdxFile } from "~/utils/posts.server";

export const handle = {
  to: "/blog",
  text: "Go Back",
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const name = params.name;
  if (name == null) {
    throw new Response(null, { status: 400 });
  }

  return getMdxFile(name);
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (data == null) {
    return [];
  }

  const {
    frontmatter: { title, description },
  } = data;
  return [
    {
      title,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "description",
      content: description,
    },
  ];
};

export default function () {
  const {
    code,
    frontmatter: { title },
  } = useLoaderData<typeof loader>();
  const MdxComponent = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="space-y-5">
      <Title>{title}</Title>
      <BlogWrapper>
        <div className="dark:prose-invert prose-a:no-underline prose-a:font-bold prose-a:text-[#ffff00] prose-p:text-[#d6d6d6]">
          <MdxComponent />
        </div>
      </BlogWrapper>
    </div>
  );
}
