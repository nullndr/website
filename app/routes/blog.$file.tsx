import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client/index.js";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { Notbyai } from "~/components/Notbyai";
import { Title } from "~/components/Title";
import { useFormattedDate } from "~/hooks";
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

export default function Post() {
  const {
    code,
    frontmatter: { title, date },
    file,
  } = useLoaderData<typeof loader>();
  const formattedDate = useFormattedDate(date);
  const MdxComponent = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="mx-2">
      <header>
        <Title>{title}</Title>
        <span>
          <time>{formattedDate}</time> ·{" "}
          <Link to="/blog" className="hover:text-[#e6c2bf] font-bold">
            Go Back
          </Link>
        </span>
      </header>

      <main>
        <div className="space-y-5">
          <div className=" prose-blockquote:bg-[#282c34] prose-blockquote:border-l-4 prose-blockquote:border-[#21252b] prose-blockquote:px-2 prose-blockquote:py-2 prose-blockquote:rounded-r">
            <div className="prose-h2:text-[#ffff00] prose-h2:font-bold prose-h2:text-2xl">
              <div className="prose-code:px-1 prose-code:py-0.5 prose-code:bg-[#282c34] prose-code:text-[#d6d6d6] prose-code:rounded prose-code:font-mono">
                <div className="space-y-5 dark:prose-invert prose-a:font-bold hover:prose-a:text-[#ffff00] prose-p:text-[#d6d6d6]">
                  <MdxComponent />
                </div>
              </div>
            </div>
          </div>
          <Notbyai />
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
      </main>
    </div>
  );
}
