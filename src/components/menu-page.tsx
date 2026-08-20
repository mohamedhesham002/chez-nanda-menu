import { MenuCard } from "@/components/menu-card";
import { getCategoryById } from "@/lib/menu-data";

interface MenuPageProps {
  categoryId: string;
}

export function MenuPage({ categoryId }: MenuPageProps) {
  const category = getCategoryById(categoryId);

  if (!category) {
    return null;
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-12">
      <header className="mb-10 text-center">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {category.title}
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">{category.subtitle}</p>
      </header>
      <section aria-label={`${category.title} menu items`}>
        {category.items.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
