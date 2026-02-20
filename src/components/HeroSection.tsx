import { ChevronRight, Calendar1 } from "lucide-react";
import heroImage from "@/assets/hero-hvac.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="HVAC technician servicing an outdoor AC unit in Fort Myers, Florida"
          className="h-full w-full object-cover"
          loading="eager" />

        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="trust-badge mb-6">Same-Day Service Available
            <Calendar1 className="h-4 w-4" />
            Same-Day Service Available
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            AC Not Cooling?{" "}
            <span className="block mt-1">We'll Get It Fixed Today.</span>
          </h1>

          <p className="mt-4 text-lg font-semibold text-primary-foreground/90 md:text-xl">
            Fast, Reliable HVAC Repair & Installation
            <br />
            <span className="font-normal text-primary-foreground/70">
              Serving Fort Myers & Nearby Areas
            </span>
          </p>

          <div className="mt-8 space-y-4 text-primary-foreground/80 text-base md:text-lg leading-relaxed">
            <p>
              If your AC just stopped working, we know how frustrating that can
              be — especially in this Florida heat.
            </p>
            <p>
              Our team provides same-day service for common issues like:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pl-0">
              {[
              "AC blowing warm air",
              "Unusual noises",
              "Water leaks",
              "Unit not turning on",
              "Weak airflow",
              "Thermostat problems"].
              map((item) =>
              <li key={item} className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              )}
            </ul>

            <p>
              No long wait times.
              <br />
              No pressure to replace what doesn't need replacing.
            </p>
            <p>
              Just straightforward service from people who care about getting
              your home comfortable again — fast.
            </p>
          </div>

          <div className="mt-10">
            <a href="#estimate" className="cta-button text-base md:text-lg">
              Request Your Estimate
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;