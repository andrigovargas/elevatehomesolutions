import { ChevronRight, Clock, Phone } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="estimate" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-xl text-center rounded-2xl bg-secondary p-10 md:p-14 shadow-sm">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Phone className="h-8 w-8 text-primary" />
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            Need HVAC Service?
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Click below to request your estimate and schedule your service.
          </p>

          <div className="mt-8 flex flex-col gap-3 w-full sm:max-w-xs mx-auto">
            <a href="https://calendly.com/elevatehomesolutionsft/30min" target="_blank" rel="noopener noreferrer" className="cta-button w-full animate-cta-pulse">
              Schedule Your Service
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a href="sms:+12394165666?body=Hi%20Elevate!%20I%20need%20help%20with" className="cta-button-outline w-full">
              Send a Text Message Now
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            We'll reach out as soon as possible to schedule your service.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
