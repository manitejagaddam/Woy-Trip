

import { FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import logo from "../../../../assets/images/logo.png"

export const Footer = (): JSX.Element => {
  // Company links data
  const companyLinks = [
    { title: "About", href: "#" },
    { title: "Careers", href: "#" },
    { title: "Mobile", href: "#" },
  ];

  // Contact links data
  const contactLinks = [
    { title: "Help/FAQ", href: "#" },
    { title: "Press", href: "#" },
    { title: "Affilates", href: "#" },
  ];

  // More links data
  const moreLinks = [
    { title: "Airlinefees", href: "#" },
    { title: "Airline", href: "#" },
    { title: "Low fare tips", href: "#" },
  ];

  // Social media data
  const socialMedia = [
    { icon: <FacebookIcon size={36} />, href: "#" },
    { icon: <TwitterIcon size={36} />, href: "#" },
    { icon: <InstagramIcon size={36} />, href: "#" },
  ];

  return (
    <footer className="w-full py-16 px-6 bg-gray-50">
      {/* <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-8"> */}
      <div className="max-w-full mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-8">
        {/* Logo section */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start">
          <div className="relative flex items-center">
            <div className="w-[189px] mx-auto md:mx-0">
              {/* Logo image */}
              <motion.img
                src={logo}
                alt="WayTrav Logo"
                className="object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="w-full md:w-2/4 flex flex-col sm:flex-row justify-between gap-8">
          {/* Company links */}
          <div className="w-full sm:w-1/3">
            <h3 className="font-bold text-black text-[21px] leading-[26.1px] mb-8">
              Company
            </h3>
            <ul className="space-y-4">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-medium text-text-clr text-lg leading-[22.4px] hover:text-blue-500 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact links */}
          <div className="w-full sm:w-1/3">
            <h3 className="font-bold text-black text-[21px] leading-[26.1px] mb-8">
              Contact
            </h3>
            <ul className="space-y-4">
              {contactLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-medium text-text-clr text-lg leading-[22.4px] hover:text-blue-500 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div className="w-full sm:w-1/3">
            <h3 className="font-bold text-black text-[21px] leading-[26.1px] mb-8">
              More
            </h3>
            <ul className="space-y-4">
              {moreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-medium text-text-clr text-lg leading-[22.4px] hover:text-blue-500 transition-colors"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social media section */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end">
          <div className="flex items-center gap-4 sm:gap-9">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 sm:w-[72px] sm:h-[72px] flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
