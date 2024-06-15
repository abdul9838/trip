import React from "react";

const OfferCard = () => {
  return (
    <div className="p-4 me-4 max-w-md overflow-hidden bg-white rounded-lg drop-shadow border">
      <div className="flex">
        <div className="w-1/3 aspect-square">
          <img
            className="rounded-md object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
        </div>
        <div className="w-2/3 ps-3 ">
          <div className="flex justify-between">
            <span>INTL FLIGHT</span>
            <span>T&C'S APPLY</span>
          </div>
          <p className="font-bold">
            <span className="border-b border-red-600 pb-1">LIVE</span> NOW:Deals
            for Students
          </p>
          <p className="mt-2 text-sm">
            FLAT 10% OFF* on International Flight & More.
          </p>
        </div>
      </div>
      <div className="text-end my-1">
        <button className="text-sm uppercase text-sky-500 font-semibold">
          explore now
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
