import { createFileRoute } from "@tanstack/react-router";

import { MenuPage } from "@/components/menu-page";

export const Route = createFileRoute("/healthy-bites")({
  head: () => ({
    meta: [
      { title: "Healthy Bites — Chez Nanda" },
      {
        name: "description",
        content:
          "Chez Nanda healthy bites: sesame bites, peanut bites, walnuts bites, peanut bomb, no guilt choco bites, tamrat box and not so cheesecake.",
      },
      { property: "og:title", content: "Healthy Bites — Chez Nanda" },
      {
        property: "og:description",
        content:
          "Chez Nanda healthy bites: sesame bites, peanut bites, walnuts bites, peanut bomb, no guilt choco bites, tamrat box and not so cheesecake.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <MenuPage slug="healthy-bites" />,
});
