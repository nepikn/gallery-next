"use client";

import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import Author from "./Author";
import H2 from "./H2";
import useEmblaCarousel from "embla-carousel-react";
import artist1 from "app/assets/images/Toản-Dương.jpg";
import artist2 from "app/assets/images/Alexandr-Ivanov.jpg";
import artist3 from "app/assets/images/Hiep-hong.jpg";
import Image from "next/image";

export default function Artists() {
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: "auto" });

  return (
    <section id="Meet-Artists" className="space-y-8">
      <div className="mx-auto w-5/6">
        <H2 name={"Meet Artists"} />
      </div>
      <div ref={emblaRef} className="overflow-hidden">
        <ul className="flex">
          <SwiperSlideArtist
            src={artist1}
            caption={"Hard work pays off"}
            author={"Toản Dương"}
            alt="painting"
            url={"https://pixabay.com/users/duongtoan-4117230/"}
          />
          <SwiperSlideArtist
            src={artist2}
            caption={"Beauty comes from within"}
            author={"Alexandr Ivanov"}
            alt="colorful face"
            url={"https://pixabay.com/users/whitedaemon-1982503/"}
          />
          <SwiperSlideArtist
            src={artist3}
            caption={"Be passionate"}
            author={"Hiep hong"}
            alt="painting"
            url={"https://pixabay.com/users/tiemaoanh-21529431/"}
          />
        </ul>
      </div>
    </section>
  );
}

type SwiperSlideArtistProp = {
  src: typeof artist1;
  alt: string;
  caption: string;
  url: string;
  author: string;
};
function SwiperSlideArtist({
  src,
  alt,
  caption,
  url,
  author,
}: SwiperSlideArtistProp) {
  return (
    <li className="shrink-0 basis-full md:basis-1/2">
      <figure className="relative">
        <Image src={src} alt={alt} className="h-96 w-full object-cover" />
        <figcaption className={"absolute bottom-0 m-4 bg-white p-2"}>
          <q className="mb-2 block text-4xl font-medium italic">{caption}</q>
          <Author {...{ url, author }} />
        </figcaption>
      </figure>
    </li>
  );
}

// register();

function swiper() {
  const swiperRef = useRef(null);

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
}
