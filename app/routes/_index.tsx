import { Link } from "@remix-run/react";
import {
  FaGithub,
  FaGitlab,
  FaKey,
  FaLinkedin,
  FaMastodon,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-around h-[100vh]">
      <div>
        <div className="text-center text-[6vw]">
          <span>$ echo "Hello, world!"</span>
          <span className="animate-blink">|</span>
        </div>
        <nav className="flex justify-center flex-wrap">
          {/*
           * The component `IconProvider.Provider` doesn't work very well.
           * I dunno way but I'm too lazy to search for the cause.
           */}
          <a rel="me" href="https://mastodon.uno/@nullndr" className="p-2">
            <FaMastodon color="yellow" size="3em" />
          </a>
          <a href="https://t.me/nullndr" className="p-2">
            <FaTelegramPlane color="yellow" size="3em" />
          </a>
          <a href="https://gitlab.com/nullndr" className="p-2">
            <FaGitlab color="yellow" size="3em" />
          </a>
          <a href="https://github.com/nullndr" className="p-2">
            <FaGithub color="yellow" size="3em" />
          </a>
          <a href="https://twitter.com/nullndr" className="p-2">
            <FaTwitter color="yellow" size="3em" />
          </a>
          <a href="mailto: nullndr@duck.com" className="p-2">
            <MdEmail color="yellow" size="3em" />
          </a>
          <a href="https://linkedin.com/in/nullndr" className="p-2">
            <FaLinkedin color="yellow" size="3em" />
          </a>
          <a href="/key.pub" download={true} className="p-2">
            <FaKey color="yellow" size="3em" />
          </a>
        </nav>
        <div className="pt-10 flex flex-col items-center text-xl">
          <Link to="/blog" className="hover:text-[#e6c2bf]">
            Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
