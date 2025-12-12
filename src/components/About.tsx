import { Target, Heart, Users, TrendingUp } from "lucide-react";

const About = () => {
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

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Meshbee</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
              Your Trusted Partner in
              <span className="text-primary"> Financial Growth</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Meshbee MicroCredit Enterprise was founded with a simple yet powerful vision: 
              to provide hardworking Ghanaians with the financial support they need to build 
              successful businesses and secure futures.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Based at <strong className="text-foreground">Teshie Fertilizer Road, Accra</strong>, 
              we've been serving our community with integrity, transparency, and genuine care 
              for every client who walks through our doors.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
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
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
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
