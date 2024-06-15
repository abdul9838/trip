import { useState } from "react";
import OfferNav from "./OfferNav";
import OfferCard from "./OfferCard";

const OfferSection = () => {
  const [openTab, setOpenTab] = useState("alloffer");
  const offerNavValue = [
    { id: 1, title: "All Offers", subtitle: "alloffer" },
    { id: 2, title: "Flights", subtitle: "flights" },
    { id: 3, title: "Hotels", subtitle: "hotels" },
    { id: 4, title: "Holidays", subtitle: "holidays" },
    { id: 5, title: "Trains", subtitle: "trains" },
    { id: 6, title: "Cabs", subtitle: "cabs" },
    { id: 7, title: "Bus", subtitle: "bus" },
  ];

  return (
    <div className=" bg-white rounded-lg p-10">
      <div className="font-medium text-center flex items-center gap-10 text-gray-600">
        <h1 className="text-3xl font-bold">Offers</h1>
        <ul className="flex gap-3 flex-wrap offer -mb-px border-b">
          {offerNavValue.map((value) => (
            <OfferNav
              key={value.id}
              value={value}
              setOpenTab={setOpenTab}
              openTab={openTab}
            />
          ))}
        </ul>
      </div>
      <div className="flex overflow-hidden flex-wrap gap-3 p-4">
        {openTab === "alloffer" && (
          <>
            <OfferCard />
            <OfferCard />
            <OfferCard />
          </>
        )}
        {openTab === "flights" && (
          <>
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
          </>
        )}
        {openTab === "hotels" && (
          <>
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
          </>
        )}
        {openTab === "holidays" && (
          <>
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
          </>
        )}
        {openTab === "trains" && (
          <>
            <OfferCard />
            <OfferCard />
          </>
        )}
        {openTab === "cabs" && (
          <>
            <OfferCard />
            <OfferCard />
            <OfferCard />
            <OfferCard />
          </>
        )}
        {openTab === "bus" && (
          <>
            <OfferCard />
          </>
        )}
      </div>
    </div>
  );
};

export default OfferSection;
