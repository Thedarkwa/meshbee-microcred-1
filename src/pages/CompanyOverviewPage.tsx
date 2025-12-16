import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Lightbulb, 
  Award,
  Building,
  Calendar,
  MapPin
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CompanyOverviewPage = () => {
  const { ref: heroRef, isVisible: heroVisible, prefersReducedMotion } = useScrollReveal<HTMLDivElement>();
  const { ref: storyRef, isVisible: storyVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: milestonesRef, isVisible: milestonesVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: missionHeaderRef, isVisible: missionHeaderVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: missionCardsRef, isVisible: missionCardsVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: valuesHeaderRef, isVisible: valuesHeaderVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: whyUsHeaderRef, isVisible: whyUsHeaderVisible } = useScrollReveal<HTMLDivElement>();
  const { ref: whyUsCardsRef, isVisible: whyUsCardsVisible } = useScrollReveal<HTMLDivElement>();

  const getStaggerStyle = (index: number, isVisible: boolean, baseDelay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.97)',
          transition: `opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 120}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * 120}ms`,
        };

  const coreValues = [
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with honesty and transparency in all our dealings, building trust with every interaction.",
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

  const milestones = [
    {
      year: "Founded",
      title: "Our Beginning",
      description: "Meshbee MicroCredit Enterprise was established with a vision to serve the underbanked communities of Ghana.",
    },
    {
      year: "Growth",
      title: "Expanding Reach",
      description: "We grew from serving a handful of clients to supporting over 1,000+ businesses across Accra.",
    },
    {
      year: "Today",
      title: "Trusted Partner",
      description: "We've disbursed over GHS 2M+ in loans with a 98% customer satisfaction rate.",
    },
  ];

  const whyUsCards = [
    {
      icon: Building,
      title: "Licensed & Regulated",
      description: "Licensed by the Bank of Ghana, ensuring your safety and trust.",
    },
    {
      icon: MapPin,
      title: "Local Presence",
      description: "Based in Teshie, Accra – we understand the local business landscape.",
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "1,000+ satisfied clients and GHS 2M+ in loans disbursed.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-primary/10 to-background">
          <div ref={heroRef} className="container mx-auto px-4">
            <Link 
              to="/#home" 
              style={getStaggerStyle(0, heroVisible)}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            
            <div className="max-w-3xl">
              <h1 
                style={getStaggerStyle(1, heroVisible)}
                className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              >
                About <span className="text-primary">Meshbee</span> MicroCredit
              </h1>
              <p 
                style={getStaggerStyle(2, heroVisible)}
                className="text-xl text-muted-foreground leading-relaxed"
              >
                Empowering Ghanaians with accessible financial solutions since our founding. 
                We believe in the power of small businesses to transform communities and drive economic growth.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div ref={storyRef}>
                <span style={getStaggerStyle(0, storyVisible)} className="text-primary font-semibold text-sm uppercase tracking-wider inline-block">Our Story</span>
                <h2 style={getStaggerStyle(1, storyVisible)} className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Building Dreams, One Loan at a Time
                </h2>
                <p style={getStaggerStyle(2, storyVisible)} className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Meshbee MicroCredit Enterprise was born from a simple observation: hardworking Ghanaians 
                  with great business ideas often lacked access to the financial support they needed to succeed. 
                  Traditional banks had lengthy processes and rigid requirements that excluded many entrepreneurs.
                </p>
                <p style={getStaggerStyle(3, storyVisible)} className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  We set out to change that. Our founders, with deep roots in the Ghanaian business community, 
                  created a microfinance company that truly understands the hustle of market women, taxi drivers, 
                  artisans, and small shop owners.
                </p>
                <p style={getStaggerStyle(4, storyVisible)} className="text-muted-foreground text-lg leading-relaxed">
                  Today, from our office at <strong className="text-foreground">Teshie Fertilizer Road, Accra</strong>, 
                  we continue to serve our community with the same passion and commitment that drove us from day one.
                </p>
              </div>
              
              {/* Milestones */}
              <div ref={milestonesRef} className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index}
                    style={getStaggerStyle(index, milestonesVisible)}
                    className="relative pl-8 pb-6 border-l-2 border-primary/30 last:pb-0"
                  >
                    <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px]" />
                    <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-primary font-semibold">{milestone.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div ref={missionHeaderRef} className="text-center max-w-2xl mx-auto mb-12">
              <span style={getStaggerStyle(0, missionHeaderVisible)} className="text-primary font-semibold text-sm uppercase tracking-wider inline-block">Our Purpose</span>
              <h2 style={getStaggerStyle(1, missionHeaderVisible)} className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Mission & Vision
              </h2>
            </div>

            <div ref={missionCardsRef} className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Mission Card */}
              <div 
                style={getStaggerStyle(0, missionCardsVisible)}
                className="relative bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-300" />
                
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To improve the living standards of our clients by providing innovative financial solutions 
                    powered by technology. We aim to make quality financial services accessible to every 
                    Ghanaian entrepreneur, regardless of their business size or background.
                  </p>
                </div>
              </div>

              {/* Vision Card */}
              <div 
                style={getStaggerStyle(1, missionCardsVisible)}
                className="relative bg-card rounded-2xl p-8 md:p-10 shadow-lg border border-border overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-110 transition-transform duration-300" />
                
                <div className="relative">
                  <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center mb-6">
                    <Eye className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To become the most reliable and trusted brand for financial solutions in Ghana and beyond. 
                    We envision a Ghana where every hardworking individual has access to the capital they need 
                    to build successful businesses and secure futures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div ref={valuesHeaderRef} className="text-center max-w-2xl mx-auto mb-12">
              <span style={getStaggerStyle(0, valuesHeaderVisible)} className="text-primary font-semibold text-sm uppercase tracking-wider inline-block">What We Stand For</span>
              <h2 style={getStaggerStyle(1, valuesHeaderVisible)} className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Our Core Values
              </h2>
              <p style={getStaggerStyle(2, valuesHeaderVisible)} className="text-muted-foreground text-lg">
                These principles guide everything we do at Meshbee and define who we are as a company.
              </p>
            </div>

            <div ref={valuesRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  style={getStaggerStyle(index, valuesVisible)}
                  className="group relative text-center p-8 rounded-2xl bg-gradient-to-b from-card to-card/90 border border-border hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="relative w-20 h-20 mx-auto mb-5">
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20 group-hover:border-primary/40 group-hover:scale-110 transition-all duration-500" />
                      <div className="absolute inset-2 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full flex items-center justify-center group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                        <value.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                  
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-1/2 transition-all duration-500 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why We're Different Section */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div ref={whyUsHeaderRef}>
                <span style={getStaggerStyle(0, whyUsHeaderVisible)} className="text-primary font-semibold text-sm uppercase tracking-wider inline-block">What Sets Us Apart</span>
                <h2 style={getStaggerStyle(1, whyUsHeaderVisible)} className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Why Meshbee?
                </h2>
                <p style={getStaggerStyle(2, whyUsHeaderVisible)} className="text-muted-foreground text-lg mb-10 leading-relaxed">
                  We're not just another microfinance company. We're your partners in success, 
                  committed to seeing your business flourish.
                </p>
              </div>

              <div ref={whyUsCardsRef} className="grid sm:grid-cols-3 gap-8">
                {whyUsCards.map((card, index) => (
                  <div 
                    key={index}
                    style={getStaggerStyle(index, whyUsCardsVisible)}
                    className="bg-card rounded-xl p-6 border border-border shadow-sm"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <card.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
                    <p className="text-muted-foreground text-sm">{card.description}</p>
                  </div>
                ))}
              </div>

              <div style={getStaggerStyle(3, whyUsCardsVisible)} className="mt-12">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/#contact">
                    Start Your Journey With Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CompanyOverviewPage;