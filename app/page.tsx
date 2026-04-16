import { HeroSection } from "@/components/home/HeroSection";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='min-h-screen'>
        <HeroSection/>
      </main>
      <Footer />
    </>
  );
}
