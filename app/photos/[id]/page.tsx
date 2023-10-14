import Author from "@/app/components/Author";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPhoto } from "@/app/api/unsplash";
import { UnsplashImg } from "@/app/components/UnsplashImg";

interface PageProp {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: PageProp): Promise<Metadata> {
  const photo = await getPhoto(params.id);

  if (!photo) return {};

  return {
    title: photo.caption,
  };
}

export default async function Page({ params }: PageProp) {
  const photo = await getPhoto(params.id);
  // console.log(photo);

  if (!photo) {
    notFound();
  }

  return (
    <figure className="space-y-8 md:space-y-16">
      <UnsplashImg photo={photo} quality="full" className="h-screen" />
      <figcaption className="mx-auto w-5/6">
        <h1 className="mr-6 inline text-4xl font-medium">{photo.caption}</h1>
        <Author link={photo.user.links.html} name={photo.user.name} />
      </figcaption>
    </figure>
  );
}
