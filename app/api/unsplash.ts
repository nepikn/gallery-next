export type Photo = Awaited<ReturnType<typeof getCollection>>[number];

export async function getCollection() {
  const res = await fetch(
    "https://api.unsplash.com/collections/b5_z5iwSu5E/photos",
    {
      headers: {
        "Accept-Version": "v1",
        Authorization: "Client-ID " + process.env.UNSPLASH_ACCESS_KEY,
      },
    },
  );

  return ((await res.json()) as UnsplashPhoto[]).map((p) =>
    Object.assign(p, {
      caption: (p.description ?? p.alt_description).replace(/(\s*-|\.).*/, ""),
    }),
  );
}

export async function getPhoto(id: string) {
  const photos = await getCollection();

  return photos.find((p) => p.id == id);
}

interface UnsplashPhoto {
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
