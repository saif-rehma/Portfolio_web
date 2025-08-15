"use client";

import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavItems,
  MobileNav,
  MobileNavToggle,
  MobileNavMenu,
  MobileNavHeader,
} from "@/components/ui/navBar";

import React, { useState } from "react";
import { ModeToggle } from "./toggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar>
        <NavBody>
          <NavbarLogo />

          {/* Desktop Links */}
          <div className="hidden md:flex">
            <NavItems items={navLinks} />
          <div className="ml-4 z-50">
           <ModeToggle />
            </div>
            </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Menu */}
      <MobileNav visible={isOpen} className="md:hidden">
        <MobileNavHeader>
          <NavbarLogo />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <NavItems items={navLinks} onItemClick={() => setIsOpen(false)} />
        </MobileNavMenu>
      </MobileNav>
    </>
  );
}
//  Let's create main menu . Look after you tomorrow 