import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check reduced motion preference
  const prefersReducedMotion = 
    typeof window !== "undefined" && 
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div
      className="fixed bottom-6 right-6 z-50"
      style={
        prefersReducedMotion
          ? { opacity: isVisible ? 1 : 0, pointerEvents: isVisible ? "auto" : "none" }
          : {
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
              transition: "opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              pointerEvents: isVisible ? "auto" : "none",
            }
      }
    >
      <Button
        variant="hero"
        size="lg"
        className="shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/30 transition-shadow"
        asChild
      >
        <Link to="/#contact">
          Apply Now
          <ArrowRight className="w-4 h-4 ml-1" />
        </Link>
      </Button>
    </div>
  );
};

export default FloatingCTA;