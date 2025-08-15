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
          <div className="hidden lg:flex">
            <NavItems items={navLinks} />
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden">
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Menu */}
      <MobileNav visible={isOpen} className="lg:hidden">
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