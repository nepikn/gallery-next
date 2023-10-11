"use client";

import useEmblaCarousel from "embla-carousel-react";
// import { register } from "swiper/element/bundle";
import Image from "next/image";
import Author from "../../components/Author";
import photos, { Photo } from "./photos";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });
  // const [scrollPrev, scrollNext] = [
  //   useCallback(() => {
  //     if (emblaApi) emblaApi.scrollPrev();
  //   }, [emblaApi]),
  //   useCallback(() => {
  //     if (emblaApi) emblaApi.scrollNext();
  //   }, [emblaApi]),
  // ];
  // console.log(photos);

  return (
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <ul className="flex">
          {photos.map((p) => (
            <ArtistSlide {...p} key={p.id} />
          ))}
        </ul>
      </div>
      <NavButton scrollPrev={emblaApi?.scrollPrev} />
      <NavButton scrollNext={emblaApi?.scrollNext} />
    </div>
  );
}

export function ArtistSlide(photo: Photo) {
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
  scrollPrev?: () => void;
  scrollNext?: () => void;
  // isPrev: boolean;
  // scrollMethods: (() => void)[];
};

export function NavButton({
  scrollPrev,
  scrollNext,
  // isPrev,
  // scrollMethods: [scrollPrev, scrollNext],
}: NavButtonProp) {
  return (
    <button
      onClick={scrollPrev ?? scrollNext}
      className={`absolute top-1/2 h-12 -translate-y-1/2 ${
        scrollPrev ? "ml-4" : "right-0 mr-4"
      }`}
    >
      <span className="material-symbols-outlined !text-5xl text-white">
        {`arrow_${scrollPrev ? "back" : "forward"}_ios`}
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
