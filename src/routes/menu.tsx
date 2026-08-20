import { createFileRoute } from "@tanstack/react-router";

import { BackButton } from "@/components/back-button";
import { BrandLogo } from "@/components/brand-logo";
import { MenuSection } from "@/components/menu-section";
import { menuCategories } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Full Menu — Chez Nanda" },
      {
        name: "description",
        content:
          "The complete Chez Nanda menu: energy balls, healthy bites and cookies with prices in EGP.",
      },
      { property: "og:title", content: "Full Menu — Chez Nanda" },
      {
        property: "og:description",
        content:
          "The complete Chez Nanda menu: energy balls, healthy bites and cookies with prices in EGP.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FullMenuPage,
});

function FullMenuPage() {
  return (
    <main className="flex-1 px-4 py-10 sm:py-14">
      <div className="menu-frame mx-auto max-w-3xl bg-card px-5 py-10 sm:px-10 sm:py-12">
        <header className="text-center">
          <BrandLogo className="mx-auto h-14 w-auto sm:h-16" />
          <h1 className="mt-3 text-3xl font-bold uppercase tracking-wide text-primary sm:text-4xl">
            The Whole Menu
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-foreground/80 sm:text-base">
            Everything we make, in one place — all prices in EGP.
          </p>
        </header>

        <div className="mt-10 space-y-12">
          {menuCategories.map((category) => (
            <MenuSection key={category.slug} category={category} />
          ))}
        </div>
      </div>

      <BackButton to="/" label="Back to home" />
    </main>
  );
}
