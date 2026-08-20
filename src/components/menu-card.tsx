import type { MenuItem } from "@/lib/menu-data";

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="flex items-start justify-between gap-4 py-5 sm:gap-8">
      <div className="flex-1">
        <h3 className="text-lg font-semibold leading-snug text-secondary sm:text-xl">
          {item.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/90 sm:text-base">
          {item.description}
        </p>
      </div>
      <div
        className="price-burst mt-1 h-16 w-16 shrink-0 text-base font-semibold italic sm:h-[4.5rem] sm:w-[4.5rem] sm:text-lg"
        aria-hidden="true"
      >
        {item.price}
      </div>
      <span className="sr-only">{item.price} EGP</span>
    </article>
  );
}
