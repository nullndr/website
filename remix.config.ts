import type { AppConfig } from "@remix-run/dev";

export default {
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: ["mdx-bundler"],
  tailwind: true,
} satisfies AppConfig;
