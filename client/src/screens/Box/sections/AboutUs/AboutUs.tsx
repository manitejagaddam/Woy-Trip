import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

import comp from "../../../../assets/images/about_comp.png";

export const AboutUs = (): JSX.Element => {
  const paragraphs = [
    <>
      Founded in <span className="font-bold">2020</span> in Chennai, Tamil Nadu,
      VRV Security has rapidly become a global leader in cybersecurity. The
      company focuses on <span className="font-bold">securing</span> digital
      ecosystems and <span className="font-bold">addressing</span> modern cyber
      threats with <span className="font-bold">innovative</span> solutions,{" "}
      <span className="font-bold">empowering</span> organizations to operate{" "}
      <span className="font-bold">safely</span> in a digital-first world.
    </>,
    <>
      <span className="font-bold">Specializing</span> in AI-powered and{" "}
      <span className="font-bold">cloud-based</span> Vulnerability Assessment
      and Penetration Testing <span className="font-bold">(VAPT),</span> VRV
      Security delivers <span className="font-bold">precise</span> and{" "}
      <span className="font-bold">proactive</span> cybersecurity services.
    </>,
    <>
      Trusted by <span className="font-bold">Fortune 500 companies</span> and{" "}
      <span className="font-bold">government</span> organizations, VRV Security
      serves a wide range of industries, including{" "}
      <span className="font-bold">IT, healthcare, finance</span>, and{" "}
      <span className="font-bold">critical infrastructure</span>.
    </>,
  ];

  const stats = [
    {
      value: "10+",
      label: "Tours",
      bgColor: "bg-[#21b9fa]",
      textColor: "text-primary-bg",
    },
    {
      value: "5+",
      label: "Places",
      bgColor: "bg-black",
      textColor: "text-neutral-100",
    },
    {
      value: "5",
      label: "Continents",
      bgColor: "bg-[#21b9fa]",
      textColor: "text-primary-bg",
    },
  ];

  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-24">
      <Card className="w-full bg-[#eef7ff] rounded-[20px_130px_20px_130px] border-8 border-neutral-100 overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col items-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000] mt-10 mb-8 md:my-14 leading-tight text-center">
              About WoyTrip
            </h2>

            {/* Content */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 px-4 md:px-12 lg:px-24 pb-12">
              <div className="flex flex-col w-full md:w-1/2 items-start gap-6">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-[#100c08] text-justify leading-6 font-normal font-inter"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Image */}
              <div className="flex justify-center w-full md:w-1/2">
                <img
                  src={comp}
                  alt="Company Visual"
                  className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="w-full flex flex-col md:flex-row">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`flex-1 ${stat.bgColor} py-8 md:py-10 flex flex-col items-center justify-center`}
                  >
                    <div
                      className={`${stat.textColor} text-3xl md:text-5xl font-normal font-digital leading-none`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={`${stat.textColor} text-xl md:text-2xl font-semibold mt-2`}
                    >
                      {stat.label}
                    </div>
                  </div>
                  {index < stats.length - 1 && (
                    <Separator
                      orientation="horizontal md:vertical"
                      className="bg-neutral-100 h-px md:h-auto md:w-px"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

