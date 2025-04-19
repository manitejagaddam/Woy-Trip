import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Menu, X } from "lucide-react"; // Icons for hamburger menu
import { motion, AnimatePresence } from "framer-motion"; // For animations
import logo from "../../../../assets/images/mainLogo.png";

export const Navbar = (): JSX.Element => {
  // State to toggle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Navigation menu items
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Contact Us", href: "/#contact" },
    { label: "About Us", href: "/about" },
  ];

  return (
    <header className="w-full py-5 bg-inherit">
      <div className="container mx-auto flex items-center justify-between px-12">
        {/* Logo Section */}
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-auto scale-125 hover:scale-150 transition-transform duration-300 ease-in-out"
        />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="bg-gradient-to-r from-[#42a7c3] to-[#38d4ff] text-white font-bold px-4 py-1 rounded-lg hover:opacity-80 transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button for Desktop */}
        <a href="/#destinations">
          <Button className="bg-gradient-to-r from-[#42a7c3] to-[#38d4ff] text-white font-bold px-4 py-1 rounded-lg hover:opacity-80 transition-all">
            Make Trip
          </Button>
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-transparent shadow-lg absolute top-[70px] left-0 w-full flex flex-col items-end pr-6 py-5 space-y-4 z-50"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="bg-gradient-to-r from-[#42a7c3] to-[#38d4ff] text-white font-bold px-4 py-1 rounded-lg hover:opacity-80 transition-all"
              >
                {item.label}
              </a>
            ))}

            {/* CTA Button in Mobile Menu */}
            <a href="/#destinations">
              <Button className="bg-gradient-to-r from-[#42a7c3] to-[#38d4ff] text-white font-bold px-4 py-1 rounded-lg hover:opacity-80 transition-all">
                Make Trip
              </Button>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
