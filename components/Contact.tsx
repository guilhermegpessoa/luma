import { Clock, Mail } from "./ui/Icons";
import { ContactForm } from "./ContactForm";
import { Container, Eyebrow } from "./ui/Section";

function InfoCard({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-cream p-4">
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue-light text-blue">{icon}</span>
      <div className="type-sm"><p className="font-semibold text-ink">{label}</p><p className="text-ink-3">{children}</p></div>
    </div>
  );
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-white py-16 lg:py-24">
      <Container className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h2 id="contact-title" className="type-h2 mt-4 text-ink">Get in touch</h2>
          <p className="type-lead mt-4 max-w-md text-ink-2">
            Have a question? We&rsquo;re here to help. Whether you&rsquo;re looking for the right course, learning with your team or interested in teaching with Luma, we&rsquo;d love to hear from you.
          </p>
          <div className="mt-8 grid gap-3">
            <InfoCard icon={<Mail />} label="Email"><a href="mailto:contact@luma.com" className="text-blue hover:underline">contact@luma.com</a></InfoCard>
            <InfoCard icon={<Clock />} label="Response Time">Up to 24 hours on business days</InfoCard>
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}
