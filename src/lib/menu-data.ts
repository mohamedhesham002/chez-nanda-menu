import catCookies from "@/assets/cookies.jpg.asset.json";
import catEnergyBalls from "@/assets/cat-energy-balls.jpg";
import catHealthyBites from "@/assets/healthy-bites.jpg.asset.json";

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
  image: string;
  items: MenuItem[];
}

export const CURRENCY = "EGP";

export const menuCategories: MenuCategory[] = [
  {
    slug: "energy-balls",
    title: "Energy Balls",
    tagline: "Naturally sweet bites of dates, nuts and dried fruit",
    image: catEnergyBalls,
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
          "3 pieces made of dates with a mixture of pistachios, almonds, walnuts, sesame and cocoa powder",
        price: 60,
      },
      {
        id: "orange-rush-box",
        name: "Orange Rush Box",
        description:
          "3 pieces made from medjool dates with a mixture of almonds, oranges and cocoa powder",
        price: 80,
      },
    ],
  },
  {
    slug: "healthy-bites",
    title: "Healthy Bites",
    tagline: "Dates, nuts and dark chocolate — no guilt included",
    image: catHealthyBites.url,
    items: [
      {
        id: "sesame-bites-box",
        name: "Sesame Bites Box",
        description:
          "4 pieces made from dates with a mixture of almonds, walnuts, sesame and dark chocolate",
        price: 80,
      },
      {
        id: "peanut-bites",
        name: "Peanut Bites",
        description: "1 piece made with dates and crushed peanuts covered with dark chocolate",
        price: 45,
      },
      {
        id: "walnuts-bites",
        name: "Walnuts Bites",
        description:
          "1 piece made with dates, walnuts, cocoa powder and honey, covered with dark chocolate and sea salt",
        price: 50,
      },
      {
        id: "peanut-bomb",
        name: "Peanut Bomb",
        description:
          "1 piece made with medjool dates with peanut butter and peanuts covered with dark chocolate and sea salt",
        price: 60,
      },
      {
        id: "no-guilt-choco-bites",
        name: "No Guilt Choco Bites",
        description:
          "1 piece made from a mixture of pumpkin seeds, almonds, cashews, walnuts and mixed dried fruits covered with dark chocolate",
        price: 60,
      },
      {
        id: "tamrat-box",
        name: "Tamrat Box",
        description:
          "2 pieces of medjool dates with a variety of fillings to choose from (pistachio cream and pistachio / almond / coconut cream / peanut butter and peanuts / lotus and pecan / cashews / walnuts / apricots & prunes) covered with dark chocolate",
        price: 105,
      },
      {
        id: "not-so-cheesecake",
        name: "Not So Cheesecake",
        description: "A cup of cottage cheese, roasted almonds and fresh strawberries",
        price: 85,
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookies",
    tagline: "Warm, rich cookies baked with heart and wholesome grains.
    image: catCookies.url,
    items: [
      {
        id: "almond-oats-cookies",
        name: "Almond & Oats Cookies",
        description: "Two cookies made from a mixture of almond flour, oats flour and dark chocolate",
        price: 40,
      },
      {
        id: "corn-oats-cookies",
        name: "Corn & Oats Cookies",
        description: "Two cookies made from a mixture of corn flour, oats flour and dark chocolate",
        price: 40,
      },
      {
        id: "amaretti-cookies",
        name: "Amaretti Cookies",
        description:
          "Two cookies made from a mixture of almond flour, oats flour, shredded coconuts and honey",
        price: 40,
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): MenuCategory | undefined {
  return menuCategories.find((category) => category.slug === slug);
}
