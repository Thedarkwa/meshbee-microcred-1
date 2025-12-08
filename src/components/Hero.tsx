import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const Hero = () => {
  const highlights = [
    "Fast Approval",
    "Flexible Repayment",
    "No Hidden Fees",
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Ghanaian small business owners smiling"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground/90">Trusted by 1,000+ Businesses in Ghana</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-card mb-6 leading-tight">
            Empowering Your
            <span className="text-primary block">Business Dreams</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-card/80 mb-8 leading-relaxed max-w-xl">
            Get quick, affordable loans tailored for market women, commercial drivers, and SMEs. 
            We believe in your hustle and are here to support your growth.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-4 mb-8">
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-card/90">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Apply for a Loan
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              className="border-card/50 text-card hover:bg-card hover:text-foreground"
              asChild
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>

          {/* Trust Indicator */}
          <p className="mt-8 text-sm text-card/60">
             Licensed by the Bank of Ghana •  Located at Teshie Fertilizer Road, Accra
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
