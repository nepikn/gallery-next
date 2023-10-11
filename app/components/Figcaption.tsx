import Author from "./Author";

interface FigcaptionProp {
  className: string;
  caption: string;
  authorLink: string;
  authorName: string;
}

export default function Figcaption({
  className,
  caption,
  authorLink,
  authorName,
}: FigcaptionProp) {
  return (
    <figcaption className={className}>
      <h3 className="mb-2 overflow-hidden text-ellipsis whitespace-nowrap text-4xl font-medium">
        {caption}
      </h3>
      <Author {...{ link: authorLink, name: authorName }} />
    </figcaption>
  );
}
