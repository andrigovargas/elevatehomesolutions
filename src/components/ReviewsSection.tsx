import { Star } from "lucide-react";

const reviews = [
  {
    name: "Maria G.",
    text: "Our AC went out on the hottest day of summer. Elevate came out same-day and had it running in under an hour. Honest pricing and super friendly crew.",
    rating: 5,
  },
  {
    name: "James T.",
    text: "I've used several HVAC companies in Fort Myers, and Elevate is hands-down the best. They diagnosed the problem quickly and didn't try to upsell me on things I didn't need.",
    rating: 5,
  },
  {
    name: "Linda P.",
    text: "Excellent service from start to finish. They replaced our old system and walked us through every option. Very professional and reasonably priced.",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "Texted them in the morning and they were at my house by the afternoon. Fixed a refrigerant leak and our home was cool again by dinner. Highly recommend!",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding bg-section-alt">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Real reviews from real homeowners we've helped stay cool.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map(({ name, text, rating }) => (
            <div
              key={name}
              className="rounded-2xl bg-card border border-border/50 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-card-foreground leading-relaxed text-sm">
                "{text}"
              </p>
              <p className="mt-4 text-sm font-bold text-muted-foreground">
                — {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
