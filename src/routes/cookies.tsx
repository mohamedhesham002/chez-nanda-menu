import { createFileRoute } from "@tanstack/react-router";

import { MenuPage } from "@/components/menu-page";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookies — Chez Nanda" },
      {
        name: "description",
        content:
          "Chez Nanda cookies: almond & oats, corn & oats and amaretti — double layered with wholesome flours.",
      },
      { property: "og:title", content: "Cookies — Chez Nanda" },
      {
        property: "og:description",
        content:
          "Chez Nanda cookies: almond & oats, corn & oats and amaretti — double layered with wholesome flours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <MenuPage slug="cookies" />,
});
