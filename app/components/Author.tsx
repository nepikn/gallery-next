interface AuthorProp {
  url: string;
  author: string;
}

export default function Author({ url, author }: AuthorProp) {
  return (
    <a
      href={url}
      target="_blank"
      className="z-20 inline-flex items-center space-x-2 text-xl font-medium text-stone-500"
    >
      <span>{author}</span>
      <span className="material-symbols-outlined">open_in_new</span>
    </a>
  );
}
