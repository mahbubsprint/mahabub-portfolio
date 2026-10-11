import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import ImpactSection from "@/components/ImpactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <ImpactSection />
      </main>
      <Footer />
    </>
  );
}
