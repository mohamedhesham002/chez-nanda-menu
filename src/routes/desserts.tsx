import { createFileRoute } from "@tanstack/react-router";
import { MenuPage } from "@/components/menu-page";

export const Route = createFileRoute("/desserts")({
  head: () => ({
    meta: [
      { title: "Desserts — Chez Nanda" },
      {
        name: "description",
        content:
          "Finish your meal at Chez Nanda with crème brûlée, tarte tatin, chocolate mousse, and profiteroles.",
      },
      {
        property: "og:title",
        content: "Desserts — Chez Nanda",
      },
      {
        property: "og:description",
        content:
          "Finish your meal at Chez Nanda with crème brûlée, tarte tatin, chocolate mousse, and profiteroles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <MenuPage categoryId="desserts" />,
});
