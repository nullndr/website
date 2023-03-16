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
import { IconContext } from "react-icons/lib";
import { MdEmail } from "react-icons/md";

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
            <IconContext.Provider value={{ color: "yellow", size: "2em" }}>
              <a rel="me" href="https://mastodon.uno/@nullndr" className="p-2">
                <FaMastodon />
              </a>
              <a href="https://t.me/nullndr" className="p-2">
                <FaTelegramPlane />
              </a>
              <a href="https://gitlab.com/nullndr" className="p-2">
                <FaGitlab />
              </a>
              <a href="https://github.com/nullndr" className="p-2">
                <FaGithub />
              </a>
              <a href="https://twitter.com/nullndr" className="p-2">
                <FaTwitter />
              </a>
              <a href="mailto: nullndr@duck.com" className="p-2">
                <MdEmail />
              </a>
              <a href="https://linkedin.com/in/nullndr" className="p-2">
                <FaLinkedin />
              </a>
              <a href="/key.pub" download={true} className="p-2">
                <FaKey />
              </a>
            </IconContext.Provider>
          </nav>
          <div className="pt-5 flex flex-col items-center text-xl">
            <Link to="/blog" className="hover:text-[#e6c2bf] font-bold">
              Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
