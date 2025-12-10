import { Clock, Shield, Smile, Percent, FileCheck, Headphones, SearchCheck, Heart, Users, Target, Lightbulb } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Fast Approval",
      description: "Get your loan approved within 48-72 hours. No long waiting times or endless paperwork.",
    },
    {
      icon: Shield,
      title: "No Collateral",
      description: "Most of our loans don't require collateral. Your business potential is your guarantee.",
    },
    {
      icon: Percent,
      title: "Fair Interest Rates",
      description: "Competitive rates designed for small businesses. No hidden charges.",
    },
    {
      icon: Smile,
      title: "Friendly Service",
      description: "Our team treats you like family. We speak your language and understand your needs.",
    },
    {
      icon: FileCheck,
      title: "Simple Process",
      description: "Minimal documentation required. Just bring your ID, business details, and walk out with cash.",
    },
    {
      icon: SearchCheck,
      title: "Thorough Due Diligence",
      description: "We carefully assess every application to ensure responsible lending and protect both you and your business.",
    },
    {
      icon: Headphones,
      title: "Ongoing Support",
      description: "We're with you throughout your loan journey. Questions? We're just a phone call away.",
    },
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with honesty and transparency in all our dealings.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your success is our success. We put your needs at the center of everything we do.",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for the highest standards in service delivery and customer satisfaction.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously improve our processes to serve you better and faster.",
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            We Make Borrowing Easy
          </h2>
          <p className="text-muted-foreground text-lg">
            At Meshbee, we've removed all the stress from getting a loan. Here's why thousands of Ghanaians trust us.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="shrink-0">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Foundation</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg">
            These principles guide everything we do at Meshbee.
          </p>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
