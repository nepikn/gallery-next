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
      <h3 className="mb-2 text-4xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
        {caption}
      </h3>
      <Author {...{ link: authorLink, name: authorName }} />
    </figcaption>
  );
}
