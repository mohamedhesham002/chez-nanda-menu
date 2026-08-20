import { MapPin, Phone, Clock } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-serif text-lg font-semibold text-foreground">Chez Nanda</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              A warm bistro serving seasonal French comfort food with a modern soul.
            </p>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <MapPin className="h-4 w-4 text-primary" /> Visit us
            </h4>
            <address className="mt-2 not-italic text-sm text-muted-foreground">
              12 Rue de la Gourmandise
              <br />
              Paris 75011, France
            </address>
          </div>
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold text-foreground">
              <Clock className="h-4 w-4 text-primary" /> Hours
            </h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Tue – Sun: 11:30 am – 10:00 pm
              <br />
              Closed Mondays
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Chez Nanda. All rights reserved.
          </p>
          <p className="flex items-center gap-2 text-xs text-muted-foreground">
            <Phone className="h-3 w-3" /> +33 1 23 45 67 89
          </p>
        </div>
      </div>
    </footer>
  );
}
