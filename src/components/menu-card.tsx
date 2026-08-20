import { Badge } from "@/components/ui/badge";
import type { MenuItem } from "@/lib/menu-data";

interface MenuCardProps {
  item: MenuItem;
}

const tagLabels: Record<string, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  "gluten-free": "Gluten-free",
  spicy: "Spicy",
  "chef's choice": "Chef's choice",
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group flex flex-col justify-between gap-2 border-b border-dashed border-border py-5 sm:flex-row sm:items-baseline sm:gap-6">
      <div className="flex-1">
        <div className="flex items-baseline justify-between gap-4 sm:justify-start">
          <h3 className="font-serif text-lg font-semibold text-foreground">{item.name}</h3>
          <span className="shrink-0 font-medium text-primary">{item.price}</span>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        {item.tags && item.tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-accent/30 text-accent-foreground hover:bg-accent/40 text-xs font-normal"
              >
                {tagLabels[tag] ?? tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
