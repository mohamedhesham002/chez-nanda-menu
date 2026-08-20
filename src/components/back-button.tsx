import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

interface BackButtonProps {
  to: "/" | "/menu";
  label?: string;
}

export function BackButton({ to, label = "Back" }: BackButtonProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      to={to}
      aria-label={label}
      className={`fixed bottom-6 left-1/2 z-50 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-primary/30 bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:opacity-90 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowLeft className="h-4 w-4" />
      {label}
    </Link>
  );
}
