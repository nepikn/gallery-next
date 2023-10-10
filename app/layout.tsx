import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gallery",
  description: "Ark work demonstration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className={inter.className}>
        <Header />
        <div className="space-y-8 md:space-y-16 lg:space-y-24">
          <main className="space-y-8 md:space-y-16 lg:space-y-24">
            {children}
          </main>
          <footer className="p-6 text-center font-serif text-xl">
            <p>© 2023 Pin-Chien Ho</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#f0f0f0] leading-none opacity-90">
      <div className="relative mx-auto flex w-5/6 items-center justify-between gap-x-9">
        <Link
          href="/"
          className="flex items-center gap-x-4 py-5 lg:gap-x-6 lg:py-7 font-medium text-black"
        >
          <span className="w-9 lg:w-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
            </svg>
          </span>
          <span className="font-serif text-4xl lg:text-5xl">GALLERY</span>
        </Link>
        <nav>
          <NavList />
        </nav>
      </div>
    </header>
  );
}

function NavList() {
  return (
    <ul className="flex items-center gap-x-6 font-serif text-xl font-normal md:text-2xl">
      <NavItem name={"Explore"} />
      <NavItem name={"Meet Artists"} />
      <li className="absolute right-0 flex gap-x-3 px-3 py-2 text-base text-zinc-500 focus-within:w-full focus-within:bg-white md:static md:max-w-none md:bg-white md:text-xl md:focus-within:w-auto">
        <button className="peer w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
        <input
          type="text"
          placeholder="search"
          className="hidden w-full max-w-xs focus:inline focus-visible:outline-none active:inline peer-focus:inline md:inline"
        />
      </li>
    </ul>
  );
}

function NavItem({ name }: { name: string }) {
  return (
    <li className="hidden md:block">
      <a
        className="whitespace-nowrap"
        href={
          "#" +
          name
            .split(" ")
            .map((str) => str.toLowerCase())
            .join("-")
        }
      >
        {name}
      </a>
    </li>
  );
}
