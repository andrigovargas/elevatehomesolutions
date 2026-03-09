import { Shield, Clock, Award } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "Fast Response",
    description:
      "Same-day service available. We know Florida heat doesn't wait, and neither should you.",
  },
  {
    icon: Shield,
    title: "Reliable & Honest",
    description:
      "No hidden fees, no unnecessary upsells. We fix what needs fixing and explain everything upfront.",
  },
  {
    icon: Award,
    title: "Experienced Technicians",
    description:
      "Our licensed team brings years of hands-on HVAC experience to every job, big or small.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Why Fort Myers Trusts Elevate
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Elevate Home Solutions is a locally owned HVAC company serving Fort
            Myers and surrounding areas. We're committed to keeping your home
            comfortable year-round with service you can actually count on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {highlights.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl bg-card border border-border/50 p-7 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                <Icon className="h-7 w-7 text-secondary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
