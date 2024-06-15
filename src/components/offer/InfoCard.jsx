import React, { useEffect } from "react";

const InfoCard = ({ value }) => {
  const { image, text } = value;

  return (
    <div className="w-1/3 flex gap-8 p-4 px-6 flex-shrink-0 h-24 rounded-md bg-white">
      <img className="" srcSet={image} alt="" />
      <p className="text-sm" dangerouslySetInnerHTML={{ __html: text }}></p>
    </div>
  );
};

export default InfoCard;
