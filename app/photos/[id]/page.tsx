import Author from "@/app/components/Author";
import { notFound } from "next/navigation";
import { ExploreImg, getCollection } from "../../(section)/explore/page";

export default async function Page({ params }: { params: { id: string } }) {
  const photos = await getCollection();
  const photo = photos.find((p) => p.id == params.id);
  // console.log(photo);

  if (!photo) {
    notFound();
  }

  return (
    <figure className="space-y-8 md:space-y-16">
      <ExploreImg photo={photo} quality="full" className="h-screen w-screen" />
      <figcaption className="mx-auto w-5/6">
        <h1 className="mr-6 inline text-4xl font-medium">{photo.caption}</h1>
        <Author link={photo.user.links.html} name={photo.user.name} />
      </figcaption>
    </figure>
  );
}
