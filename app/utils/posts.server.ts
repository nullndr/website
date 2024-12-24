import { remarkCodeHike } from "@code-hike/mdx";
import { bundleMDX } from "mdx-bundler";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

type FrontMatter = {
  title: string;
  description: string;
  date: Date;
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
  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
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

        return {
          ...frontmatter,
          filename: file.replace(".mdx", ""),
          published: frontmatter.date.toISOString(),
        };
      }),
  );

  return posts.sort((a, b) =>
    new Date(a.published) > new Date(b.published) ? -1 : 1,
  );
};
