import { MenuCard } from "@/components/menu-card";
import type { MenuCategory } from "@/lib/menu-data";

interface MenuSectionProps {
  category: MenuCategory;
}

export function MenuSection({ category }: MenuSectionProps) {
  return (
    <section aria-labelledby={`section-${category.slug}`}>
      <h2
        id={`section-${category.slug}`}
        className="text-center text-2xl font-bold uppercase tracking-wide text-primary sm:text-3xl"
      >
        {category.title}
      </h2>
      <p className="mx-auto mt-2 max-w-md text-center text-sm text-foreground/80">
        {category.tagline}
      </p>
      <div className="mt-6 divide-y divide-primary/20">
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
