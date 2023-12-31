import Image from "next/image";
import selection from "./assets/images/mountain.jpg";
import Artists from "./(section)/meet-artists/page";
import Explore from "./(section)/explore/page";
import Figcaption from "./components/Figcaption";

function Selection() {
  return (
    <section className="relative">
      <article>
        <h1 className="absolute bottom-0 -z-10 inline-block w-full pr-10 text-right text-6xl font-bold leading-tight text-gray-200 lg:top-0 lg:pt-12 lg:text-9xl lg:leading-none lg:text-gray-100">
          <span className="tracking-[.5rem]">Daily</span>
          <br />
          <span className="tracking-[.25rem]">Selection</span>
        </h1>
        <figure className="h-full lg:flex">
          <Image
            className="h-[calc(100vh-80px)] w-full object-cover lg:h-[calc(100vh-112px)] lg:w-2/3"
            src={selection}
            alt="mountain"
            placeholder="blur"
            priority
          />
          <Figcaption
            className="p-10 lg:flex lg:flex-grow lg:flex-col lg:justify-end"
            caption="Mountain"
            authorName="Yakup Ipek"
            authorLink="https://pixabay.com/users/yakupipek-13990135/"
          />
        </figure>
      </article>
    </section>
  );
}

function Page() {
  return (
    <>
      <Selection />
      <Explore />
      <Artists />
    </>
  );
}

export default Page;
