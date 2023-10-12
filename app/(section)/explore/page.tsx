import { Photo, getCollection } from "@/app/api/unsplash";
import { Metadata } from "next";
import Link from "next/link";
import Figcaption from "../../components/Figcaption";
import Section from "../../components/Section";
import { UnsplashImg } from "../../components/UnsplashImg";

const title = "Explore";

export const metadata: Metadata = {
  title: title,
};

export default async function Explore() {
  const photos = await getCollection();
  const liClasses = [
    "row-span-3",
    "row-span-5",
    "row-span-4",
    "row-span-3",
    "row-span-4",
    "row-span-5",
    "row-span-3",
  ].map((span) => `mb-8 ${span}`);

  return (
    <Section name={title}>
      <ul className="mx-auto grid w-5/6 md:auto-rows-[6.25rem] md:grid-cols-2 md:gap-x-4 lg:grid-cols-3">
        {photos.reverse().map((photo, i) => (
          <li key={photo.id} className={liClasses[i]}>
            <ExploreFigure {...photo} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

function ExploreFigure(photo: Photo) {
  return (
    <figure className="group relative h-full w-full">
      <Figcaption
        className="absolute bottom-0 right-0 z-10 hidden w-full p-6 text-right group-hover:block [&_h3]:text-3xl"
        {...{
          caption: photo.caption,
          authorName: photo.user.name,
          authorLink: photo.user.links.html,
        }}
      />
      <Link href={"photos/" + photo.id}>
        <UnsplashImg photo={photo} className="group-hover:opacity-50" />
      </Link>
    </figure>
  );
}
