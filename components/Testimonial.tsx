import Image from 'next/image';
import { stats } from '@/lib/content';
import { Container } from './ui/Section';

export function Testimonial() {
  return (
    <section
      aria-label="Learner feedback and numbers"
      className="bg-white py-16 lg:py-24"
    >
      <Container className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
        <figure>
          <svg
            width="28"
            height="22"
            viewBox="0 0 28 22"
            aria-hidden
            className="text-blue"
          >
            <path
              fill="currentColor"
              d="M0 22V11C0 4 4 .5 10 0v4c-3 .5-4.5 2-4.5 5H10v13zm16 0V11c0-7 4-10.5 10-11v4c-3 .5-4.5 2-4.5 5H26v13z"
            />
          </svg>
          <blockquote className="type-quote mt-4 text-ink">
            <p>
              The lessons are short enough to fit into my week, but detailed
              enough that I actually leave with something I can use.
            </p>
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <Image
              src="/images/alex.webp"
              alt="Portrait of Alex Morgan"
              width={68}
              height={72}
              className="size-10 rounded-full object-cover"
            />
            <span className="type-sm">
              <strong className="block font-semibold text-ink">
                Alex Morgan
              </strong>
              <span className="text-ink-3">Product Manager</span>
            </span>
          </figcaption>
        </figure>
        <dl className="grid grid-cols-3 gap-2 lg:grid-cols-1 lg:gap-8 lg:border-l lg:border-line lg:pl-12">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex min-w-0 flex-col-reverse justify-end"
            >
              <dt className="type-sm text-ink-3">{s.label}</dt>
              <dd className="type-h1 text-blue">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
