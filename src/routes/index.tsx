import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import heroSnacks from "@/assets/hero-snacks.jpg";
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
      <section className="menu-frame relative mx-auto max-w-3xl overflow-hidden bg-card">
        <img
          src={heroSnacks}
          alt="Assortment of Chez Nanda energy balls, chocolate-covered dates and cookies"
          width={1600}
          height={912}
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-card/70 via-card/60 to-card" />
        <div className="relative flex flex-col items-center px-5 py-16 text-center sm:px-10 sm:py-20">
          <BrandLogo className="reveal-up float-slow h-20 w-auto sm:h-28" />
          <p
            className="reveal-up mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:text-sm"
            style={{ animationDelay: "120ms" }}
          >
            Healthy Snacks &amp; More
          </p>
          <h1 className="sr-only">Chez Nanda — Healthy Snacks &amp; More</h1>
          <p
            className="reveal-up mt-6 max-w-lg text-sm leading-relaxed text-foreground/90 whitespace-pre-line sm:text-base"
            style={{ animationDelay: "220ms" }}
          >
            {"Homemade snacks for a healthier lifestyle..\nNo refined sugar,\u00a0\nno guilt -just real ingredients"}
          </p>
          <Link
            to="/menu"
            className="reveal-up group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
            style={{ animationDelay: "320ms" }}
          >
            Browse the menu
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
        {menuCategories.map((category, i) => (
          <Link
            key={category.slug}
            to={`/${category.slug}` as "/energy-balls"}
            className="reveal-up hover-lift group flex flex-col overflow-hidden rounded-2xl border border-primary/40 bg-card text-left hover:border-primary"
            style={{ animationDelay: `${150 + i * 120}ms` }}
          >
            <div className="overflow-hidden">
              <img
                src={category.image}
                alt={`${category.title} from Chez Nanda`}
                loading="lazy"
                width={1024}
                height={768}
                className="h-36 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                style={{ objectPosition: category.imagePosition }}
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-lg font-bold uppercase tracking-wide text-primary">
                {category.title}
              </h2>
              <p className="mt-2 flex-1 text-sm text-foreground/85">{category.tagline}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-secondary">
                {category.items.length} items
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
