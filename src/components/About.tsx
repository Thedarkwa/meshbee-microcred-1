import { Target, Heart, Users, TrendingUp } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const About = () => {
  const { ref: headerRef, isVisible: headerVisible, prefersReducedMotion } = useScrollReveal<HTMLDivElement>();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal<HTMLDivElement>();

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower small businesses and entrepreneurs across Ghana with accessible, affordable financial support that helps them grow and thrive.",
    },
    {
      icon: Heart,
      title: "Community First",
      description: "We're more than a lending company – we're your partners in success. Every loan we give strengthens our community.",
    },
    {
      icon: Users,
      title: "Financial Inclusion",
      description: "We believe everyone deserves access to fair financial services, regardless of their background or business size.",
    },
    {
      icon: TrendingUp,
      title: "Your Growth",
      description: "When you succeed, we succeed. We're committed to seeing your business flourish with our support.",
    },
  ];

  const getStaggerStyle = (index: number, isVisible: boolean, baseDelay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
          transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 100}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 100}ms`,
        };

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div ref={headerRef}>
            <span style={getStaggerStyle(0, headerVisible)} className="text-primary font-semibold text-sm uppercase tracking-wider inline-block">About Meshbee</span>
            <h2 style={getStaggerStyle(1, headerVisible)} className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Your Trusted Partner in
              <span className="text-primary"> Financial Growth</span>
            </h2>
            <p style={getStaggerStyle(2, headerVisible)} className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Meshbee MicroCredit Enterprise was founded with a simple yet powerful vision: 
              to provide hardworking Ghanaians with the financial support they need to build 
              successful businesses and secure futures.
            </p>
            <p style={getStaggerStyle(3, headerVisible)} className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Based at <strong className="text-foreground">Teshie Fertilizer Road, Accra</strong>, 
              we've been serving our community with integrity, transparency, and genuine care 
              for every client who walks through our doors.
            </p>

            {/* Stats */}
            <div style={getStaggerStyle(4, headerVisible)} className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">1000+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">GHS 2M+</p>
                <p className="text-sm text-muted-foreground">Loans Disbursed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div ref={valuesRef} className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                style={getStaggerStyle(index, valuesVisible)}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;