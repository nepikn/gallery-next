import { StaticImport } from "next/dist/shared/lib/get-img-props";
import artistA from "app/assets/images/Alexandr-Ivanov.jpg";
import artistH from "app/assets/images/Hiep-hong.jpg";
import artistT from "app/assets/images/Toản-Dương.jpg";

export interface Photo {
  src: StaticImport;
  id: number;
  alt: string;
  caption: string;
  authorLink: string;
  authorName: string;
}

const photos = [
  {
    src: artistT,
    id: 3008031,
    alt: "elderly man painting",
    caption: "Hard work pays off",
    authorName: "Toản Dương",
    authorLink: "https://pixabay.com/users/duongtoan-4117230/",
  },
  {
    src: artistA,
    id: 2696947,
    alt: "colorful face",
    caption: "Beauty comes from within",
    authorName: "Alexandr Ivanov",
    authorLink: "https://pixabay.com/users/whitedaemon-1982503/",
  },
  {
    src: artistH,
    id: 7250695,
    alt: "woman painter",
    caption: "Be passionate",
    authorName: "Hiep hong",
    authorLink: "https://pixabay.com/users/tiemaoanh-21529431/",
  },
];

export default photos;
