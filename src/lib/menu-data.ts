export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  tags?: ("vegetarian" | "vegan" | "gluten-free" | "spicy" | "chef's choice")[];
}

export interface MenuCategory {
  id: string;
  title: string;
  subtitle: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "starters",
    title: "Starters",
    subtitle: "Small plates to awaken the palate",
    items: [
      {
        id: "soupe-du-jour",
        name: "Soupe du Jour",
        description: "Seasonal vegetable soup finished with a swirl of crème fraîche and fresh herbs.",
        price: "$9",
        tags: ["vegetarian"],
      },
      {
        id: "tartare-de-saumon",
        name: "Tartare de Saumon",
        description: "Fresh salmon tartare with avocado, dill, capers, and lemon-infused olive oil.",
        price: "$16",
        tags: ["gluten-free"],
      },
      {
        id: "escargots",
        name: "Escargots de Bourgogne",
        description: "Classic Burgundy snails baked in garlic-parsley butter with a crusty baguette.",
        price: "$15",
      },
      {
        id: "salade-de-chèvre",
        name: "Salade de Chèvre Chaud",
        description: "Warm goat cheese on toasted brioche with mixed greens, walnuts, and honey vinaigrette.",
        price: "$14",
        tags: ["vegetarian"],
      },
      {
        id: "croquettes",
        name: "Croquettes de Jambon",
        description: "Crispy ham croquettes with béchamel center and grainy mustard aioli.",
        price: "$13",
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    subtitle: "Hearty, comforting dishes from the heart",
    items: [
      {
        id: "coq-au-vin",
        name: "Coq au Vin",
        description: "Braised chicken in red wine with mushrooms, pearl onions, and lardons, served with mashed potatoes.",
        price: "$26",
        tags: ["chef's choice"],
      },
      {
        id: "steak-frites",
        name: "Steak Frites",
        description: "Grilled hanger steak with herb butter, crispy hand-cut fries, and peppercorn sauce.",
        price: "$28",
      },
      {
        id: "ratatouille",
        name: "Ratatouille Niçoise",
        description: "Provençal stewed vegetables with zucchini, eggplant, peppers, and tomato, served with polenta.",
        price: "$21",
        tags: ["vegan", "gluten-free"],
      },
      {
        id: "magret-de-canard",
        name: "Magret de Canard",
        description: "Pan-seared duck breast with cherry gastrique, roasted root vegetables, and thyme jus.",
        price: "$30",
        tags: ["gluten-free"],
      },
      {
        id: "bouillabaisse",
        name: "Bouillabaisse",
        description: "Marseille-style fish stew with saffron broth, shellfish, rouille, and grilled baguette.",
        price: "$32",
      },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    subtitle: "Sweet endings, made in-house daily",
    items: [
      {
        id: "crème-brûlée",
        name: "Crème Brûlée",
        description: "Vanilla bean custard with a caramelized sugar crust and fresh berries.",
        price: "$11",
        tags: ["vegetarian", "gluten-free"],
      },
      {
        id: "tarte-tatin",
        name: "Tarte Tatin",
        description: "Caramelized apple tart baked upside down, served warm with vanilla ice cream.",
        price: "$12",
        tags: ["vegetarian"],
      },
      {
        id: "mousse-au-chocolat",
        name: "Mousse au Chocolat",
        description: "Silky dark chocolate mousse with sea salt and whipped crème fraîche.",
        price: "$10",
        tags: ["vegetarian", "gluten-free"],
      },
      {
        id: "profiteroles",
        name: "Profiteroles",
        description: "Choux pastries filled with vanilla ice cream and drizzled with warm chocolate sauce.",
        price: "$12",
        tags: ["vegetarian"],
      },
    ],
  },
  {
    id: "drinks",
    title: "Drinks",
    subtitle: "Wines, cocktails, and non-alcoholic refreshments",
    items: [
      {
        id: "kir-royal",
        name: "Kir Royal",
        description: "Champagne with a touch of crème de cassis.",
        price: "$14",
      },
      {
        id: "vin-rouge",
        name: "Vin Rouge du Jour",
        description: "A rotating selection of our sommelier's favorite French reds by the glass.",
        price: "$12",
      },
      {
        id: "citron-pressé",
        name: "Citron Pressé",
        description: "Freshly squeezed lemon with sparkling water and a hint of lavender syrup.",
        price: "$7",
      },
      {
        id: "café-crème",
        name: "Café Crème",
        description: "Rich espresso with steamed milk, served with a delicate madeleine.",
        price: "$6",
      },
      {
        id: "tisane",
        name: "Tisane Maison",
        description: "House herbal infusion of chamomile, verbena, and orange blossom.",
        price: "$5",
      },
    ],
  },
];

export function getCategoryById(id: string): MenuCategory | undefined {
  return menuCategories.find((category) => category.id === id);
}
