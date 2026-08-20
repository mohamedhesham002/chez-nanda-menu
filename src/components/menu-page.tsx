import { BackButton } from "@/components/back-button";
import { BrandLogo } from "@/components/brand-logo";
import { MenuCard } from "@/components/menu-card";
import { getCategoryBySlug } from "@/lib/menu-data";

interface MenuPageProps {
  slug: string;
}

export function MenuPage({ slug }: MenuPageProps) {
  const category = getCategoryBySlug(slug);

  if (!category) return null;

  return (
    <main className="flex-1 px-4 py-10 sm:py-14">
      <div className="menu-frame mx-auto max-w-3xl bg-card px-5 py-10 sm:px-10 sm:py-12">
        <header className="text-center">
          <BrandLogo className="mx-auto h-12 w-auto sm:h-14" />
          <h1 className="mt-3 text-3xl font-bold uppercase tracking-wide text-primary sm:text-4xl">
            {category.title}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-foreground/80 sm:text-base">
            {category.tagline}
          </p>
        </header>

        <section
          aria-label={`${category.title} items`}
          className="mt-8 divide-y divide-primary/20"
        >
          {category.items.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </section>

        <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-primary/80">
          All prices in EGP
        </p>
      </div>

      <BackButton to="/menu" label="Back to full menu" />
    </main>
  );
}
