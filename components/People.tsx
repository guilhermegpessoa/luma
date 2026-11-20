import { peopleCollage } from "@/lib/content";
import { Button } from "./ui/Button";
import { PeopleCollage } from "./PeopleCollage";
import { Container, Eyebrow } from "./ui/Section";

export function People() {
  return (
    <section id="community" aria-labelledby="people-title" className="bg-cream py-16 lg:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>The people</Eyebrow>
          <h2 id="people-title" className="type-h3 mt-4 text-ink">Meet international students &amp; teachers</h2>
          <p className="type-lead mt-5 max-w-lg text-ink-2">
            Morbi et egestas dignissim pharetra, sed amet. Tempus justo senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus aenean lorem faucibus integer.
          </p>
          <Button href="#contact" variant="outline" className="mt-7 w-full sm:w-auto">Explore teachers and students</Button>
        </div>
        <PeopleCollage images={peopleCollage} />
      </Container>
    </section>
  );
}
