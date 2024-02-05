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
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import { Body } from "./components/Body";
import { LinkWrapper } from "./components/LinkWrapper";
import { Notbyai } from "./components/Notbyai";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: codeHikeStyle },
];

export const meta: MetaFunction = () => [
  {
    charSet: "utf-8",
  },
  {
    title: "nullndr",
  },
  {
    property: "viewport",
    content: "width=device-width,initial-scale=1",
  },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <Body>
        <Outlet />
        <Notbyai />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </Body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <html lang="en">
        <head>
          <Meta />
          <Links />
        </head>
        <Body>
          <div className="flex flex-col items-center justify-around h-[100vh]">
            <div>
              <div className="text-center text-[#ffff00] text-[10vw] font-bold">
                404
              </div>
              <div className="font-bold">Where do you think you are going?</div>
              <div className="text-center">
                <LinkWrapper>
                  <Link to="/">Home</Link>
                </LinkWrapper>
              </div>
            </div>
          </div>
        </Body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <Body>
        <div className="flex flex-col items-center justify-around h-[100vh]">
          <div>
            <div className="text-center text-[#ffff00] text-[6vw] font-bold">
              Something bad happened
            </div>
            <div className="text-center">
              <LinkWrapper>
                <Link to="/">Home</Link>
              </LinkWrapper>
            </div>
          </div>
        </div>
      </Body>
    </html>
  );
}
