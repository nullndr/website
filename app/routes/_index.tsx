import { Link } from "@remix-run/react";
import {
  FaGithub,
  FaGitlab,
  FaKey,
  FaLinkedin,
  FaMastodon,
  FaStackOverflow,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { MdEmail } from "react-icons/md";
import { LinkWrapper } from "~/components/LinkWrapper";

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
              <a href="/key.pub" download={true}>
                <FaKey />
              </a>
            </IconContext.Provider>
          </nav>
          <LinkWrapper>
            <Link to="/blog">Blog</Link>
          </LinkWrapper>
        </div>
      </div>
    </div>
  );
}
