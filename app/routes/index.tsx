import { IconContext } from "react-icons";
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
    <div className={"w-auto"}>
      <div
        className={"text-center text-[6vw] text-[#d6d6d6] font-['monospace']"}
      >
        <span>$ echo "Hello, world!" </span>
        <span className={"animate-blink"}>|</span>
      </div>
      <div>
        <nav className={"flex justify-center flex-wrap"}>
          <IconContext.Provider
            value={{
              color: "yellow",
              size: "3em",
            }}
          >
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
            <a href="/assets/pgpkey.pub" className="p-2">
              <FaKey />
            </a>
          </IconContext.Provider>
        </nav>
      </div>
    </div>
  );
}
