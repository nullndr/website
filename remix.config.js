const { remarkCodeHike } = require("@code-hike/mdx");
const theme = require("shiki/themes/one-dark-pro.json");

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: ["mdx-bundler"],
  tailwind: true,
  serverModuleFormat: "cjs",
  mdx: {
    remarkPlugins: [[remarkCodeHike, { theme }]],
  },
};
