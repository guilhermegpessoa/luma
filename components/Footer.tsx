import Link from "next/link";
import { footerColumns } from "@/lib/content";
import { Container } from "./ui/Section";
import { Logo } from "./Header";

export function Footer() {
  return (
    <footer className="bg-night text-white">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo />
            <p className="type-sm mt-3 max-w-[240px] text-on-dark-3">Practical learning for curious people.</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h2 className="type-eyebrow text-on-dark-2">{col.title}</h2>
                <ul className="mt-4 grid gap-3">
                  {col.links.map((l) => <li key={l.label}><Link href={l.href} className="type-sm text-on-dark-3 transition-colors hover:text-white">{l.label}</Link></li>)}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <p className="type-sm mt-12 border-t border-white/10 pt-6 text-on-dark-3">© 2026 Luma Learning</p>
      </Container>
    </footer>
  );
}
