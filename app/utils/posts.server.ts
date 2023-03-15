import { remarkCodeHike } from "@code-hike/mdx";
import { readdir, readFile } from "fs/promises";
import { bundleMDX } from "mdx-bundler";
import codeHikeTheme from "shiki/themes/one-dark-pro.json";

type FrontMatter = {
  title: string;
  description: string;
  published: string;
};

export const getMdxFile = async (file: string) => {
  return bundleMDX<FrontMatter>({
    source: (await readFile(`./posts/${file}.mdx`)).toString(),
    mdxOptions(options) {
      return {
        rehypePlugins: [...(options.rehypePlugins ?? [])],
        remarkPlugins: [
          ...(options.remarkPlugins ?? []),
          [
            remarkCodeHike,
            {
              theme: codeHikeTheme,
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

export const findPosts = async () => {
  const files = await readdir("posts");
  const posts: (FrontMatter & {
    filename: string;
  })[] = [];
  for (const file of files.filter((file) => file.endsWith(".mdx"))) {
    const { frontmatter } = await bundleMDX<FrontMatter>({
      source: (await readFile(`./posts/${file}`)).toString(),
      mdxOptions() {
        return {
          remarkPlugins: [
            [
              remarkCodeHike,
              {
                theme: codeHikeTheme,
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
      filename: file.replace(".mdx", ""),
      description: frontmatter.description,
      title: frontmatter.title,
      published: frontmatter.published,
    });
  }

  return posts.sort((a, b) =>
    new Date(a.published) > new Date(b.published) ? -1 : 1
  );
};
