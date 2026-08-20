import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, UtensilsCrossed } from "lucide-react";

import heroImage from "../assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chez Nanda — Seasonal French Bistro" },
      {
        name: "description",
        content:
          "Welcome to Chez Nanda. Discover a warm bistro menu of starters, mains, desserts, and drinks made with seasonal ingredients.",
      },
      {
        property: "og:title",
        content: "Chez Nanda — Seasonal French Bistro",
      },
      {
        property: "og:description",
        content:
          "Welcome to Chez Nanda. Discover a warm bistro menu of starters, mains, desserts, and drinks made with seasonal ingredients.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const categories = [
  { to: "/starters", label: "Starters", description: "Small plates to begin the evening" },
  { to: "/mains", label: "Mains", description: "Hearty, comforting dishes" },
  { to: "/desserts", label: "Desserts", description: "Sweet house-made finales" },
  { to: "/drinks", label: "Drinks", description: "Wines, cocktails, and more" },
];

function HomePage() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Rustic French bistro table with warm candlelight and seasonal dishes"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-warm-dark/60" />
        </div>
        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:py-32">
          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground">
            <UtensilsCrossed className="h-7 w-7" />
          </div>
          <h1 className="font-serif text-5xl font-semibold tracking-tight text-cream sm:text-6xl lg:text-7xl">
            Chez Nanda
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/90 sm:text-xl">
            A warm bistro where seasonal ingredients meet French comfort food — served with soul,
            simplicity, and a little joie de vivre.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/starters"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View the menu <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center rounded-md border border-cream/30 bg-cream/10 px-5 py-3 text-sm font-medium text-cream backdrop-blur-sm transition-colors hover:bg-cream/20"
            >
              Make a reservation
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
            Explore the menu
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            From light starters to indulgent desserts, every dish is prepared fresh and made to
            share.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.to}
              to={category.to}
              className="group rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-semibold text-card-foreground">
                  {category.label}
                </h3>
                <ArrowRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-14 text-center sm:py-18">
          <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Made for gathering
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Whether it's a casual lunch, a special dinner, or a quiet coffee, Chez Nanda is a place
            to slow down and savor.
          </p>
        </div>
      </section>
    </main>
  );
}
