import { default as NextLink } from "next/link";

type LinkProp = Parameters<typeof NextLink>[0] & {
  className?: string;
  opacity?: number;
};

export default function Link(prop: LinkProp) {
  const opacity = prop.opacity ?? 75;
  const className = `hover:opacity-${opacity} group-hover:opacity-${opacity}${
    prop.className ? " " + prop.className : ""
  }`;

  return <NextLink {...prop} className={className} />;
}
