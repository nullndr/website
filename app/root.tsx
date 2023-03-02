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
        <Outlet />
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
              <Link to="/" className="hover:text-[#e6c2bf]">
                Home
              </Link>
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
            <div className="text-center text-[#ffff00] text-[10vw] font-bold">
              Something bad happened
            </div>
            <div className="text-center">
              <Link to="/" className="hover:text-[#e6c2bf]">
                Home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
