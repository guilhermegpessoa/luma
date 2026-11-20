"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/content";
import { Button } from "./ui/Button";
import { Close, Menu } from "./ui/Icons";
import { Container } from "./ui/Section";

export function Logo({ className = "" }: { className?: string }) {
  return <Link href="/" className={`font-display text-lg font-bold tracking-tight ${className}`} aria-label="Luma home">luma.</Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-cream/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Logo />
        <nav aria-label="Main" className="hidden items-center gap-8 lg:flex">
          {navItems.map((n) => (
            <Link key={n.label} href={n.href} className="type-sm text-ink-2 transition-colors hover:text-ink">{n.label}</Link>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <Link href="#contact" className="type-sm text-ink hover:underline">Log in</Link>
          <Button href="#courses" size="sm">Start learning</Button>
        </div>
        <button
          type="button" className="grid size-10 place-items-center rounded-md lg:hidden"
          aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <Close width={22} height={22} /> : <Menu width={22} height={22} />}
        </button>
      </Container>
      {open && (
        <div id="mobile-menu" className="border-t border-line bg-cream lg:hidden">
          <Container className="py-2">
            <nav aria-label="Mobile">
              <ul className="divide-y divide-line">
                {navItems.map((n) => (
                  <li key={n.label}>
                    <Link href={n.href} onClick={() => setOpen(false)} className="block py-3.5 text-base/7 font-medium text-ink">{n.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="grid gap-3 py-4">
              <Button href="#courses" onClick={() => setOpen(false)}>Start learning</Button>
              <Button href="#contact" variant="outline" onClick={() => setOpen(false)}>Log in</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
