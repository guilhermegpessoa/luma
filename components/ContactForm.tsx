"use client";
import { useId, useState, type FormEvent } from "react";
import { Button } from "./ui/Button";

type Values = { name: string; email: string; question: string };
type Errors = Partial<Record<keyof Values, string>>;
type FieldA11y = { id: string; "aria-invalid": boolean; "aria-describedby"?: string };

export function validate(v: Values): Errors {
  const e: Errors = {};
  if (v.name.trim().length < 2) e.name = "Enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (v.question.trim().length < 10) e.question = "Tell us a bit more (at least 10 characters).";
  return e;
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: (a: FieldA11y) => React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">{label}</label>
      <div className="mt-2">{children({ id, "aria-invalid": !!error, "aria-describedby": error ? `${id}-error` : undefined })}</div>
      {error && <p id={`${id}-error`} className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}

const input = "w-full rounded-lg border border-line bg-cream px-3 py-2.5 text-sm text-ink placeholder:text-ink-3 aria-[invalid=true]:border-red-500";

export function ContactForm() {
  const uid = useId();
  const [values, setValues] = useState<Values>({ name: "", email: "", question: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (k: keyof Values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setStatus("idle");
    setValues((v) => ({ ...v, [k]: e.target.value }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 700)); // mock request – no backend required
    setStatus("sent");
    setValues({ name: "", email: "", question: "" });
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 shadow-lg sm:p-8">
      <h3 className="type-h5 text-ink">Contact us</h3>
      <p className="type-sm mt-1 text-ink-3">Fill out the fields and we will get in touch.</p>
      <div className="mt-6 grid gap-5">
        <Field id={`${uid}-name`} label="Full name" error={errors.name}>
          {(a) => <input {...a} type="text" name="name" autoComplete="name" placeholder="Your name" value={values.name} onChange={set("name")} className={input} />}
        </Field>
        <Field id={`${uid}-email`} label="Email" error={errors.email}>
          {(a) => <input {...a} type="email" name="email" autoComplete="email" placeholder="youremail@example.com" value={values.email} onChange={set("email")} className={input} />}
        </Field>
        <Field id={`${uid}-q`} label="Your question" error={errors.question}>
          {(a) => <textarea {...a} name="question" rows={4} placeholder="Tell us how we can help..." value={values.question} onChange={set("question")} className={`${input} resize-y`} />}
        </Field>
        <Button type="submit" disabled={status === "sending"} className="w-full disabled:opacity-70">{status === "sending" ? "Sending…" : "Send message"}</Button>
        <p role="status" aria-live="polite" className="text-sm font-medium text-green-700">{status === "sent" ? "Thanks! We’ll reply within 24 hours on business days." : ""}</p>
      </div>
    </form>
  );
}
