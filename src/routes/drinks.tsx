import { createFileRoute } from "@tanstack/react-router";
import { MenuPage } from "@/components/menu-page";

export const Route = createFileRoute("/drinks")({
  head: () => ({
    meta: [
      { title: "Drinks — Chez Nanda" },
      {
        name: "description",
        content:
          "Wines, cocktails, and non-alcoholic refreshments at Chez Nanda, including Kir Royal and Citron Pressé.",
      },
      {
        property: "og:title",
        content: "Drinks — Chez Nanda",
      },
      {
        property: "og:description",
        content:
          "Wines, cocktails, and non-alcoholic refreshments at Chez Nanda, including Kir Royal and Citron Pressé.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <MenuPage categoryId="drinks" />,
});
