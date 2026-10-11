import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "68px" }}>
        <SkillsSection />
      </main>
      <Footer />
    </>
  );
}
