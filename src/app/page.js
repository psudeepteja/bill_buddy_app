import ContactInfo from "@/components/ContactInfo";
import Faq from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-[#F5F6F8]">
      <header>
        <Header />
      </header>
      <div>
        <Hero />
      </div>
      <div>
        <ContactInfo />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
