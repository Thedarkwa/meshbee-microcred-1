import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Purpose</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Mission & Vision
          </h2>
          <p className="text-muted-foreground text-lg">
            Guiding principles that drive everything we do at Meshbee MicroCredit Enterprise.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Mission Card */}
          <div className="relative bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-300" />
            
            <div className="relative">
              <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                To improve the living standards of our clients through professional microcredit services and technology
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>Provide tailor-made business solutions backed by professional expertise</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>Offer accessible, flexible and well-structured credit facilities</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                  <span>Deliver excellent customer service at every point at contact</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border overflow-hidden group hover:shadow-xl transition-shadow duration-300">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-300" />
            
            <div className="relative">
              <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-secondary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                To become the most reliable and trusted brand for financial solutions withing the informal sector
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                  <span>A Ghana where every small business has access to capital</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                  <span>Financial inclusion for all, regardless of background</span>
                </li>
                <li className="flex items-start gap-2 text-foreground/80">
                  <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                  <span>Thriving communities built on economic empowerment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
