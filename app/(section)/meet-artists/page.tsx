import { Metadata } from "next";
import Section from "../../components/Section";
import { EmblaCarousel } from "./EmblaCarousel";

const title = "Meet Artists";

export const metadata: Metadata = {
  title: title,
};

export default function Artists() {
  return (
    <Section name={title}>
      <EmblaCarousel />
    </Section>
  );
}
