import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Navbar, NavBody, NavbarLogo, NavItems, NavbarButton } from "@/components/ui/navBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      
      <Header />
      <main className="flex-grow"></main>
    
      <Footer />
      </div>
    </>
    
  );
}
