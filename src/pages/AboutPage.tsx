import Header from "@/components/Header";
import About from "@/components/About";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20">
        <About />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
