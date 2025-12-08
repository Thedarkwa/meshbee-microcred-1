import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20">
        <Contact />
      </div>
      <Footer />
    </main>
  );
};

export default ContactPage;
