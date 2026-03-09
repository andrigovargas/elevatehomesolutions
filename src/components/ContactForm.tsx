import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  phone: z.string().trim().min(1, "Phone number is required").max(20, "Phone number is too long"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email is too long"),
  message: z.string().trim().min(1, "Message cannot be empty").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; // Replace with your Web3Forms access key

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", phone: "", email: "", message: "" },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New HVAC Service Request from Elevate Home Solutions",
          from_name: "Elevate Home Solutions Website",
          name: data.name,
          phone: data.phone,
          email: data.email,
          message: data.message,
          botcheck: "",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // silently fail — user can retry
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight">Thank You!</h3>
        <p className="mt-3 text-lg text-muted-foreground max-w-md mx-auto">
          Your request has been sent. Our team will contact you shortly.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Request
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Honeypot */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Smith" className="h-12 text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="(239) 555-0123" className="h-12 text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" className="h-12 text-base" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your HVAC issue or the service you need..."
                  className="min-h-[120px] text-base resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={submitting}
          className="w-full h-14 text-lg font-bold rounded-xl shadow-lg"
          style={{ background: "linear-gradient(135deg, hsl(var(--cta-gradient-from)), hsl(var(--cta-gradient-to)))" }}
        >
          {submitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Request Service
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
