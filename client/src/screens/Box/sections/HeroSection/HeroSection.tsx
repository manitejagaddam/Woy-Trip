import React from "react";
import { Navbar } from "../Navbar/Navbar"; // Import the Navbar component

import hero from "../../../../assets/vedios/hero_section.mp4"; // Your video file

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1] blur-[2px]"
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <Navbar />

      {/* Content Wrapper */}
      <div className="relative z-10 flex items-center justify-center text-center min-h-screen px-4">
        <div className="max-w-6xl">
          {/* Subheading */}
          <p className="font-bold text-[#00c7ff] text-5xl lg:text-5xl uppercase font-['Poppins',Helvetica]">
            Best Destinations Around the World
          </p>

          {/* Main Heading */}
          <h1 className="mt-6 font-bold text-5xl md:text-6xl lg:text-7xl leading-tight lg:leading-[86px] tracking-tight font-['Volkhov',Helvetica] text-white">
            Travel, enjoy and live a new
            <br /> and full life
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-200 font-bold text-2xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* CTA Button */}
          <button className="mt-6 md:mt-10 w-[30%] h-[10%] px-8 py-3 bg-[#38d4ff] rounded-lg shadow-md hover:bg-[#38d4ff]/90">
            <span className="font-medium text-lg text-white font-['Poppins',Helvetica]">
              Find out more
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
