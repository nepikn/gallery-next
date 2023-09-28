import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.unsplash.com/collections/b5_z5iwSu5E/photos?per_page=1",
    {
      headers: {
        "Accept-Version": "v1",
        Authorization: "Client-ID " + process.env.UNSPLASH_ACCESS_KEY,
      },
    }
  );
  const photos = await res.json();

  return NextResponse.json(photos);
}
