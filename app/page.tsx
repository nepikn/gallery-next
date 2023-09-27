"use client";

import { useEffect, useRef } from "react";
import { register } from "swiper/element/bundle";
import ExploreList from "./unsplash";

register();

function getImageUrl(name: string) {
  return new URL(`./assets/images/${name}.jpg`, import.meta.url).href;
}

export function Figcaption({ className, caption, url, author }) {
  return (
    <figcaption className={className}>
      <h3 className="mb-2 text-4xl font-medium">{caption}</h3>
      <Author {...{ url, author }} />
    </figcaption>
  );
}
function Author({ url, author }) {
  return (
    <a
      href={url}
      target="_blank"
      className="z-10 inline-flex items-center space-x-2 text-xl font-medium text-stone-500"
    >
      <span>{author}</span>
      <span className="material-symbols-outlined">open_in_new</span>
    </a>
  );
}
function H2({ name }) {
  return (
    <h2 className="border-b border-gray-400 pb-8 text-5xl font-semibold">
      {name}
    </h2>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 w-full bg-[#f0f0f0] leading-none opacity-90">
      <div className="relative mx-auto flex w-5/6 items-center justify-between gap-x-9">
        <a
          href="#"
          className="flex items-center space-x-4 py-5 font-medium text-black"
        >
          <span className="material-symbols-outlined !text-4xl [font-variation-settings:'wght'_300] lg:!text-8xl">
            image
          </span>
          <h1 className="font-serif text-3xl lg:text-6xl">GALLERY</h1>
        </a>
        <nav>
          <ul className="flex items-center gap-x-6 font-serif text-xl font-normal md:text-2xl">
            <NavLi name={"Explore"} />
            <NavLi name={"Meet Artists"} />
            <li className="absolute right-0 flex px-2 text-base text-zinc-500 focus-within:w-full focus-within:bg-white md:static md:max-w-none md:bg-white md:text-xl md:focus-within:w-auto">
              <button className="peer">
                <span className="material-symbols-outlined block">search</span>
              </button>
              <input
                type="text"
                placeholder="search"
                className="hidden w-full max-w-xs px-3 py-1 focus:inline focus-visible:outline-none active:inline peer-focus:inline md:inline lg:py-2"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );

  function NavLi({ name }) {
    return (
      <li className="hidden md:block">
        <a className="whitespace-nowrap" href={"#" + name.replaceAll(" ", "-")}>
          {name}
        </a>
      </li>
    );
  }
}

function Selection() {
  return (
    <section className="relative">
      <article>
        <h2 className="absolute bottom-0 -z-10 inline-block w-full pr-10 text-right text-6xl font-bold leading-tight text-gray-200 lg:top-0 lg:pt-12 lg:text-9xl lg:leading-none lg:text-gray-100">
          <span className="tracking-[.5rem]">Daily</span>
          <br />
          <span className="tracking-[.25rem]">Selection</span>
        </h2>
        <figure className="h-full lg:flex">
          <img
            className="h-[calc(100vh-80px)] w-full object-cover lg:h-[calc(100vh-136px)] lg:w-2/3"
            src={getImageUrl("mountain")}
            alt="mountain"
          />
          <Figcaption
            className="p-10 lg:flex lg:flex-grow lg:flex-col lg:justify-end"
            caption="Mountain"
            author="Yakup Ipek"
            url="https://pixabay.com/users/yakupipek-13990135/"
          />
        </figure>
      </article>
    </section>
  );
}

function Explore() {
  return (
    <section id="Explore" className="mx-auto w-5/6 space-y-8">
      <H2 name={"Explore"} />
      <ExploreList />
      {/* <ul className="grid md:grid-cols-2 md:gap-x-4 lg:auto-rows-[6.25rem] lg:grid-cols-3">
        <ExploreFigure
          caption="Sunrise"
          author="Quang Le"
          url="https://pixabay.com/users/quangle-1584596/"
          className="row-span-4"
        />
        <ExploreFigure
          caption="Sand"
          author="Chakkree Chantakad"
          url="https://pixabay.com/users/chakkree_chantakad-15107399/"
          className="row-span-5"
        />
        <ExploreFigure
          caption="Forest"
          author="Michi S"
          url="https://pixabay.com/users/valiphotos-1720744/"
          className="row-span-3"
        />
        <ExploreFigure
          caption="Fox"
          author="David Mark"
          url="https://pixabay.com/users/12019-12019/"
          className="row-span-4"
        />
        <ExploreFigure
          caption="Camp"
          author="Nicole Turner"
          url="https://pixabay.com/users/bowl_of_nicole-1260429/"
          className="row-span-4"
        />
        <ExploreFigure
          caption="Astronomy"
          author="Pexels"
          url="https://pixabay.com/users/pexels-2286921/"
          className="row-span-4"
        />
      </ul> */}
    </section>
  );

  function ExploreFigure({ caption, author, url, className }) {
    return (
      <li className={className + " mb-8"}>
        <figure className="group relative h-full w-full">
          <Figcaption
            className="absolute bottom-0 right-0 z-10 hidden p-6 text-right group-hover:block"
            {...{ caption, author, url }}
          />
          <img
            src={getImageUrl(caption.toLowerCase())}
            className="h-full w-full max-w-none object-cover group-hover:opacity-50"
          />
        </figure>
      </li>
    );
  }
}

function Artists() {
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

function Page() {
  return (
    <>
      <Header />
      <div className="space-y-8 md:space-y-16 lg:space-y-24">
        <main className="space-y-8 md:space-y-16 lg:space-y-24">
          <Selection />
          <Explore />
          <Artists />
        </main>
        <footer className="p-6 text-center font-serif text-xl">
          <p>© 2023 Pin-Chien Ho</p>
        </footer>
      </div>
    </>
  );
}

export default Page;
