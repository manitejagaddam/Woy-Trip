import React, { useRef, useState, useEffect } from "react";
import { FaBus, FaHotel, FaWhatsapp } from "react-icons/fa";
import {
  GiVideoCamera,
  GiMeal,
  GiSightDisabled,
  GiMedicalPackAlt,
} from "react-icons/gi";
import { FiStar } from "react-icons/fi";
import { CardType } from "../../types/card";
import left_areoplane from "../../../../assets/images/our_destination_left_Areoplane.png";
import right_areoplane from "../../../../assets/images/our_destination_right_Areoplane.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Feature item component
const Feature: React.FC<{ icon: JSX.Element; label: string }> = ({
  icon,
  label,
}) => (
  <div className="flex items-center gap-2">
    {icon} {label}
  </div>
);

interface Props {
  cards: CardType[];
}

const sendInquiry = (card: CardType) => {
  const phoneNumber = "918885523545";
  const message = `I need to go to ${card.title} and I need further details.`;
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappURL, "_blank");
};

export const DestinationCardsSection: React.FC<Props> = ({ cards }) => {
  return (
    <main className="max-w-[85%] mx-auto px-6 py-8">
      <div className="flex flex-row items-center justify-center gap-4">
        <img
          src={left_areoplane}
          alt="Left Title Image"
          className="hidden xl:block scale-90 hover:scale-95 transition-all duration-300"
        />
        <div className="text-center xl:text-start">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-2">
            Our Destinations
          </h2>
          <h3 className="text-xl sm:text-2xl text-center text-gray-700 mb-10">
            We Organize Your Trips!
          </h3>
        </div>
        <img
          src={right_areoplane}
          alt="Right Title Image"
          className="hidden xl:block scale-90 hover:scale-95 transition-all duration-300"
        />
      </div>

      <div
        className="grid gap-6"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {cards.map((card) => {
          const swiperRef = useRef<any>(null);
          const [isHovered, setIsHovered] = useState(false); // State to manage hover

          // Handle mouse enter and leave events
          const handleMouseEnter = () => {
            setIsHovered(true);
          };

          const handleMouseLeave = () => {
            setIsHovered(false);
          };

          useEffect(() => {
            if (swiperRef.current) {
              if (isHovered) {
                swiperRef.current.swiper.autoplay.start();
              } else {
                swiperRef.current.swiper.autoplay.stop();
              }
            }
          }, [isHovered]); // This will trigger when isHovered changes

          return (
            <div
              key={card._id}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 ease-out hover:scale-105 relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Popular Tag */}
              {card.popular && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 z-10">
                  <FiStar /> Popular
                </div>
              )}

              {/* Swiper */}
              <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                <Swiper
                  ref={swiperRef}
                  modules={[Autoplay, Pagination]}
                  loop
                  autoplay={{ delay: 1500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  className="w-full h-full"
                >
                  {card.images.map((img, index) => (
                    <SwiperSlide key={img.publicId}>
                      <img
                        src={img.url}
                        alt={`${card.title}-${index}`}
                        className="w-full h-full object-cover transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">
                    {card.title}
                  </h3>

                  <div className="flex items-center justify-between mt-1 mb-1">
                    <span className="text-lg font-bold text-blue-600">
                      ₹{card.price}{" "}
                      <span className="text-sm text-gray-500">/ person</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <FaBus className="text-sm" />
                    <span className="text-sm font-medium">{card.location}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t pt-3 mt-3">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">
                    Features:
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-600">
                    {card.features?.video && (
                      <Feature
                        icon={<GiVideoCamera className="text-blue-500" />}
                        label="Video"
                      />
                    )}
                    {card.features?.meals && (
                      <Feature
                        icon={<GiMeal className="text-green-500" />}
                        label="Meals"
                      />
                    )}
                    {card.features?.stay && (
                      <Feature
                        icon={<FaHotel className="text-purple-500" />}
                        label="Stay"
                      />
                    )}
                    {card.features?.sightseeing && (
                      <Feature
                        icon={<GiSightDisabled className="text-orange-500" />}
                        label="Tours"
                      />
                    )}
                    {card.features?.medical && (
                      <Feature
                        icon={<GiMedicalPackAlt className="text-red-500" />}
                        label="Medical"
                      />
                    )}
                    {card.features?.transport && (
                      <Feature
                        icon={<FaBus className="text-teal-500" />}
                        label="Transport"
                      />
                    )}
                  </div>
                </div>

                {/* Chat Button */}
                <div className="mt-5">
                  <button
                    onClick={() => sendInquiry(card)}
                    className="flex items-center justify-center w-full gap-2 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 text-sm sm:text-base"
                  >
                    <FaWhatsapp size={18} />
                    Chat
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
