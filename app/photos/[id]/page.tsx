import { notFound } from "next/navigation";
import {
  ExploreFigure,
  ExploreImg,
  getCollection,
} from "../../components/ExploreList";
import Author from "@/app/components/Author";

export default async function Page({ params }: { params: { id: string } }) {
  const photos = await getCollection();
  const photo = photos.find((p) => p.id == params.id);
  // console.log(photo);

  if (!photo) {
    notFound();
  }

  return (
    <figure className="space-y-8 md:space-y-16">
      <ExploreImg photo={photo} quality="full" className="w-screen h-screen" />
      <figcaption className="mx-auto w-5/6">
        <h1 className="text-4xl font-medium inline mr-6">
          {photo.caption}
        </h1>
        <Author url={photo.user.links.html} name={photo.user.name} />
      </figcaption>
    </figure>
  );
}
