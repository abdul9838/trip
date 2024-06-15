import React, { useState } from "react";
import InfoCard from "./InfoCard";

const InfoCorousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex % totalSlides);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
  };

  const infoCardData = [
    {
      id: 1,
      image:
        "https://promos.makemytrip.com/Growth/Images/B2C/Uncompressed/Artboard_travRep.png",
      text: "Check out our Indian Travel Trends Report. Our trends report 2023-24 is out now. Read on for top travel insights.",
    },
    {
      id: 2,
      image:
        "https://promos.makemytrip.com/Growth/Images/B2C/xhdpi/ic_whatsnew_flight.png",
      text: "Book Flights with Voice Chat!<br/> Code: <b>MMTMYRA</b> will be auto-applied for EXTRA discounts!",
    },
    {
      id: 3,
      image:
        "https://promos.makemytrip.com/images/CDN_upload/indiannessapphome2.png",
      text: "Finding Indian Food just got easier! Use newly launched filters to find Indian food during International travel",
    },
    {
      id: 4,
      image:
        "https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png",
      text: "Finding Indian Food just got easier! Use newly launched filters to find Indian food during International travel",
    },
    {
      id: 6,
      image:
        "https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png",
      text: "Finding Indian Food just got easier! Use newly launched filters to find Indian food during International travel",
    },
    {
      id: 5,
      image:
        "https://promos.makemytrip.com/notification/xhdpi/Vande-Flight-10072020.png",
      text: "Finding Indian Food just got easier! Use newly launched filters to find Indian food during International travel",
    },
  ];
  const totalSlides = infoCardData.length - 2;

  return (
    <div className=" relative overflow-hidden">
      <div
        className="flex gap-1 transition-transform duration-500"
        style={{ transform: `translateX(-${(currentSlide * 100) / 3}%)` }}
      >
        {infoCardData.map((value) => (
          <InfoCard key={value.id} value={value} />
        ))}
      </div>

      <div className="absolute inset-0 flex justify-between items-center">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-gray-800 text-white "
        >
          ❮
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-gray-800 text-white"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default InfoCorousel;
