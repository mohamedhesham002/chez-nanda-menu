import { useEffect, useState } from "react";
import { BrandLogo } from "@/components/brand-logo";

const SESSION_KEY = "cn-welcome-shown";

export function WelcomeIntro() {
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(true);

  useEffect(() => {
    let shown = false;
    try {
      shown = sessionStorage.getItem(SESSION_KEY) === "1";
    } catch {
      shown = false;
    }
    if (shown) return;

    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* ignore */
    }

    setDone(false);
    setMounted(true);
    document.body.style.overflow = "hidden";

    const leaveTimer = window.setTimeout(() => setLeaving(true), 2600);
    const endTimer = window.setTimeout(() => {
      setDone(true);
      document.body.style.overflow = "";
    }, 3500);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(endTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (done || !mounted) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-background ${
        leaving ? "intro-exit" : ""
      }`}
    >
      {/* soft radial glow */}
      <div className="intro-glow pointer-events-none absolute inset-0" />

      {/* expanding gold rings */}
      <span className="intro-ring pointer-events-none absolute h-64 w-64 rounded-full border border-gold/40" />
      <span
        className="intro-ring pointer-events-none absolute h-64 w-64 rounded-full border border-gold/30"
        style={{ animationDelay: "0.5s" }}
      />
      <span
        className="intro-ring pointer-events-none absolute h-64 w-64 rounded-full border border-gold/20"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative flex flex-col items-center px-6 text-center">
        <p className="intro-welcome text-xs uppercase tracking-[0.55em] text-gold/90 sm:text-sm">
          Welcome to
        </p>

        <div className="intro-logo mt-6">
          <BrandLogo className="h-24 w-auto sm:h-32 md:h-40" />
          <span className="intro-shine" />
        </div>

        <div className="intro-rule mt-7 h-px w-56 bg-gradient-to-r from-transparent via-gold to-transparent" />

        <p className="intro-tag mt-5 text-sm tracking-[0.3em] text-foreground/80 uppercase">
          Healthy Snacks &amp; More
        </p>
      </div>
    </div>
  );
}
