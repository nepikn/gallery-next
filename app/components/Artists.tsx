"use client";

import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element/bundle";
import Author from "./Author";
import H2 from "./H2";
import useEmblaCarousel from "embla-carousel-react";

register();

export default function Artists() {
  const [emblaRef] = useEmblaCarousel({ slidesToScroll: "auto" });
  const swiperRef = useRef(null);
  const [isInit, setIsInit] = useState(false);

  console.log(1);

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
  //   setIsInit(true);
  // }, []);

  return (
    <section id="Meet-Artists" className="space-y-8">
      <div className="mx-auto w-5/6">
        <H2 name={"Meet Artists"} />
      </div>
      <div ref={emblaRef} className="overflow-hidden">
        <ul className="flex">
          <SwiperSlideArtist
            caption={"Hard work pays off"}
            author={"Toản Dương"}
            alt="painting"
            url={"https://pixabay.com/users/duongtoan-4117230/"}
          />
          <SwiperSlideArtist
            caption={"Beauty comes from within"}
            author={"Alexandr Ivanov"}
            alt="colorful face"
            url={"https://pixabay.com/users/whitedaemon-1982503/"}
          />
          <SwiperSlideArtist
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

function SwiperSlideArtist({ caption, url, author, alt }) {
  return (
    <li className="shrink-0 basis-full md:basis-1/2">
      <figure className="relative">
        <img
          src={getImageUrl(author.replaceAll(" ", "-"))}
          alt={alt}
          className="h-96 w-full object-cover"
        />
        <figcaption className={"absolute bottom-0 m-4 bg-white p-2"}>
          <q className="mb-2 block text-4xl font-medium italic">{caption}</q>
          <Author {...{ url, author }} />
        </figcaption>
      </figure>
    </li>
  );
}
function getImageUrl(name: string) {
  return new URL(`./assets/images/${name}.jpg`, import.meta.url).href;
}
