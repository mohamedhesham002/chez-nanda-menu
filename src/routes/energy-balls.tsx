import { createFileRoute } from "@tanstack/react-router";

import { MenuPage } from "@/components/menu-page";

export const Route = createFileRoute("/energy-balls")({
  head: () => ({
    meta: [
      { title: "Energy Balls — Chez Nanda" },
      {
        name: "description",
        content:
          "Chez Nanda energy balls: lemon, apricot, apricot & prunes, tamreya mixed nuts jar and orange rush box.",
      },
      { property: "og:title", content: "Energy Balls — Chez Nanda" },
      {
        property: "og:description",
        content:
          "Chez Nanda energy balls: lemon, apricot, apricot & prunes, tamreya mixed nuts jar and orange rush box.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <MenuPage slug="energy-balls" />,
});
