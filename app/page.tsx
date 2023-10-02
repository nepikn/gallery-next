import Image from "next/image";
import selection from "./assets/images/mountain.jpg";
import Artists from "./components/Artists";
import ExploreList from "./components/ExploreList";
import Figcaption from "./components/Figcaption";
import H2 from "./components/H2";

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

  function NavLi({ name }: { name: string }) {
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
          <Image
            className="h-[calc(100vh-80px)] w-full object-cover lg:h-[calc(100vh-136px)] lg:w-2/3"
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
