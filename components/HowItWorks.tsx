import type { Step } from '@/lib/content';
import { steps } from '@/lib/content';
import { Container, Eyebrow } from './ui/Section';

function StepIcon({ kind }: { kind: Step['icon'] }) {
  if (kind === 'focus')
    return (
      <span
        aria-hidden
        className="relative block size-12 rounded-full bg-blue-light"
      >
        <span className="absolute left-2.5 top-2.5 size-4 rounded-[4px] bg-blue" />
      </span>
    );
  if (kind === 'learn')
    return (
      <span
        aria-hidden
        className="relative block size-12 rotate-[15deg] rounded-xl bg-peach"
      >
        <span className="absolute bottom-2 right-2 size-5 rounded-full bg-coral" />
      </span>
    );
  return (
    <span aria-hidden className="relative block size-12 rounded-xl bg-butter">
      <span className="absolute bottom-2 left-2 size-3.5 rounded-full bg-sun-dark" />
    </span>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="bg-cream py-16 lg:py-24"
    >
      <Container>
        <div className="text-center">
          <Eyebrow>How Luma works</Eyebrow>
          <h2 id="how-title" className="type-h3 mt-4 text-ink">
            Less browsing. More learning.
          </h2>
        </div>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {steps.map((s, i) => (
            <li key={s.id} className="relative">
              {/* mobile: short connector above steps 02 and 03 */}
              {i > 0 && (
                <span
                  aria-hidden
                  className="absolute -top-8 left-6 h-6 w-px bg-line md:hidden"
                />
              )}
              {/* desktop: line from this icon to the next one; none after the last step */}
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute left-12 top-6 hidden h-px w-[calc(100%-1rem)] bg-line md:block"
                />
              )}
              <StepIcon kind={s.icon} />
              <p className="type-eyebrow mt-6 text-ink-3">
                Step {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="type-h5 mt-2 text-ink">{s.title}</h3>
              <p className="type-body-lg mt-2 max-w-[300px] text-ink-3">
                {s.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
