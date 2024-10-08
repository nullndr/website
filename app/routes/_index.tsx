import { Link } from "@remix-run/react";
import {
  FaGithub,
  FaGitlab,
  FaLinkedin,
  FaMastodon,
  FaStackOverflow,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { MdEmail } from "react-icons/md";
import { LinkWrapper } from "~/components/LinkWrapper";
import { Notbyai } from "~/components/Notbyai";

export default function Index() {
  return (
    <div className="flex h-screen min-h-full flex-col justify-center">
      <div className="flex flex-col flex-grow place-content-center">
        <div>
          <div className="text-center text-[6vw]">
            <span>$ echo "Hello, world!"</span>
            <span className="animate-blink">|</span>
          </div>
          <nav className="pt-5 flex justify-center flex-wrap">
            <Notbyai />
            <IconContext.Provider
              value={{ color: "yellow", className: "p-2", size: "3em" }}
            >
              <a rel="me" href="https://mastodon.uno/@nullndr">
                <FaMastodon />
              </a>
              <a href="https://t.me/nullndr">
                <FaTelegramPlane />
              </a>
              <a href="https://gitlab.com/nullndr">
                <FaGitlab />
              </a>
              <a href="https://github.com/nullndr">
                <FaGithub />
              </a>
              <a href="https://twitter.com/nullndr">
                <FaTwitter />
              </a>
              <a href="mailto: nullndr@duck.com">
                <MdEmail />
              </a>
              <a href="https://linkedin.com/in/nullndr">
                <FaLinkedin />
              </a>
              <a href="https://stackoverflow.com/users/10503039/nullndr">
                <FaStackOverflow />
              </a>
            </IconContext.Provider>
          </nav>
          <div className="flex justify-center items-center space-x-6">
            <LinkWrapper>
              <Link to="/blog">Blog</Link>
            </LinkWrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
