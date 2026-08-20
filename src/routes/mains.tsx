import { createFileRoute } from "@tanstack/react-router";
import { MenuPage } from "@/components/menu-page";

export const Route = createFileRoute("/mains")({
  head: () => ({
    meta: [
      { title: "Mains — Chez Nanda" },
      {
        name: "description",
        content:
          "Hearty main courses at Chez Nanda: coq au vin, steak frites, ratatouille, duck breast, and bouillabaisse.",
      },
      {
        property: "og:title",
        content: "Mains — Chez Nanda",
      },
      {
        property: "og:description",
        content:
          "Hearty main courses at Chez Nanda: coq au vin, steak frites, ratatouille, duck breast, and bouillabaisse.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <MenuPage categoryId="mains" />,
});
