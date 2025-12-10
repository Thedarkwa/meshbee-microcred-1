import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Car, Building2, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ShoppingBag,
      title: "Business Loans",
      description: "Support small and growing business with funds to restock, expand and manage operations.",
     
      
    },
    {
      icon: Car,
      title: "Commercial Drivers Loan",
      description: "Flexible loan designed for taxi, trotro and ride hailing drivers to maintain, repairor purchase vehicles.",
    },
    {
      icon: Building2,
      title: "Asset Financing",
      description: "A structured loan that helps clients acquire essential assests such as vehicles, equipment, appliances or business tools while paying in flexible installments.",
    },
    {
      icon: Users,
      title: "Group Loans",
      description: "Loans offered to groups or associations where members support each other's repayment to access higher amounts with a minimum of five (5) and a maximum of ten (10).",
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

        {/* Loan Features Section */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Loan Features
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the benefits that make our loans stand out from the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Loan Amount", description: "GHC 1,000.00-GHC 20,000" },
              { title: "Interest Rate", description: "7% for Weekly and 10% Monthly" },
              { title: "Processing Fee", description: "5% of approved amount <br>Application fees: GHC 50.00</br>" },
              { title: "Repayment Options", description: "Daily, Weekly, Bi-Weekly and Monthly" },
              { title: "Duration", description: "1-6 months" },
              { title: "Collateral", description: "Based on Risk profile and Loans amount" },
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-card border border-border/50 rounded-xl p-6 hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
