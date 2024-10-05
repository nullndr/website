import { remarkCodeHike } from "@code-hike/mdx";
import { bundleMDX } from "mdx-bundler";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

type FrontMatter = {
  title: string;
  description: string;
  published: Date;
  isFeatured: boolean;
};

export const getMdxFile = async (file: string) => {
  const filePath = path.join(process.cwd(), `posts/${file}.mdx`);
  const postContent = (await readFile(filePath)).toString();
  return bundleMDX<FrontMatter>({
    source: postContent,
    mdxOptions(options) {
      return {
        rehypePlugins: [...(options.rehypePlugins ?? [])],
        remarkPlugins: [
          ...(options.remarkPlugins ?? []),
          [
            remarkCodeHike,
            {
              theme: "one-dark-pro",
              lineNumbers: true,
              showCopyButton: true,
              autoImport: true,
            },
          ],
        ],
      };
    },
  });
};

export type Post = Omit<FrontMatter, "published"> & {
  filename: string;
  published: string;
};

export const findPosts = async () => {
  const files = await readdir("posts");
  const posts: Post[] = [];
  for (const file of files.filter((file) => file.endsWith(".mdx"))) {
    const filePath = path.join(process.cwd(), `posts/${file}`);
    const postContent = (await readFile(filePath)).toString();
    const { frontmatter } = await bundleMDX<FrontMatter>({
      source: postContent,
      mdxOptions() {
        return {
          remarkPlugins: [
            [
              remarkCodeHike,
              {
                theme: "one-dark-pro",
                lineNumbers: true,
                showCopyButton: true,
                autoImport: true,
              },
            ],
          ],
        };
      },
    });

    posts.push({
      ...frontmatter,
      filename: file.replace(".mdx", ""),
      published: frontmatter.published.toISOString(),
    });
  }

  return posts.sort((a, b) =>
    new Date(a.published) > new Date(b.published) ? -1 : 1,
  );
};
