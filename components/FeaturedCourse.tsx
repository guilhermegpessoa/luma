import Image from "next/image";
import { Button } from "./ui/Button";
import { ArrowRight } from "./ui/Icons";
import { Container } from "./ui/Section";

const meta = ["8 lessons", "2h 40min", "Intermediate"];

export function FeaturedCourse() {
  return (
    <section id="featured" aria-labelledby="featured-title" className="bg-blue py-14 text-white lg:py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="relative">
          <span className="type-eyebrow absolute left-0 top-0 z-10 -translate-y-1/2 rounded bg-sun px-2.5 py-1 text-ink">Featured course</span>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
            <Image src="/images/featured.webp" alt="Hands arranging a physical product prototype and color swatches on a design table" fill sizes="(min-width: 1024px) 560px, 92vw" className="object-cover" />
          </div>
        </div>
        <div>
          <p className="type-eyebrow text-white">Most popular this month</p>
          <h2 id="featured-title" className="type-h2 mt-3 text-white">Designing products people understand.</h2>
          <p className="type-lead mt-4 max-w-lg text-white">
            Learn how to turn complex workflows into simple, intentional product experiences through research, structure and thoughtful interaction design.
          </p>
          <p className="type-sm mt-5 text-white">with Maya Chen - Senior Product Designer</p>
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Course details">
            {meta.map((m) => <li key={m} className="type-sm rounded-md border border-white/40 px-3 py-1 text-white">{m}</li>)}
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact" variant="sun" className="w-full sm:w-auto">View course</Button>
            <a href="#courses" className="type-btn inline-flex items-center justify-center gap-2 px-3 py-3.5 text-white hover:underline">Browse all courses <ArrowRight /></a>
          </div>
        </div>
      </Container>
    </section>
  );
}
