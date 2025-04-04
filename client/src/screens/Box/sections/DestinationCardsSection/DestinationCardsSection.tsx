// import React from "react";
// import { FaBus, FaHotel } from "react-icons/fa";
// import {
//   GiVideoCamera,
//   GiMeal,
//   GiSightDisabled,
//   GiMedicalPackAlt,
// } from "react-icons/gi";
// import { FiStar } from "react-icons/fi";
// import { CardType } from "../../types/card";

// interface Props {
//   cards: CardType[];
// }

// export const DestinationCardsSection: React.FC<Props> = ({ cards }) => {
//   return (
//     <main className="max-w-7xl mx-auto px-6 py-8">
//       <h2 className="font-bold text-[#333333] text-[40px] sm:text-[35px] leading-tight text-center mb3">
//         POPULAR DESTINATIONS
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cards.map((card) => (
//           <div
//             key={card._id}
//             className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 relative"
//           >
//             {card.popular && (
//               <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
//                 <FiStar className="text-white" />
//                 Popular
//               </div>
//             )}

//             <div className="relative aspect-video overflow-hidden rounded-t-2xl">
//               <img
//                 src={card.imageUrl}
//                 alt={card.title}
//                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
//             </div>

//             <div className="p-5">
//               <div className="mb-4">
//                 <h3 className="text-xl font-bold text-gray-800 mb-1">
//                   {card.title}
//                 </h3>
//                 <div className="flex items-center gap-2 text-blue-600">
//                   <FaBus className="text-sm" />
//                   <span className="text-sm font-medium">{card.location}</span>
//                 </div>
//               </div>

//               <div className="border-t pt-4">
//                 <h4 className="text-sm font-semibold text-gray-600 mb-2">
//                   Features:
//                 </h4>
//                 <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
//                   {card.features?.video && (
//                     <div className="flex items-center gap-2">
//                       <GiVideoCamera className="text-blue-500" />
//                       Video
//                     </div>
//                   )}
//                   {card.features?.meals && (
//                     <div className="flex items-center gap-2">
//                       <GiMeal className="text-green-500" />
//                       Meals
//                     </div>
//                   )}
//                   {card.features?.stay && (
//                     <div className="flex items-center gap-2">
//                       <FaHotel className="text-purple-500" />
//                       Stay
//                     </div>
//                   )}
//                   {card.features?.sightseeing && (
//                     <div className="flex items-center gap-2">
//                       <GiSightDisabled className="text-orange-500" />
//                       Tours
//                     </div>
//                   )}
//                   {card.features?.medical && (
//                     <div className="flex items-center gap-2">
//                       <GiMedicalPackAlt className="text-red-500" />
//                       Medical
//                     </div>
//                   )}
//                   {card.features?.transport && (
//                     <div className="flex items-center gap-2">
//                       <FaBus className="text-teal-500" />
//                       Transport
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

import React from "react";
import { FaBus, FaHotel } from "react-icons/fa";
import {
  GiVideoCamera,
  GiMeal,
  GiSightDisabled,
  GiMedicalPackAlt,
} from "react-icons/gi";
import { FiStar } from "react-icons/fi";
import { CardType } from "../../types/card";
import { FaWhatsapp } from "react-icons/fa";
import left_areoplane from "../../../../assets/images/our_destination_left_Areoplane.png";
import right_areoplane from "../../../../assets/images/our_destination_right_Areoplane.png";
interface Props {
  cards: CardType[];
}

export const DestinationCardsSection: React.FC<Props> = ({ cards }) => {
  const phoneNumber = 918885523545;
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* // <main className="max-w-full mx-auto px-6 py-8"> */}

      <div className="flex flex-row items-center justify-center gap-4">
        {/* Left Image - Visible only on XL screens */}
        <img
          src={left_areoplane}
          alt="Left Title Image"
          className="hidden xl:block scale-90 hover:scale-95 transition-all duration-300"
        />

        {/* Title & Subtitle */}
        <div className="text-center xl:text-start">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-2">
            Our Destinations
          </h2>
          <h3 className="text-xl sm:text-2xl text-center text-gray-700 mb-10">
            We Organize Your Trips!
          </h3>
        </div>

        {/* Right Image - Visible only on XL screens */}
        <img
          src={right_areoplane}
          alt="Right Title Image"
          className="hidden xl:block scale-90 hover:scale-95 transition-all duration-300"
        />
      </div>

      {/* <h2 className="text-6xl font-bold text-[#333333] sm:text-6xl mb-2 text-center">
        Our Destinations
      </h2>
      <h3 className="text-3xl text-gray-700 sm:text-3xl mb-10 text-center">
        We Organize Your Trips!
      </h3> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card._id}
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform duration-300 ease-out hover:scale-110 hover:duration-500 transition-all duration-300 relative"
          >
            {card.popular && (
              <div className="absolute top-4 right-4 bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 z-10">
                <FiStar className="text-white" />
                Popular
              </div>
            )}

            <div className="relative aspect-video overflow-hidden rounded-t-2xl">
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
            </div>

            <div className="p-5">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {card.title}
                </h3>
                <div className="flex items-center gap-2 text-blue-600">
                  <FaBus className="text-sm" />
                  <span className="text-sm font-medium">{card.location}</span>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-gray-600 mb-2">
                  Features:
                </h4>
                <div className="grid grid-cols-3 gap-2 text-sm text-gray-600">
                  {card.features?.video && (
                    <div className="flex items-center gap-2">
                      <GiVideoCamera className="text-blue-500" />
                      Video
                    </div>
                  )}
                  {card.features?.meals && (
                    <div className="flex items-center gap-2">
                      <GiMeal className="text-green-500" />
                      Meals
                    </div>
                  )}
                  {card.features?.stay && (
                    <div className="flex items-center gap-2">
                      <FaHotel className="text-purple-500" />
                      Stay
                    </div>
                  )}
                  {card.features?.sightseeing && (
                    <div className="flex items-center gap-2">
                      <GiSightDisabled className="text-orange-500" />
                      Tours
                    </div>
                  )}
                  {card.features?.medical && (
                    <div className="flex items-center gap-2">
                      <GiMedicalPackAlt className="text-red-500" />
                      Medical
                    </div>
                  )}
                  {card.features?.transport && (
                    <div className="flex items-center gap-2">
                      <FaBus className="text-teal-500" />
                      Transport
                    </div>
                  )}
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-6 flex justify-center items-center rounded">
                <a
                  href={`https://wa.me/${phoneNumber}?text=Hello!%20I'm%20interested%20in%20${encodeURIComponent(
                    card.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full gap-2 bg-blue-500 text-white px-3 py-2 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  <FaWhatsapp size={18} />
                  Chat with Us
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
