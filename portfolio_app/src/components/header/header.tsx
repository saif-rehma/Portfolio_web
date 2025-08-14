"use client"
import { Navbar, NavBody, NavbarLogo, NavItems, NavbarButton, MobileNav, MobileNavToggle, MobileNavMenu, MobileNavHeader } from "@/components/ui/navBar"
import Link from "next/link";

export default function Header()
{
    const navLinks = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/project" },
    { name: "Contact", link: "/contact" },
  ];
   
    return (
        <>
        <div>
              <Navbar>
              <NavBody>
                <NavbarLogo />
                  {/* Desktop Navigation */}
                  <div className="hidden md:flex">
                  <NavItems items={navLinks} />
                  {/* <NavbarButton href="/signup">Sign Up</NavbarButton> */}
                  </div>

                
                  {/* Mobile Menu Toggle */}
                   <div className="flex md:hidden">
                <MobileNavToggle
              isOpen={true}
              onClick={() => setIsOpen(true)}
            />
          </div>
              </NavBody>
              </Navbar>
              {/* Mobile Menu */}
      <MobileNav visible={true}>
        <MobileNavHeader>
          <NavbarLogo />
        </MobileNavHeader>
        <MobileNavMenu isOpen={true} onClose={() => setIsOpen(false)}>
          <NavItems
            items={[
              { name: "Home", link: "/" },
              { name: "Projects", link: "/projects" },
              { name: "Contact", link: "/contact" },
            ]}
          />
        </MobileNavMenu>
      </MobileNav>
                  </div>
        </>
      );
}