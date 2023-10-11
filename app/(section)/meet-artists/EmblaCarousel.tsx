"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
// import { register } from "swiper/element/bundle";
import Image from "next/image";
import Author from "../../components/Author";
import { Photo } from "./photos";

export function EmblaCarousel({ photos }: { photos: Photo[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });
  const scrollMethods = [
    useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]),
    useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]),
  ];
  // console.log(photos);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <ul className="flex">
          {photos.map((p) => (
            <ArtistSlide photo={p} key={p.id} />
          ))}
        </ul>
      </div>
      <NavButton isPrev={true} scrollMethods={scrollMethods} />
      <NavButton isPrev={false} scrollMethods={scrollMethods} />
    </div>
  );
}

export function ArtistSlide({ photo }: { photo: Photo }) {
  const { src, alt, caption, authorLink, authorName } = photo;

  return (
    <li className="shrink-0 basis-full md:basis-1/2">
      <figure className="relative">
        <Image
          src={src}
          alt={alt}
          placeholder="blur"
          className="h-96 w-full object-cover"
        />
        <figcaption className={"absolute bottom-0 m-4 bg-white p-2"}>
          <q className="mb-2 block text-4xl font-medium italic">{caption}</q>
          <Author {...{ link: authorLink, name: authorName }} />
        </figcaption>
      </figure>
    </li>
  );
}

type NavButtonProp = {
  isPrev: boolean;
  scrollMethods: (() => void)[];
};

export function NavButton({
  isPrev,
  scrollMethods: [scrollPrev, scrollNext],
}: NavButtonProp) {
  return (
    <button
      onClick={isPrev ? scrollPrev : scrollNext}
      className={`absolute top-1/2 -translate-y-1/2 h-12 ${
        isPrev ? "ml-4" : "mr-4 right-0"
      }`}
    >
      <span className="material-symbols-outlined text-white !text-5xl">
        {`arrow_${isPrev ? "back" : "forward"}_ios`}
      </span>
    </button>
  );
}

// register();

// function swiper() {
//   const swiperRef = useRef(null);

// useEffect(() => {
//   console.log(swiperRef.current);

//   Object.assign(swiperRef.current, {
//     cssMode: true,
//     navigation: true,
//     slidesPerView: 1,
//     breakpoints: {
//       768: {
//         slidesPerView: 2,
//       },
//     },
//   });

//   swiperRef.current.initialize();
// }, []);
// }
