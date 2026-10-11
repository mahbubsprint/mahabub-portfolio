import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "68px" }}>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
