import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { Figcaption } from "./page";
import { ApiResponse } from "unsplash-js/dist/helpers/response";
// import { log } from "console";

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

const api = createApi({
  accessKey: "keJPHP5nqYQ61etYfzbzttU081n8_GPtmKOy3jh0AeU",
});

export default function ExploreList() {
  const [unsplashRes, setUnsplashRes] = useState<ApiResponse<{
    results: Photo[];
    total: number;
  }> | null>(null);

  useEffect(() => {
    if (unsplashRes) return;

    api.collections
      .getPhotos({
        collectionId: "b5_z5iwSu5E",
        perPage: 3,
        orientation: "landscape",
      })
      .then(setUnsplashRes);
  });

  if (!unsplashRes) {
    return <div>Loading...</div>;
  } else {
    const liSpans = [4, 5];
    console.log(unsplashRes.response!.results.map((p) => JSON.stringify(p)));

    return (
      <ul className="grid md:grid-cols-2 md:gap-x-4 lg:auto-rows-[6.25rem] lg:grid-cols-3">
        {unsplashRes.response!.results.map((photo, i) => (
          <li key={photo.id} className={"mb-8 row-span-" + liSpans[i]}>
            <ExploreFigure photo={photo} />
          </li>
        ))}
      </ul>
    );
  }
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
