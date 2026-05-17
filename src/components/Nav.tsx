import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 ${
          scrolled
            ? "glass rounded-full mx-4 md:mx-auto md:max-w-5xl py-2.5 pl-6 pr-2"
            : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
         <img src="logo.png" alt=""  className="h-20"/>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#story" className="hover:text-foreground transition-colors">Our story</a>
          <a href="#compare" className="hover:text-foreground transition-colors">Why us</a>
          <a href="#farms" className="hover:text-foreground transition-colors">Farms</a>
          <a href="#invest" className="hover:text-foreground transition-colors">Invest</a>
        </nav>
        <a
          href="#farms"
          className="inline-flex items-center gap-1.5 rounded-full bg-[var(--moss)] px-5 py-5 text-sm font-semibold text-primary-foreground magnetic-btn"
        >
          Get early access
        </a>
      </div>
    </header>
  );
}

