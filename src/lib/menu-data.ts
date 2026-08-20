export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  slug: string;
  title: string;
  tagline: string;
  items: MenuItem[];
}

export const CURRENCY = "EGP";

export const menuCategories: MenuCategory[] = [
  {
    slug: "energy-balls",
    title: "Energy Balls",
    tagline: "Naturally sweet bites of dates, nuts and dried fruit",
    items: [
      {
        id: "lemon-balls-box",
        name: "Lemon Balls Box",
        description: "3 pieces made with almond flour and lemons",
        price: 105,
      },
      {
        id: "apricot-balls-box",
        name: "Apricot Balls Box",
        description: "3 pieces made with almond flour and dried apricots",
        price: 115,
      },
      {
        id: "apricot-prunes-balls-box",
        name: "Apricot and Prunes Balls Box",
        description: "3 pieces made with mixed nuts, dried apricots and prunes",
        price: 115,
      },
      {
        id: "tamreya-mixed-nuts-jar",
        name: "Tamreya Mixed Nuts Jar",
        description:
          "3 pieces made of dates with a mixture of pistachios, almonds, walnuts, sesame, coconut and cocoa powder",
        price: 60,
      },
      {
        id: "orange-rush-box",
        name: "Orange Rush Box",
        description:
          "3 pieces made of medjool dates with a mixture of almonds, oranges and cocoa powder",
        price: 70,
      },
    ],
  },
  {
    slug: "healthy-bites",
    title: "Healthy Bites",
    tagline: "Dates, nuts and dark chocolate — no guilt included",
    items: [
      {
        id: "sesame-bites-box",
        name: "Sesame Bites Box",
        description:
          "4 pieces made of dates with a mixture of almonds, walnuts, sesame and dark chocolate",
        price: 80,
      },
      {
        id: "peanut-bites",
        name: "Peanut Bites",
        description: "1 piece made of dates with crushed peanuts covered with dark chocolate",
        price: 40,
      },
      {
        id: "walnuts-bites",
        name: "Walnuts Bites",
        description:
          "1 piece filled with walnuts, cocoa powder, honey and dates covered with dark chocolate and sea salt",
        price: 50,
      },
      {
        id: "peanut-bomb",
        name: "Peanut Bomb",
        description:
          "1 piece made of medjool dates with peanut butter and peanuts covered with dark chocolate and sea salt",
        price: 55,
      },
      {
        id: "no-guilt-choco-bites",
        name: "No Guilt Choco Bites",
        description:
          "1 piece mix of pumpkin seeds, almonds, cashews, raisins, hazelnut and mixed dried fruits covered with dark chocolate",
        price: 55,
      },
      {
        id: "tamrat-box",
        name: "Tamrat Box",
        description:
          "2 pieces of medjool dates with a variety of fillings to choose from (pistachio cream and pistachio / nutella and almond / coconut cream / peanut butter and peanuts / lotus / cashews / walnuts / apricots & prunes) covered with dark chocolate",
        price: 100,
      },
      {
        id: "not-so-cheesecake",
        name: "Not So Cheesecake",
        description: "A cup of cottage cheese, roasted almonds and fresh strawberries",
        price: 80,
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookies",
    tagline: "Double layered and baked with wholesome flours",
    items: [
      {
        id: "almond-oats-cookies",
        name: "Almond & Oats Cookies",
        description: "A double layered cookie made of almond flour, oats flour and dark chocolate",
        price: 30,
      },
      {
        id: "corn-oats-cookies",
        name: "Corn & Oats Cookies",
        description: "A double layered cookie made of corn flour, oats flour and dark chocolate",
        price: 30,
      },
      {
        id: "amaretti-cookies",
        name: "Amaretti Cookies",
        description:
          "A double layered cookie made of almond flour, oats flour, shredded coconuts and honey",
        price: 30,
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): MenuCategory | undefined {
  return menuCategories.find((category) => category.slug === slug);
}
