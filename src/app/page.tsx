import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Using from "@/components/home/Using";
import Contact from "@/components/home/Contact";
import Footer from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-teal-50 to-blue-50">
      <Navbar />
      <main className="flex-1 border border-l-teal-800 border-r-purple-600">
        <Hero />
        <Features />
        <Using />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
