import Header from "@/components/Header";
import MissionVision from "@/components/MissionVision";
import Footer from "@/components/Footer";

const MissionVisionPage = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-16 md:pt-20">
        <MissionVision />
      </div>
      <Footer />
    </main>
  );
};

export default MissionVisionPage;
