import { Target, Eye } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const MissionVision = () => {
  const { ref, isVisible, prefersReducedMotion } = useScrollReveal<HTMLDivElement>();

  const getStaggerStyle = (index: number, baseDelay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
          transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 100}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 100}ms`,
        };

  return (
    <section className="py-20 bg-primary/5">
      <div ref={ref} className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span style={getStaggerStyle(0)} className="text-primary font-semibold text-sm uppercase tracking-wider inline-block">Our Purpose</span>
          <h2 style={getStaggerStyle(1)} className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Mission & Vision
          </h2>
          <p style={getStaggerStyle(2)} className="text-muted-foreground text-lg">
            To enhance the living standards of our clients by providing innovative financing solutions powered by technology
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div 
            style={getStaggerStyle(0, 300)}
            className="relative bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-300" />
            
            <div className="relative">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                To improve the living standards of our clients by providing innovative financial solutions powered by technology.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div 
            style={getStaggerStyle(1, 300)}
            className="relative bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border overflow-hidden group hover:shadow-xl transition-shadow duration-300"
          >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-300" />
            
            <div className="relative">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg">
                To become the most reliable and trusted brand for financial solutions in Ghana and beyond.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;