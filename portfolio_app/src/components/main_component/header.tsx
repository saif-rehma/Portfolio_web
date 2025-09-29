"use client";

import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  MobileNav,
  MobileNavToggle,
  MobileNavMenu,
  MobileNavHeader,
} from "@/components/ui/navBar";

import React, { useState } from "react";
import { ModeToggle } from "../ui/toggle";
import Logo from "../ui/logo";

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
      <Navbar className="bg-gradient-to-br from-[#030A14] via-[#0E1C32] to-[#1a1f3b] shadow-xl  backdrop-blur-md sticky top-0 z-50">
        <NavBody className="flex items-center justify-between text-white">
          <div className="flex items-center space-x-4">
            <Logo />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="relative text-gray-200 hover:text-pink-400 transition-colors duration-300 group font-medium"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <div className="ml-6 z-50">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="flex md:hidden">
            <MobileNavToggle
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white border border-pink-500 rounded-md p-2 hover:bg-pink-600/20"
            />
          </div>
        </NavBody>
      </Navbar>

      {/* Mobile Menu */}
      <MobileNav
        visible={isOpen}
        className="md:hidden bg-gradient-to-br from-[#030A14] via-[#0E1C32] to-[#1a1f3b] text-white shadow-md border-t border-pink-500"
      >
        <MobileNavHeader>
          <NavbarLogo />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-200 hover:text-pink-400 transition-colors duration-300 relative group font-medium"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </MobileNavMenu>
      </MobileNav>
    </>
  );
}
