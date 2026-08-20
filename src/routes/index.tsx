import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { menuCategories } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chez Nanda — Healthy Snacks & More" },
      {
        name: "description",
        content:
          "Chez Nanda menu: energy balls, healthy bites and cookies made with dates, nuts, almond flour and dark chocolate.",
      },
      { property: "og:title", content: "Chez Nanda — Healthy Snacks & More" },
      {
        property: "og:description",
        content:
          "Chez Nanda menu: energy balls, healthy bites and cookies made with dates, nuts, almond flour and dark chocolate.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex-1 px-4 py-10 sm:py-14">
      <section className="menu-frame mx-auto flex max-w-3xl flex-col items-center bg-card px-5 py-16 text-center sm:px-10 sm:py-20">
        <BrandLogo className="h-20 w-auto sm:h-28" />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:text-sm">
          Healthy Snacks &amp; More
        </p>
        <h1 className="sr-only">Chez Nanda — Healthy Snacks &amp; More</h1>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-foreground/90 sm:text-base">
          Handmade energy balls, bites and cookies built from medjool dates, nuts, almond flour and
          dark chocolate. No refined sugar, no guilt — just real ingredients.
        </p>
        <Link
          to="/menu"

          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Browse the menu <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
        {menuCategories.map((category) => (
          <Link
            key={category.slug}
            to={`/${category.slug}` as "/energy-balls"}
            className="group flex flex-col rounded-2xl border border-primary/40 bg-card p-6 text-left transition-all hover:-translate-y-1 hover:border-primary"
          >
            <h2 className="text-lg font-bold uppercase tracking-wide text-primary">
              {category.title}
            </h2>
            <p className="mt-2 flex-1 text-sm text-foreground/85">{category.tagline}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
              {category.items.length} items
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        ))}
      </section>
    </main>
  );
}
