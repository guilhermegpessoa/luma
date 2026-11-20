import Image from "next/image";
import { learnerAvatars } from "@/lib/content";
import { AvatarStack } from "./ui/AvatarStack";
import { Button } from "./ui/Button";
import { Star } from "./ui/Icons";
import { Container, Eyebrow } from "./ui/Section";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="overflow-hidden bg-cream pb-16 pt-8 lg:pb-24 lg:pt-14">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 lg:order-1">
          <Eyebrow>Learn at your own pace</Eyebrow>
          <h1 id="hero-title" className="type-h1 mt-4 text-ink">Build skills that actually move you forward.</h1>
          <p className="type-lead mt-5 max-w-[520px] text-ink-2">
            Practical courses taught by people who do the work every day. Learn design, technology, business and more — one focused lesson at a time.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href="#courses" className="w-full sm:w-auto">Explore courses</Button>
            <Button href="#how-it-works" variant="outline" className="w-full sm:w-auto">See how it works</Button>
          </div>
          <div className="mt-7 flex items-center gap-3">
            <AvatarStack avatars={learnerAvatars} size={28} />
            <p className="type-sm text-ink-2"><strong className="font-semibold text-ink">Trusted by 24,000+</strong> learners</p>
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[520px] lg:order-2 lg:max-w-none">
          <div aria-hidden className="absolute -right-3 top-4 h-full w-[88%] rounded-3xl bg-peach lg:-right-6" />
          <div aria-hidden className="absolute -left-6 bottom-[-18px] size-24 rounded-full bg-blue-light" />
          <div className="relative aspect-[1.1/1] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/hero.webp" alt="Smiling instructor with glasses working on a laptop in front of a wall of sticky notes"
              fill priority sizes="(min-width: 1024px) 520px, 90vw" className="object-cover"
            />
          </div>
          <p className="absolute left-3 top-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[11px] shadow-md lg:-left-4">
            <span className="rounded bg-blue-light px-1.5 py-0.5 font-semibold text-blue">120+</span> expert-led courses
          </p>
          <p className="absolute -bottom-3 right-3 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[11px] shadow-md lg:-right-4">
            <span className="flex text-amber-400" role="img" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }, (_, i) => <Star key={i} />)}
            </span>
            4.9 avg rating
          </p>
        </div>
      </Container>
    </section>
  );
}
