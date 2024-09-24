import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { Notbyai } from "~/components/Notbyai";
import { Title } from "~/components/Title";
import { getMdxFile } from "~/utils/posts.server";

export const handle = {
  to: "/blog",
  text: "Go Back",
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const file = params.file;
  if (file == null) {
    throw new Response(null, { status: 400 });
  }

  const data = await getMdxFile(file);
  return { ...data, file };
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
    file,
  } = useLoaderData<typeof loader>();
  const MdxComponent = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="space-y-6">
      <Title>{title}</Title>
      <div className="flex flex-col items-center">
        <div className="space-y-5 sm:w-full sm:px-5 lg:w-5/6 xl:w-1/3">
          <div className="dark:prose-invert prose-a:no-underline prose-a:font-bold prose-a:text-[#ffff00] prose-p:text-[#d6d6d6]">
            <MdxComponent />
          </div>
          <div>
            <Link
              to={`https://github.com/nullndr/website/edit/main/posts/${file}.mdx`}
              className="hover:text-[#ffff00]"
            >
              <div className="flex justify-end items-center space-x-2 pb-5">
                <FaEdit />
                <div className="font-bold">Typo?</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
