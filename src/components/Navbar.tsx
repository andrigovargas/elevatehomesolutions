import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#estimate" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-xl font-extrabold tracking-tight text-foreground">
          Elevate<span className="text-primary"> Home Solutions</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            >
              {label}
            </a>
          ))}
          <a
            href="sms:+12394165666?body=Hi%20Elevate!%20I%20need%20help%20with"
            className="ml-3 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            💬 (239) 416-5666
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-lg p-2 text-foreground hover:bg-muted"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-border/50 bg-background px-5 pb-5 pt-3 space-y-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-4 py-3 text-base font-semibold text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+12394165666"
            className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-base font-bold text-primary-foreground"
          >
            <Phone className="h-4 w-4" />
            (239) 416-5666
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
