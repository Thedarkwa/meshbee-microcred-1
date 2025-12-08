import Header from "@/components/Header";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

const WhyUsPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20">
        <WhyUs />
      </div>
      <Footer />
    </main>
  );
};

export default WhyUsPage;
