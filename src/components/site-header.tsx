import { Link, useRouterState } from "@tanstack/react-router";

import { BrandLogo } from "@/components/brand-logo";

const navItems = [
  { to: "/energy-balls", label: "Energy Balls" },
  { to: "/healthy-bites", label: "Healthy Bites" },
  { to: "/cookies", label: "Cookies" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/30 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 py-3 sm:flex-row sm:justify-between sm:py-4">
        <Link to="/" className="transition-opacity hover:opacity-80">
          <BrandLogo className="h-9 w-auto sm:h-10" />
          <span className="sr-only">Chez Nanda home</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-1.5">
          {navItems.map((item) => {
            const isActive = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-secondary hover:bg-primary/15"
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
