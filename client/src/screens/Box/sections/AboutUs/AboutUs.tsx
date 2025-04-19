import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import comp from "../../../../assets/images/about_us.png";

export const AboutUs = (): JSX.Element => {
  const paragraphs = [
    <>
      At <span className="font-bold">WoyTrip</span> –{" "}
      <span className="font-bold">We Organise Your Trip</span>, we believe
      travel is more than just a journey — it's an{" "}
      <span className="font-bold">experience to be cherished</span>. As a
      passionate team of travel enthusiasts, we specialize in crafting{" "}
      <span className="font-bold">personalized trips</span> that reflect your
      unique preferences, ensuring each moment is filled with{" "}
      <span className="font-bold">comfort</span>,{" "}
      <span className="font-bold">adventure</span>, and{" "}
      <span className="font-bold">unforgettable memories</span>.
    </>,

    <>
      Whether you're dreaming of a{" "}
      <span className="font-bold">serene mountain escape</span>, a{" "}
      <span className="font-bold">beachside retreat</span>, or an{" "}
      <span className="font-bold">action-packed city tour</span>, WoyTrip takes
      care of it all. From <span className="font-bold">planning</span> and{" "}
      <span className="font-bold">bookings</span> to{" "}
      <span className="font-bold">local experiences</span> and{" "}
      <span className="font-bold">24/7 support</span>, we provide end-to-end
      solutions that make your vacation{" "}
      <span className="font-bold">seamless</span> and{" "}
      <span className="font-bold">stress-free</span>.
    </>,

    <>
      We collaborate with{" "}
      <span className="font-bold">trusted local partners</span>, handpick{" "}
      <span className="font-bold">accommodations</span> and{" "}
      <span className="font-bold">activities</span>, and focus on delivering{" "}
      <span className="font-bold">authentic travel experiences</span> that go
      beyond the ordinary. Our goal is simple — to help you travel{" "}
      <span className="font-bold">better</span>,{" "}
      <span className="font-bold">smarter</span>, and{" "}
      <span className="font-bold">happier</span>.
    </>,

    <>
      <span className="italic font-semibold">
        So pack your bags and let <span className="font-bold">WoyTrip</span>{" "}
        take care of the rest. We organise your trip — just the way you want it.
      </span>
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
      <Card className="bg-[#eef7ff] border-8 border-neutral-100 rounded-[20px_130px_20px_130px] overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col items-center">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mt-10 mb-8 md:my-14 text-center leading-tight">
              About WoyTrip
            </h2>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16 px-4 md:px-12 lg:px-24 pb-12">
              <div className="w-full md:w-1/2 space-y-6">
                {paragraphs.map((text, idx) => (
                  <p
                    key={idx}
                    className="text-base md:text-lg text-[#100c08] text-justify font-inter leading-6"
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={comp}
                  alt="Company"
                  className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain"
                />
              </div>
            </div>

            {/* Stats Section */}
            <div className="w-full flex flex-col md:flex-row rounded-[0px_0px_20px_100px] overflow-hidden">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <div
                    className={`flex-1 ${stat.bgColor} py-8 md:py-10 flex flex-col items-center justify-center`}
                  >
                    <div
                      className={`${stat.textColor} text-3xl md:text-5xl font-normal font-digital`}
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
