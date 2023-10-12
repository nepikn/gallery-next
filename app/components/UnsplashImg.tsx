import Image from "next/image";
import { Buffer } from "node:buffer";
import { getPlaiceholder } from "plaiceholder";
import { Photo } from "@/app/api/unsplash";

interface UnsplashImgProp {
  photo: Photo;
  className?: string;
  quality?: keyof Photo["urls"];
}

export async function UnsplashImg({
  photo,
  className,
  quality = "regular",
}: UnsplashImgProp) {
  return (
    <Image
      src={photo.urls[quality]}
      alt={photo.alt_description}
      width={photo.width}
      height={photo.height}
      placeholder="blur"
      blurDataURL={await blurDataURL(photo)}
      className={`h-full w-full max-w-none object-cover ${className}`}
    />
  );
}

async function blurDataURL(photo: Photo) {
  const res = await fetch(photo.urls.thumb);
  const arrayBuffer = await res.arrayBuffer();
  const { base64 } = await getPlaiceholder(Buffer.from(arrayBuffer));

  return base64;
}
