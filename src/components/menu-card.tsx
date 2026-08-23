import type { MenuItem } from "@/lib/menu-data";

interface MenuCardProps {
  item: MenuItem;
  index?: number;
}

export function MenuCard({ item, index = 0 }: MenuCardProps) {
  return (
    <article
      className="reveal-up group flex items-start justify-between gap-4 rounded-2xl px-2 py-5 transition-colors duration-300 hover:bg-primary/5 sm:gap-8 sm:px-3"
      style={{ animationDelay: `${Math.min(index, 12) * 70}ms` }}
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold leading-snug text-secondary transition-colors duration-300 group-hover:text-primary sm:text-xl">
          {item.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-foreground/90 sm:text-base">
          {item.description}
        </p>
      </div>
      <div
        className="price-burst burst-pop mt-1 h-16 w-16 shrink-0 text-base font-semibold italic transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 sm:h-[4.5rem] sm:w-[4.5rem] sm:text-lg"
        style={{ animationDelay: `${Math.min(index, 12) * 70 + 120}ms` }}
        aria-hidden="true"
      >
        {item.price}
      </div>
      <span className="sr-only">{item.price} EGP</span>
    </article>
  );
}
