import { ChevronRight } from "lucide-react";

const StickyMobileCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 block md:hidden border-t border-border bg-card/95 backdrop-blur-sm px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a href="https://calendly.com/elevatehomesolutionsft/30min" target="_blank" rel="noopener noreferrer" className="cta-button w-full text-base py-3.5">
        Request Your Estimate
        <ChevronRight className="ml-2 h-5 w-5" />
      </a>
    </div>
  );
};

export default StickyMobileCTA;
