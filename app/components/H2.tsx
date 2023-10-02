export default function H2({ name }: { name: string }) {
  return (
    <h2 className="border-b border-gray-400 pb-8 text-5xl font-semibold">
      {name}
    </h2>
  );
}
