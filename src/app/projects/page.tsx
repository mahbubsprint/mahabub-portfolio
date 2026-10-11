import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "68px" }}>
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}
