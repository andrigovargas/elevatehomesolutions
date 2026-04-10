import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Phone, Loader2, CheckCircle, Snowflake } from "lucide-react";
import logoElevate from "@/assets/logo-elevate.png";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  address: z.string().trim().min(1, "Address is required").max(300),
});

type FormValues = z.infer<typeof formSchema>;

const WEB3FORMS_KEY = "48ce64c4-3300-47e0-b717-cfccf5ba1315";
const WHATSAPP_URL = "https://wa.me/12394165666?text=Hi%20Elevate!%20I%20need%20help%20with%20my%20AC";

const AcRepair = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "AC Repair Callback Request",
          from_name: "Elevate AC Repair Landing Page",
          name: data.name,
          phone: data.phone,
          address: data.address,
          botcheck: "",
        }),
      });
      const result = await res.json();
      if (result.success) {
        setSubmitted(true);
        reset();
      }
    } catch {
      // user can retry
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-[100dvh] flex flex-col bg-gradient-to-b from-[hsl(207,90%,12%)] via-[hsl(207,80%,18%)] to-[hsl(207,70%,24%)] text-white relative overflow-hidden">
      {/* Decorative snowflakes */}
      <div className="absolute top-8 right-8 opacity-10">
        <Snowflake className="h-32 w-32" />
      </div>
      <div className="absolute bottom-12 left-6 opacity-5">
        <Snowflake className="h-48 w-48" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-5 py-6 relative z-10 max-w-lg mx-auto w-full">
        {/* Logo */}
        <div className="mb-4">
          <img src={logoElevate} alt="Elevate Home Solutions" className="h-28 md:h-36 mx-auto" />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-center leading-tight tracking-tight">
          AC BROKE?{" "}
          <span className="text-[hsl(190,90%,55%)]">WE FIX IT TODAY.</span>
        </h1>

        {/* Subtext */}
        <p className="mt-3 text-center text-white/80 text-sm md:text-base leading-relaxed max-w-sm">
          Fast, reliable AC repair and installation in your area.
          <br />
          <strong className="text-white/95">Same-day service available.</strong>
        </p>

        {/* WhatsApp CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 w-full flex items-center justify-center gap-2 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-green-900/30 transition-colors animate-[pulse_2s_ease-in-out_infinite]"
        >
          <MessageCircle className="h-6 w-6" />
          CHAT ON WHATSAPP NOW
        </a>

        {/* Divider */}
        <div className="mt-5 flex items-center gap-3 w-full">
          <div className="flex-1 h-px bg-white/20" />
          <span className="text-xs text-white/50 uppercase tracking-wider">or</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        {/* Callback section */}
        <div className="mt-4 w-full">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Phone className="h-4 w-4 text-white/60" />
            <p className="text-sm text-white/70 text-center">
              Leave your details and we'll contact you ASAP.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle className="h-10 w-10 text-[hsl(142,70%,50%)] mx-auto mb-3" />
              <p className="font-bold text-lg">Thank you!</p>
              <p className="text-white/70 text-sm mt-1">We will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
              <div>
                <input
                  {...register("name")}
                  placeholder="Full Name"
                  className="w-full h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(190,90%,55%)] text-base"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(190,90%,55%)] text-base"
                />
                {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>}
              </div>
              <div>
                <input
                  {...register("address")}
                  placeholder="Full Address"
                  className="w-full h-12 px-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[hsl(190,90%,55%)] text-base"
                />
                {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address.message}</p>}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full h-12 bg-[hsl(207,90%,50%)] hover:bg-[hsl(207,90%,45%)] text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <><Loader2 className="h-5 w-5 animate-spin" /> Sending...</>
                ) : (
                  <>📩 REQUEST A CALL BACK</>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcRepair;
