import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import image from "../../../../assets/images/benTower.png";

export const FoundersSection = (): JSX.Element => {
  const founderText = `Vinod Kumar, the visionary CEO of VRV Security, has been at the forefront of revolutionizing cybersecurity for over two decades. 
  Under his leadership, VRV Security has achieved a remarkable $400M valuation by 2024, with operations expanded to 12 countries and a client retention rate of 95%. 
  A passionate mentor and leader, Vinod has guided diverse global teams and inspired hundreds of professionals in the cybersecurity domain. 
  His expertise and strategic acumen continue to set industry standards, driving innovation and excellence in protecting digital landscapes worldwide.`;

  return (
    <section className="w-full px-6 md:px-12 lg:px-24 py-16 flex flex-col gap-10 items-center">
      {/* Header */}
      <Card className="w-full rounded-[50px_0_50px_0] border-4 border-[#21b9fa]">
        <CardContent className="p-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#100c08]">
            About Our Founder's
          </h2>
        </CardContent>
      </Card>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-10 items-stretch justify-between">
        {/* Image Upload Box */}
        {/* <div className="flex flex-col w-full lg:w-1/2 gap-4 border-[7px] border-[#21b9fa] p-4 justify-center items-center bg-[#f4f4f4]">
          <img
            src={image}
            alt="Founder"
            className="w-full h-[450px] object-cover"
          />
        </div> */}

        {/* Description & Testimonial */}
        <div className="flex flex-col w-full lg:w-1/2 gap-6">
          {/* Description Card */}
          <Card className="flex-grow border-[7px] border-[#21b9fa] bg-secondary-bg">
            <CardContent className="p-6 md:p-10 h-full">
              <p className="text-base text-[#100c08] text-justify leading-7 font-sans whitespace-pre-line">
                {founderText}
              </p>
            </CardContent>
          </Card>

          <Card className="border-[12px] border-[#21b9fa] rounded-none">
            <CardContent className="bg-neutral-100 border-[5px] border-[#21b9fa] p-6 relative flex flex-col gap-6">
              {/* Top Decorative Line - aligned left */}
              <div className="flex justify-start">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-[#1d1b20] rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-[#100c08] rounded-full" />
                  </div>
                  <div className="w-32 h-px bg-[#100c08]" />
                </div>
              </div>

              {/* Name and Title - centered */}
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-bg">
                  Racharla Preethi
                </h3>
                <p className="text-md text-[#100c08] mt-1">CEO, WoyTrip</p>
              </div>

              {/* Bottom Decorative Line - aligned right */}
              <div className="flex justify-end">
                <div className="flex items-center gap-2">
                  <div className="w-32 h-px bg-[#100c08]" />
                  <div className="w-4 h-4 border border-[#1d1b20] rounded-full flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-[#100c08] rounded-full" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
