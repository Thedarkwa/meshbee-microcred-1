import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Car, Building2, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: "Market Women Loans",
      description: "Boost your trading capital with loans designed for market women. Flexible daily or weekly repayments that match your sales cycle.",
      features: ["GHS 500 - 10,000", "Daily/Weekly repayment", "No collateral needed"],
    },
    {
      icon: Car,
      title: "Taxi Driver Loans",
      description: "Keep your taxi running smoothly with quick loans for repairs, fuel, or vehicle upgrades. Same-day approval available.",
      features: ["GHS 1,000 - 15,000", "Flexible terms", "Quick disbursement"],
    },
    {
      icon: Building2,
      title: "SME Business Loans",
      description: "Scale your small or medium business with working capital loans. Perfect for stock, equipment, or expansion.",
      features: ["GHS 5,000 - 50,000", "Monthly repayment", "Competitive rates"],
    },
    {
      icon: Users,
      title: "Group Lending",
      description: "Join forces with other entrepreneurs. Lower interest rates and shared responsibility through our community lending program.",
      features: ["Group of 5-10 members", "Lower interest rates", "Peer support"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Loan Products for Every Hustle
          </h2>
          <p className="text-muted-foreground text-lg">
            We understand that every business is unique. That's why we offer flexible loan products tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30 bg-card"
            >
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
