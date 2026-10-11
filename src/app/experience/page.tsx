import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "68px" }}>
        <ExperienceSection />
      </main>
      <Footer />
    </>
  );
}
