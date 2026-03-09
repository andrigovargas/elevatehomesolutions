import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-extrabold tracking-tight">
              Elevate<span className="text-primary"> Home Solutions</span>
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
              Professional HVAC repair, installation, and maintenance for
              residential properties in Southwest Florida.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/60 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+12394165666"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  (239) 416-5666
                </a>
              </li>
              <li>
                <a
                  href="mailto:elevatehomesolutionsft@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  elevatehomesolutionsft@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary-foreground/60 mb-4">
              Service Area
            </h4>
            <div className="flex items-start gap-2 text-sm text-primary-foreground/80">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
              <span>
                Fort Myers, Cape Coral, Lehigh Acres, Estero, Bonita Springs &
                surrounding areas
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
          © {year} Elevate Home Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
