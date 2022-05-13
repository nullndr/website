import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Nullndr",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "icon",
      href: "/assets/favicon.png",
      type: "image/png",
    },
  ];
}

export default function App() {
  return (
    <html lang="en" className={"h-full bg-white"}>
      <head>
        <Meta />
        <Links />
      </head>
      <body
        className={
          "flex bg-[#202020] flex-col items-center justify-around justify-items-center w-[100vw] h-[100vh]"
        }
      >
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
