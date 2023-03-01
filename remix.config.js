/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: ["mdx-bundler"],
  future: {
    unstable_tailwind: true,
    v2_routeConvention: true,
  },
};
