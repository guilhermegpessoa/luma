import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "./Icons";

type Variant = "primary" | "outline" | "sun";
type Size = "md" | "sm";
type Common = { variant?: Variant; size?: Size; className?: string; children: ReactNode };
type LinkProps = Common & { href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;
type ButtonProps = Common & { href?: undefined } & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

const variants: Record<Variant, string> = {
  primary: "bg-blue text-white hover:brightness-90",
  outline: "border border-line bg-white text-ink hover:border-ink",
  sun: "bg-sun text-ink hover:brightness-95",
};
const sizes: Record<Size, string> = {
  md: "px-7 py-3.5", // 14px / 28px
  sm: "px-5 py-2.5", // 10px / 20px
};

export function Button(props: LinkProps | ButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const cls = `type-btn inline-flex items-center justify-center gap-2 rounded-lg text-center transition ${sizes[size]} ${variants[variant]} ${className}`;
  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, href, ...a } = props;
    return <Link href={href} className={cls} {...a}>{children}</Link>;
  }
  const { variant: _v, size: _s, className: _c, children: _ch, href: _h, ...b } = props;
  return <button className={cls} {...b}>{children}</button>;
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={`type-btn inline-flex items-center gap-2 text-ink ${className}`}>
      {children} <ArrowRight />
    </Link>
  );
}
