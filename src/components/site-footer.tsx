import { Instagram } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-primary/30">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-3 px-4 py-8 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary">
          Healthy Snacks &amp; More
        </p>
        <a
          href="https://instagram.com/chez.nanda"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <Instagram className="h-4 w-4" />
          @chez.nanda
        </a>
      </div>
    </footer>
  );
}
