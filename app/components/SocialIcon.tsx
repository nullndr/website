export type SocialIconProps = {
  href: string;
  alt: string;
  src: string;
};

export function SocialIcon({ href, alt, src }: SocialIconProps) {
  return (
    <a href={href} className={"p-2"}>
      <img alt={alt} src={src} className={"max-h-[5vh] max-w-[5vw]"} />
    </a>
  );
}
