import {
  Thermometer,
  Wrench,
  RefreshCw,
  Shield,
  Settings,
  Wind,
  Gauge,
  PipetteIcon,
  AlertTriangle,
  CalendarCheck,
  ChevronRight,
} from "lucide-react";

const services = [
  { icon: Wrench, label: "AC Repair" },
  { icon: RefreshCw, label: "New AC Installation" },
  { icon: Settings, label: "System Replacement" },
  { icon: Shield, label: "Preventative Maintenance" },
  { icon: Thermometer, label: "Thermostat Repair & Replacement" },
  { icon: Wind, label: "Airflow Inspection" },
  { icon: Gauge, label: "System Tune-Ups" },
  { icon: PipetteIcon, label: "Ductwork Inspection" },
  { icon: AlertTriangle, label: "Emergency HVAC Service" },
  { icon: CalendarCheck, label: "Seasonal Maintenance Plans" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Our Residential HVAC Services
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We offer a full range of HVAC services for residential properties,
            including:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {services.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-xl bg-card p-5 shadow-sm border border-border/50 transition-shadow hover:shadow-md"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Icon className="h-5 w-5 text-secondary-foreground" />
              </div>
              <span className="font-semibold text-card-foreground">{label}</span>
            </div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mt-12 space-y-6">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Whether it's a quick fix or a full system install, we'll walk you
            through your options and help you make the right call for your home
            and your budget.
          </p>
          <a href="#estimate" className="cta-button-outline inline-flex">
            Check Availability Today
            <ChevronRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
