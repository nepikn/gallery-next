import Image from "next/image";
import Link from "next/link";
import { Buffer } from "node:buffer";
import { getPlaiceholder } from "plaiceholder";
import Figcaption from "../components/Figcaption";
import Section from "../components/Section";

export default async function Explore() {
  const photos = await getCollection();
  const liClasses = [
    "row-span-4",
    "row-span-5",
    "row-span-3",
    "row-span-3",
  ].map((span) => `mb-8 ${span}`);

  return (
    <Section name="Explore">
      <ul className="mx-auto w-5/6 grid md:grid-cols-2 md:gap-x-4 md:auto-rows-[6.25rem] lg:grid-cols-3">
        {photos.map((photo, i) => (
          <li key={photo.id} className={liClasses[i]}>
            <ExploreFigure photo={photo} />
          </li>
        ))}
      </ul>
    </Section>
  );
}

export async function getCollection(): Promise<Photo[]> {
  const res = await fetch(
    "https://api.unsplash.com/collections/b5_z5iwSu5E/photos?per_page=4",
    {
      headers: {
        "Accept-Version": "v1",
        Authorization: "Client-ID " + process.env.UNSPLASH_ACCESS_KEY,
      },
    }
  );

  return (await res.json()).map((p: Photo) =>
    Object.assign(p, {
      caption: (p.description || p.alt_description).replace(/\s*-.*/, ""),
    })
  );
}

function ExploreFigure({ photo }: { photo: Photo }) {
  return (
    <figure className="relative h-full w-full group">
      <Figcaption
        className="[&_h3]:text-3xl w-full absolute bottom-0 right-0 z-10 hidden p-6 text-right group-hover:block"
        {...{
          caption: photo.caption,
          author: photo.user.name,
          url: photo.user.links.html,
        }}
      />
      <Link href={"photos/" + photo.id}>
        <ExploreImg photo={photo} className="group-hover:opacity-50" />
      </Link>
    </figure>
  );
}

export async function ExploreImg({
  photo,
  className,
  quality = "regular",
}: {
  photo: Photo;
  className?: string;
  quality?: keyof Photo["urls"];
}) {
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

interface Photo {
  caption: string;
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: [];
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: [];
  sponsorship: null;
  topic_submissions: {};
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string;
      portfolio_url: string;
      twitter_username: string;
      paypal_email: string | null;
    };
  };
}
