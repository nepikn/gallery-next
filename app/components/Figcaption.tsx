import Author from "./Author";

interface FigcaptionProp {
  className: string;
  caption: string;
  url: string;
  author: string;
}

export default function Figcaption({
  className,
  caption,
  url,
  author,
}: FigcaptionProp) {
  return (
    <figcaption className={className}>
      <h3 className="mb-2 text-4xl font-medium whitespace-nowrap overflow-hidden text-ellipsis">
        {caption}
      </h3>
      <Author {...{ url, name: author }} />
    </figcaption>
  );
}
