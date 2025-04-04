
import React, { useEffect, useState } from "react";
import { DestinationCardsSection } from "./sections/DestinationCardsSection/DestinationCardsSection";
// import { HeaderSection } from "./sections/HeaderSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";

import { NewsletterSection } from "./sections/NewsletterSection";

import { Footer } from "./sections/Footer/Fotter";
// import { AllTripHeading } from "./sections/AllTripHeading/AllTripHeading";
import { WhyChooseUs } from "./sections/WhyChoosenUs";
import { PopularDestination } from "./sections/PopularDestination/PopularDestination";
import { Navbar } from "./sections/Navbar";

import TestimonialCard from "./sections/Testimonials/Testimonials"

// import { FaqCard } from ".sections/Faq/FaqCard.tsx"



import api from "../../api";
import FaqCard from "./sections/Faq/FaqCard";

interface Card {
  _id: string;
  title: string;
  location: string;
  imageUrl: string;
  features: {
    [key: string]: boolean;
  };
  popular: boolean;
}

export const Box = (): JSX.Element => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await api.get("/cards");
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };
    fetchCards();
  }, []);
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* Header Section */}
        <Navbar />


        <div className="flex flex-col lg:flex-row w-full">

            <HeroSection />

          
        </div>


        {/* <div className="w-full relative px-4 md:px-8 lg:px-16">

            <div className="w-full lg:w-2/3">
            </div>

        </div> */}
              <PopularDestination cards={cards}/>

        {/* Why Choose Us Section */}
        <div className="w-full relative px-4 md:px-8 lg:px-16">
          <WhyChooseUs />
        </div>

        {/* Destination Cards Section */}

        <DestinationCardsSection cards={cards}/>

        {/* Newsletter Section */}

        <TestimonialCard />


        <NewsletterSection />
        
        <FaqCard />

        {/* Main Content Section */}
        <div className="m-24">
        <Footer />

        </div>
      </div>
    </div>
  );
};
