import React from "react";

const Explore = ({ value }) => {
  return (
    <div
      className={`flex items-center p-2 ${
        value.index !== "last" ? "border-r" : ""
      }  `}
    >
      <div className="w-10 h-10 flex-shrink-0">
        <img
          className="w-full h-full object-cover rounded-full"
          src={value.image}
          alt={value.text}
        />
      </div>
      <div className="ml-4 text-[10px]">
        <div className="font-semibold  text-gray-800">{value.text}</div>
        {value?.subtext && <span> {value?.subtext}</span>}
      </div>
    </div>
  );
};

export default Explore;
