import codeHikeStyle from "@code-hike/mdx/dist/index.css";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: codeHikeStyle },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "nullndr",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-[#202020] text-[#d6d6d6] font-['monospace']">
        <div className="static sm:relative">
          <Outlet />
          <div className="fixed m-3 bottom-0 right-0">
            <a href="https://notbyai.fyi/">
              <img src="https://user-images.githubusercontent.com/62137266/225637256-6b497779-d10e-40be-8c4a-e0e6349d7b25.svg" />
            </a>
          </div>
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-[#202020] text-[#d6d6d6] font-['monospace']">
        <div className="flex flex-col items-center justify-around h-[100vh]">
          <div>
            <div className="text-center text-[#ffff00] text-[10vw] font-bold">
              404
            </div>
            <div className="font-bold">Where do you think you are going?</div>
            <div className="text-center">
              <div className="mt-5 hover:text-[#e6c2bf] lg:text-xl font-bold">
                <Link to="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-[#202020] text-[#d6d6d6] font-['monospace']">
        <div className="flex flex-col items-center justify-around h-[100vh]">
          <div>
            <div className="text-center text-[#ffff00] text-[6vw] font-bold">
              Something bad happened
            </div>
            <div className="text-center">
              <div className="mt-5 hover:text-[#e6c2bf] lg:text-xl font-bold">
                <Link to="/">Home</Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
