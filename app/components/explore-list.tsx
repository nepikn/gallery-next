import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { Figcaption } from "../page";
import { ApiResponse } from "unsplash-js/dist/helpers/response";

interface Photo {
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

export default function ExploreList() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const liSpans = [4, 5];

  useEffect(() => {
    // console.log(import.meta.url);
    fetch("/unsplash")
      .then((res) => res.json())
      .then(setPhotos);
  }, []);

  return photos.length ? (
    <ul className="grid md:grid-cols-2 md:gap-x-4 lg:auto-rows-[6.25rem] lg:grid-cols-3">
      {photos.map((photo, i) => (
        <li key={photo.id} className={"mb-8 row-span-" + liSpans[i]}>
          <ExploreFigure photo={photo} />
        </li>
      ))}
    </ul>
  ) : (
    <div>Loading...</div>
  );
}

function ExploreFigure({ photo }: { photo: Photo }) {
  const { alt_description, user, urls } = photo;
  return (
    <figure className="group relative h-full w-full">
      <Figcaption
        className="absolute bottom-0 right-0 z-10 hidden p-6 text-right group-hover:block"
        {...{
          caption: alt_description,
          author: user.name,
          url: user.links.html,
        }}
      />
      <img
        src={urls.small}
        className="h-full w-full max-w-none object-cover group-hover:opacity-50"
      />
    </figure>
  );
}
