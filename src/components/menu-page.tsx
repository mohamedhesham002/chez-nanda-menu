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
      <div className="menu-frame mx-auto max-w-3xl overflow-hidden bg-card sm:pb-4">
        <div className="relative">
          <img
            src={category.image}
            alt={`${category.title} from Chez Nanda`}
            width={1024}
            height={768}
            className="h-48 w-full object-cover sm:h-64"
            style={{ objectPosition: category.imagePosition }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-card/20" />
          <header className="absolute inset-x-0 bottom-0 px-5 pb-5 text-center sm:px-10 sm:pb-7">
            <BrandLogo className="reveal-up float-slow mx-auto h-12 w-auto sm:h-14" />
            <h1 className="reveal-up mt-2 text-3xl font-bold uppercase tracking-wide text-primary sm:text-4xl">
              {category.title}
            </h1>
          </header>
        </div>

        <div className="px-5 pb-10 sm:px-10 sm:pb-12">
          <p className="reveal-up mx-auto mt-4 max-w-md text-center text-sm text-foreground/80 sm:text-base">
            {category.tagline}
          </p>

          <section
            aria-label={`${category.title} items`}
            className="mt-8 divide-y divide-primary/20"
          >
            {category.items.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </section>

          <p className="mt-8 text-center text-xs uppercase tracking-[0.2em] text-primary/80">
            All prices in EGP
          </p>
        </div>
      </div>

      <BackButton to="/menu" label="Back to full menu" />
    </main>
  );
}
