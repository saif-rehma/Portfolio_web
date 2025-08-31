import Footer from "@/components/portfolio_component/footer";
import Header from "@/components/portfolio_component/header";
import HeroSection from "@/components/portfolio_component/hero_section";
import { ModeToggle } from "@/components/portfolio_component/toggle";
import { Navbar, NavBody, NavbarLogo, NavItems, NavbarButton } from "@/components/ui/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="">
      
      <Header />
    
      </div>
      <main>
        {/* Main content here */}
        <HeroSection />
      </main>
      <div>
        {/* <Footer /> */}
      </div>
      
      
    </>
    
  );
}

// Color Adjustment are remaining 