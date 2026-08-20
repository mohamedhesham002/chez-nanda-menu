import { createFileRoute } from "@tanstack/react-router";
import { MenuPage } from "@/components/menu-page";

export const Route = createFileRoute("/starters")({
  head: () => ({
    meta: [
      { title: "Starters — Chez Nanda" },
      {
        name: "description",
        content:
          "Begin your meal at Chez Nanda with seasonal soups, tartares, escargots, and warm goat cheese salad.",
      },
      {
        property: "og:title",
        content: "Starters — Chez Nanda",
      },
      {
        property: "og:description",
        content:
          "Begin your meal at Chez Nanda with seasonal soups, tartares, escargots, and warm goat cheese salad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <MenuPage categoryId="starters" />,
});
