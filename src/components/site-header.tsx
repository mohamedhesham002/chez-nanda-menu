import { Link, useRouterState } from "@tanstack/react-router";
import { UtensilsCrossed } from "lucide-react";

const navItems = [
  { to: "/starters", label: "Starters" },
  { to: "/mains", label: "Mains" },
  { to: "/desserts", label: "Desserts" },
  { to: "/drinks", label: "Drinks" },
];

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <UtensilsCrossed className="h-6 w-6 text-primary" />
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Chez Nanda
          </span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <nav className="flex items-center gap-1 sm:hidden">
          {navItems.slice(0, 2).map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-2 py-1.5 text-xs font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
