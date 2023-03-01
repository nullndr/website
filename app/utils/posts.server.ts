import { remarkCodeHike } from "@code-hike/mdx";
import { readFile } from "fs/promises";
import { bundleMDX } from "mdx-bundler";
import codeHikeTheme from "shiki/themes/one-dark-pro.json";

export const getMdxFile = async (path: string) => {
  const source = await readFile(path);
  return bundleMDX({
    source: source.toString(),
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
};
