/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: ["mdx-bundler"],
  tailwind: true,
  serverModuleFormat: "cjs",
};
