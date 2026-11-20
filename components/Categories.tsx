import type { Category } from "@/lib/content";
import { categories } from "@/lib/content";
import { TextLink } from "./ui/Button";
import { Container, Eyebrow } from "./ui/Section";

export function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    <li className="flex flex-col rounded-xl border border-line bg-white p-6 transition-shadow hover:shadow-md">
      <span className="type-eyebrow w-fit rounded-md bg-blue-light px-2 py-1 text-blue">{String(index + 1).padStart(2, "0")}</span>
      <h3 className="type-h5 mt-5 text-ink">{category.title}</h3>
      <p className="type-sm mt-2 flex-1 text-ink-3">{category.description}</p>
      <TextLink href={category.href} className="mt-6">
        Explore<span className="sr-only"> {category.title} courses</span>
      </TextLink>
    </li>
  );
}

export function Categories() {
  return (
    <section id="courses" aria-labelledby="categories-title" className="bg-white py-16 lg:py-24">
      <Container>
        <Eyebrow>Find your next skill</Eyebrow>
        <h2 id="categories-title" className="type-h3 mt-4 max-w-xl text-ink">Learn something worth knowing.</h2>
        <p className="type-lead mt-4 max-w-md text-ink-2">Short, practical courses designed around skills you can put to work immediately.</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c, i) => <CategoryCard key={c.id} category={c} index={i} />)}
        </ul>
      </Container>
    </section>
  );
}
