import type { AppConfig } from "@remix-run/dev";

export default {
  ignoredRouteFiles: ["**/.*"],
  tailwind: true,
  browserNodeBuiltinsPolyfill: {
    modules: {
      path: true,
      fs: true,
      vm: true,
      util: true,
      buffer: true,
      string_decoder: true,
      events: true,
      os: true,
      crypto: true,
      http: true,
      child_process: true,
      https: true,
      url: true,
      net: true,
      tls: true,
      assert: true,
      stream: true,
      zlib: true,
      punycode: true,
    },
  },
} satisfies AppConfig;
