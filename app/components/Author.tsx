interface AuthorProp {
  url: string;
  name: string;
}

export default function Author({ url, name }: AuthorProp) {
  return (
    <a
      href={url}
      target="_blank"
      className="z-20 inline-flex items-center space-x-2 text-xl font-medium text-stone-500 whitespace-nowrap"
    >
      <span>{name}</span>
      <span className="material-symbols-outlined">open_in_new</span>
    </a>
  );
}
