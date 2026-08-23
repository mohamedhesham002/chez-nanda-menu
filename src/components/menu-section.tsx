import { MenuCard } from "@/components/menu-card";
import type { MenuCategory } from "@/lib/menu-data";

interface MenuSectionProps {
  category: MenuCategory;
}

export function MenuSection({ category }: MenuSectionProps) {
  return (
    <section aria-labelledby={`section-${category.slug}`}>
      <div className="reveal-up overflow-hidden rounded-3xl border border-primary/40">
        <img
          src={category.image}
          alt={`${category.title} from Chez Nanda`}
          loading="lazy"
          width={1024}
          height={768}
          className="h-40 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-56"
        />
      </div>
      <h2
        id={`section-${category.slug}`}
        className="reveal-up mt-6 text-center text-2xl font-bold uppercase tracking-wide text-primary sm:text-3xl"
      >
        {category.title}
      </h2>
      <p className="reveal-up mx-auto mt-2 max-w-md text-center text-sm text-foreground/80">
        {category.tagline}
      </p>
      <div className="mt-6 divide-y divide-primary/20">
        {category.items.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
}
