import { SocialIcon, SocialIconProps } from "~/components/SocialIcon";

const socials: SocialIconProps[] = [
  {
    href: "https://t.me/nullndr",
    alt: "Telegram",
    src: "/assets/telegram.png",
  },
  {
    href: "https://gitlab.com/nullndr",
    alt: "GitLab",
    src: "/assets/gitlab.png",
  },
  {
    href: "https://github.com/nullndr",
    alt: "GitHub",
    src: "/assets/github.png",
  },
  {
    href: "https://twitter.com/nullndr",
    alt: "Twitter",
    src: "/assets/twitter.png",
  },
  {
    href: "mailto: andrea@yaaaw.it",
    alt: "Email",
    src: "/assets/email.png",
  },
  {
    href: "https://www.linkedin.com/in/andrea-foletto-5457b5187/",
    alt: "Linkedin",
    src: "/assets/linkedin.png",
  },
  {
    href: "/assets/pgpkey.pub",
    alt: "GPG key",
    src: "/assets/key.png",
  },
];

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
          {socials.map((social) => (
            <SocialIcon
              href={social.href}
              alt={social.alt}
              src={social.src}
              key={social.href}
            />
          ))}
        </nav>
      </div>
    </div>
  );
}
