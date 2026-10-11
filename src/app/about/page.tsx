import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "68px" }}>
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
