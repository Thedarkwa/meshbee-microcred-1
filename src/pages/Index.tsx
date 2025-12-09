import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MissionVision from "@/components/MissionVision";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type Section = "home" | "about" | "mission-vision" | "services" | "why-us" | "contact";

const Index = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState<Section>("home");

  useEffect(() => {
    const hash = location.hash.replace("#", "") as Section;
    if (hash && ["home", "about", "mission-vision", "services", "why-us", "contact"].includes(hash)) {
      setActiveSection(hash);
    } else {
      setActiveSection("home");
    }
  }, [location.hash]);

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "mission-vision":
        return <MissionVision />;
      case "services":
        return <Services />;
      case "why-us":
        return <WhyUs />;
      case "contact":
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <main className="min-h-screen">
      <Header />
      <div key={activeSection} className="animate-fade-in">
        {renderSection()}
      </div>
      <Footer />
    </main>
  );
};

export default Index;
