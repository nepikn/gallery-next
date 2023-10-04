"use client";

import { useCallback } from "react";
// import { register } from "swiper/element/bundle";
import artist2 from "app/assets/images/Alexandr-Ivanov.jpg";
import artist3 from "app/assets/images/Hiep-hong.jpg";
import artist1 from "app/assets/images/Toản-Dương.jpg";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Author from "./Author";
import H2 from "./H2";

export default function Artists() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ slidesToScroll: "auto" });

  return (
    <section id="Meet-Artists" className="space-y-8">
      <div className="mx-auto w-5/6">
        <H2 name={"Meet Artists"} />
      </div>
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <ul className="flex">
            <SwiperSlideArtist
              src={artist1}
              caption={"Hard work pays off"}
              name={"Toản Dương"}
              alt="painting"
              url={"https://pixabay.com/users/duongtoan-4117230/"}
            />
            <SwiperSlideArtist
              src={artist2}
              caption={"Beauty comes from within"}
              name={"Alexandr Ivanov"}
              alt="colorful face"
              url={"https://pixabay.com/users/whitedaemon-1982503/"}
            />
            <SwiperSlideArtist
              src={artist3}
              caption={"Be passionate"}
              name={"Hiep hong"}
              alt="painting"
              url={"https://pixabay.com/users/tiemaoanh-21529431/"}
            />
          </ul>
        </div>
        <NavButton isPrev={true} emblaApi={emblaApi} />
        <NavButton isPrev={false} emblaApi={emblaApi} />
      </div>
    </section>
  );
}

type SwiperSlideArtistProp = {
  src: typeof artist1;
  alt: string;
  caption: string;
  url: string;
  name: string;
};
function SwiperSlideArtist({
  src,
  alt,
  caption,
  url,
  name,
}: SwiperSlideArtistProp) {
  return (
    <li className="shrink-0 basis-full md:basis-1/2">
      <figure className="relative">
        <Image src={src} alt={alt} className="h-96 w-full object-cover" />
        <figcaption className={"absolute bottom-0 m-4 bg-white p-2"}>
          <q className="mb-2 block text-4xl font-medium italic">{caption}</q>
          <Author {...{ url, name }} />
        </figcaption>
      </figure>
    </li>
  );
}

type NavButtonProp = {
  isPrev: boolean;
  emblaApi: ReturnType<typeof useEmblaCarousel>[1];
};
function NavButton({ isPrev, emblaApi }: NavButtonProp) {
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
