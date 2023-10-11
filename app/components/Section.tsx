import React from "react";

interface SectionProp {
  name: string;
  children: React.ReactNode;
}

export default function Section({
  name,
  children,
}: SectionProp) {
  const id = name
    .split(" ")
    .map((str) => str.toLowerCase())
    .join("-");

  return (
    <section id={id} className="my-8 space-y-8 md:my-16 lg:my-24">
      <div className={`mx-auto w-5/6`}>
        <h2 className="border-b border-gray-400 pb-8 text-5xl font-semibold">
          {name}
        </h2>
      </div>
      {children}
    </section>
  );
}
