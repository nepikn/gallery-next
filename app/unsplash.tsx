import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import { Figcaption } from "./page";

const api = createApi({
  accessKey: "keJPHP5nqYQ61etYfzbzttU081n8_GPtmKOy3jh0AeU",
});

function ExploreFigure({ photo, className }) {
  const { description, user, urls } = photo;
  return (
    <figure className="group relative h-full w-full">
      <Figcaption
        className="absolute bottom-0 right-0 z-10 hidden p-6 text-right group-hover:block"
        {...{ caption: description, author: user.name, url: user.links.html }}
      />
      <img
        src={urls.small}
        className="h-full w-full max-w-none object-cover group-hover:opacity-50"
      />
    </figure>
  );
}

const PhotoComp = ({ photo }) => {
  const { user, urls } = photo;

  return (
    <>
      <header>{photo.width}</header>
      <img className="img" src={urls.regular} />
      <a
        className="credit"
        target="_blank"
        href={`https://unsplash.com/@${user.username}`}
      >
        {user.name}
      </a>
    </>
  );
};

export default function ExploreList() {
  const [data, setPhotosResponse] = useState(null);

  useEffect(() => {
    api.search
      .getPhotos({
        query: "dog",
        page: 1,
        perPage: 2,
        orderBy: "editorial",
        orientation: "landscape",
      })
      .then((result) => {
        setPhotosResponse(result);
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    const liSpans = [4, 5];

    return (
      <div className="feed">
        <ul className="grid md:grid-cols-2 md:gap-x-4 lg:auto-rows-[6.25rem] lg:grid-cols-3">
          {data.response.results.map((photo, i) => (
            <li key={photo.id} className={"mb-8 row-span-" + liSpans[i]}>
              <ExploreFigure photo={photo} className={liSpans[i]} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
