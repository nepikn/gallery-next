import Section from "../../components/Section";
import { EmblaCarousel } from "./EmblaCarousel";
import photos from "./photos";

export default function Artists() {
  return (
    <Section name="Meet Artists">
      <EmblaCarousel photos={photos} />
    </Section>
  );
}
