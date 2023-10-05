import Image from "next/image";
import selection from "./assets/images/mountain.jpg";
import Artists from "./components/Artists";
import ExploreList from "./components/ExploreList";
import Figcaption from "./components/Figcaption";
import H2 from "./components/H2";

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
            priority
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
