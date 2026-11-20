import { ctaAvatars } from "@/lib/content";
import { AvatarStack } from "./ui/AvatarStack";
import { Button } from "./ui/Button";
import { Container } from "./ui/Section";

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="bg-butter py-20 text-center lg:py-28">
      <Container>
        <AvatarStack avatars={ctaAvatars} size={32} ringClassName="border-butter" className="justify-center" />
        <h2 id="cta-title" className="type-h2 mt-5 text-ink">What will you learn next?</h2>
        <p className="type-lead mt-3 text-ink-2">Start with one course. Build from there.</p>
        <div className="mx-auto mt-7 flex max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          <Button href="#courses" className="w-full sm:w-auto">Explore all courses</Button>
          <Button href="#contact" variant="outline" className="w-full sm:w-auto">Join Luma</Button>
        </div>
      </Container>
    </section>
  );
}
