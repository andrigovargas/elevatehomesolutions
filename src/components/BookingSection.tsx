import { Phone, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

const BookingSection = () => {
  return (
    <section id="estimate" className="section-padding">
      <div className="container">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Request HVAC Service
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </div>

          <div className="rounded-2xl bg-card border border-border/50 p-6 md:p-10 shadow-sm">
            <ContactForm />
          </div>

          <div className="text-center mt-8 space-y-3">
            <p className="text-sm text-muted-foreground">
              Prefer to call? Reach us directly:
            </p>
            <a
              href="sms:+12394165666?body=Hi%20Elevate!%20I%20need%20help%20with"
              className="cta-button-outline inline-flex text-base"
            >
              💬 (239) 416-5666
            </a>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Clock className="h-4 w-4" />
              We'll reach out as soon as possible to schedule your service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;