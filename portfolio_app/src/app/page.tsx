import Footer from "@/components/main_component/footer";
import Header from "@/components/main_component/header";
import HeroSection from "@/components/main_component/hero_section";
import { ModeToggle } from "@/components/ui/toggle";
import { Navbar, NavBody, NavbarLogo, NavItems, NavbarButton } from "@/components/ui/navBar";
import Image from "next/image";
import Projects from "@/components/main_component/projects";

export default function Home() {
  return (
    <>
    <div className="">
      
      <Header />
    
      </div>
      <main>
        {/* Main content here */}
        <HeroSection />
        <Projects />
      </main>
      <div>
        {/* <Footer /> */}
      </div>
      
      
    </>
    //  Header , Hero Section COmpleted Also Footer.
  );
}

// Color Adjustment are remaining 

