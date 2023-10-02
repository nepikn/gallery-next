"use client";

import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import Author from "./Author";
import H2 from "./H2";

register();

export default function Artists() {
  const swiperElRef = useRef(null);

  useEffect(() => {
    Object.assign(swiperElRef.current, {
      slidesPerView: 1,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
      },
      navigation: true,
      cssMode: true,
    });

    swiperElRef.current.initialize();
  }, []);

  return (
    <section id="Meet-Artists" className="space-y-8">
      <div className="mx-auto w-5/6">
        <H2 name={"Meet Artists"} />
      </div>
      <swiper-container init="false" ref={swiperElRef}>
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
      </swiper-container>
    </section>
  );

  function SwiperSlideArtist({ caption, url, author, alt }) {
    return (
      <swiper-slide>
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
      </swiper-slide>
    );
  }
}
function getImageUrl(name: string) {
  return new URL(`./assets/images/${name}.jpg`, import.meta.url).href;
}
