import "./home.css";
import { useState } from "react";
import Saving from "./../../components/Saving";
import OfferSection from "../../components/offer/OfferSection";
import { ArrowRightLeft, ChevronsDown } from "lucide-react";
import InfoCorousel from "./../../components/offer/InfoCorousel";
import HomeBanner from "../../components/banner/HomeBanner";
import Explore from "../../components/offer/Explore";
import InfoSection from "./../../components/infosection/InfoSection";
import Why from "../../components/infosection/Why";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
  const activeBgColor = "bg-sky-100";
  const inactiveBgColor = "bg-white";
  const activeTextColor = "text-black";
  const inactiveTextColor = "text-black";
  const [openTab, setOpenTab] = useState(1);
  const [saving, setSaving] = useState(1);

  const savings = [
    { id: 1, type: "Regular", subtype: "Regular fares" },
    { id: 2, type: "Student", subtype: "Extra discounts/baggage" },
    { id: 3, type: "Senior Citizen", subtype: "up to ₹600 off" },
    { id: 4, type: "Armed Forces", subtype: "up to ₹600 off" },
    { id: 5, type: "Doctor and Nurses", subtype: "up to ₹600 off" },
  ];

  const explore = [
    {
      image:
        "https://promos.makemytrip.com/appfest/2x/icon-wheretogo-23062022.png",
      text: "Where2Go",
    },
    {
      image: "https://promos.makemytrip.com/appfest/2x/trip-money-1.png",
      text: "Insurance",
      subtext: "For International Trips",
    },
    {
      image:
        "https://promos.makemytrip.com/Growth/Images/B2C/2x/dt_tert_flights.png",
      text: "Explore International Flights",
      subtext: "Cheapest Flights to Paris, Bali, Tokyo & more",
    },
    {
      image:
        "https://promos.makemytrip.com/images/myBiz/MICE/mice%20icon%20-%20square.png",
      text: "MICE",
      subtext: "Offsites, Events & Meetings",
    },
    {
      image: "https://promos.makemytrip.com/appfest/2x/gift%20card%201.png",
      text: "Gift Cards",
      index: "last",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-cover  flex flex-col gap-5 image pt-20">
        <div className="w-[84%] mx-auto relative rounded-lg p-10 bg-white my-6 ">
          <div className="flex  flex-wrap ">
            <div className="w-full">
              <div className="flex justify-between ">
                <div className="flex gap-4">
                  <div
                    className={`text-xs uppercase px-2 rounded-full flex items-center cursor-pointer leading-normal ${
                      openTab === 1
                        ? `${activeTextColor} ${activeBgColor} font-bold`
                        : `${inactiveTextColor} ${inactiveBgColor}`
                    }`}
                    onClick={() => setOpenTab(1)}
                    role="tablist"
                  >
                    <input
                      type="radio"
                      name="way"
                      id="oneway"
                      className="cursor-pointer"
                      checked={openTab === 1}
                      onChange={() => setOpenTab(1)} // Add onChange handler
                    />
                    <label htmlFor="oneway" className="cursor-pointer">
                      &nbsp; One Way
                    </label>
                  </div>
                  <div
                    className={`text-xs uppercase px-2 rounded-full flex items-center cursor-pointer leading-normal ${
                      openTab === 2
                        ? `${activeTextColor} ${activeBgColor} font-bold`
                        : `${inactiveTextColor} ${inactiveBgColor}`
                    }`}
                    onClick={() => setOpenTab(2)}
                    role="tablist"
                  >
                    <input
                      type="radio"
                      name="way"
                      id="roundtrip"
                      className="cursor-pointer"
                      checked={openTab === 2}
                      onChange={() => setOpenTab(2)} // Add onChange handler
                    />
                    <label htmlFor="roundtrip" className="cursor-pointer">
                      &nbsp; Round Trip
                    </label>
                  </div>
                  <div
                    className={`text-xs uppercase px-2 rounded-full flex items-center cursor-pointer leading-normal ${
                      openTab === 3
                        ? `${activeTextColor} ${activeBgColor} font-bold`
                        : `${inactiveTextColor} ${inactiveBgColor}`
                    }`}
                    onClick={() => setOpenTab(3)}
                    role="tablist"
                  >
                    <input
                      type="radio"
                      name="way"
                      id="multicity"
                      className="cursor-pointer"
                      checked={openTab === 3}
                      onChange={() => setOpenTab(3)}
                    />
                    <label htmlFor="multicity" className="cursor-pointer">
                      &nbsp; Multi City
                    </label>
                  </div>
                </div>{" "}
                <p>Book International and Domestic Flights</p>
              </div>

              {openTab === 1 && (
                <div className=" border flex w-full mt-4 overflow-hidden rounded-lg">
                  <div className="w-[50vw] flex relative">
                    <div className="transition duration-300 ease-in-out hover:bg-sky-100 py-3 px-4">
                      <p>From</p>
                      <h1 className="text-3xl font-bold">Mumbai</h1>
                      <p>
                        BOM, Chhatrapati Shivaji International Airport India
                      </p>
                    </div>
                    <button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ps-[10px] shadow-md shadow-black bg-white text-center rounded-full w-10 h-10 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3657ba"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-arrow-right-left"
                      >
                        <path d="m16 3 4 4-4 4" />
                        <path d="M20 7H4" />
                        <path d="m8 21-4-4 4-4" />
                        <path d="M4 17h16" />
                      </svg>
                    </button>
                    <div className="border-s py-3 transition duration-300 ease-in-out hover:bg-sky-100">
                      <div className="ps-10">
                        <p>To</p>
                        <h1 className="text-3xl font-bold">Mumbai</h1>
                        <p>
                          BOM, Chhatrapati Shivaji International Airport India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50vw] flex">
                    <div className="flex ">
                      <div className="border-s py-3 px-6 transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>Departure</p>
                        <h1>
                          <span className="text-3xl font-bold">8</span>
                          <span className="ms-2 me-4 text-xl">Jun'24</span>
                        </h1>
                        <p>Saturday</p>
                      </div>
                      <div className="py-3 px-4 border-s transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>Return</p>
                        <p className="mt-2 font-bold text-sm text-gray-500 w-[8vw]">
                          Tap to add return date for bigger discount
                        </p>
                      </div>
                    </div>

                    <div className="py-3 px-4 border-s transition duration-300 ease-in-out hover:bg-sky-100">
                      <p>Travellers & Class</p>
                      <h1 className="font-bold">
                        <span className="text-3xl">1</span>
                        <span className="text-2xl">Traveller</span>
                      </h1>
                      <p>Economy/Premium Economy</p>
                    </div>
                  </div>
                </div>
              )}

              {openTab === 2 && (
                <div className=" border flex w-full mt-4 rounded-lg">
                  <div className="w-[50vw] flex relative">
                    <div className="transition duration-300 ease-in-out hover:bg-sky-100 py-3 px-4">
                      <p>From</p>
                      <h1 className="text-3xl font-bold">Mumbai</h1>
                      <p>
                        BOM, Chhatrapati Shivaji International Airport India
                      </p>
                    </div>
                    <button className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ps-[10px] shadow-md shadow-black bg-white text-center rounded-full w-10 h-10 ">
                      <ArrowRightLeft
                        size={20}
                        color="#3657ba"
                        strokeWidth={1}
                      />
                    </button>
                    <div className="border-s py-3 transition duration-300 ease-in-out hover:bg-sky-100">
                      <div className="ps-10">
                        <p>To</p>
                        <h1 className="text-3xl font-bold">Mumbai</h1>
                        <p>
                          BOM, Chhatrapati Shivaji International Airport India
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[50vw] flex">
                    <div className="flex justify-between ">
                      <div className="border-s py-3 px-6 transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>Departure</p>
                        <h1>
                          <span className="text-3xl font-bold">8</span>
                          <span className="ms-2 me-4 text-xl">Jun'24</span>
                        </h1>
                        <p>Saturday</p>
                      </div>
                      <div className="border-s  py-3 px-6 transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>Departure</p>
                        <h1>
                          <span className="text-3xl font-bold">8</span>
                          <span className="ms-2 me-4 text-xl">Jun'24</span>
                        </h1>
                        <p>Saturday</p>
                      </div>
                    </div>

                    <div className="py-3 px-4 border-s transition duration-300 ease-in-out hover:bg-sky-100">
                      <p>Travellers & Class</p>
                      <h1 className=" font-bold">
                        <span className="text-3xl">1</span>
                        <span className="text-2xl">Traveller</span>
                      </h1>
                      <p>Economy/Premium Economy</p>
                    </div>
                  </div>
                </div>
              )}

              {openTab === 3 && (
                <>
                  <div className=" border flex w-full mt-4 rounded-lg">
                    <div className="w-[50vw] flex ">
                      <div className="py-3 px-4 transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>From</p>
                        <h1 className="text-3xl  font-bold">Mumbai</h1>
                        <p>
                          BOM, Chhatrapati Shivaji International Airport India
                        </p>
                      </div>
                      <div className="border-s py-3 px-4 transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>To</p>
                        <h1 className="text-3xl font-bold">Mumbai</h1>
                        <p>
                          BOM, Chhatrapati Shivaji International Airport India
                        </p>
                      </div>
                    </div>

                    <div className="w-[50vw] flex">
                      <div className="border-s py-3 px-6 transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>Departure</p>
                        <h1>
                          <span className="text-3xl font-bold">8</span>
                          <span className="ms-2 me-4 text-xl">Jun'24</span>
                        </h1>
                        <p>Saturday</p>
                      </div>
                      <div className="py-3 px-4 border-s transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>Travellers & Class</p>
                        <h1 className=" font-bold">
                          <span className="text-3xl">1</span>
                          <span className="text-2xl">Traveller</span>
                        </h1>
                        <p>Economy/Premium Economy</p>
                      </div>
                    </div>
                  </div>
                  <div className=" border flex w-full mt-4 rounded-lg">
                    <div className="w-[50vw] flex ">
                      <div className="py-3 px-4 transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>From</p>
                        <h1 className="text-3xl  font-bold">Mumbai</h1>
                        <p>
                          BOM, Chhatrapati Shivaji International Airport India
                        </p>
                      </div>
                      <div className="border-s py-3 px-4 transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>To</p>
                        <h1 className="text-3xl font-bold">Mumbai</h1>
                        <p>
                          BOM, Chhatrapati Shivaji International Airport India
                        </p>
                      </div>
                    </div>

                    <div className="w-[50vw] flex">
                      <div className="border-s py-3 px-6 transition duration-300 ease-in-out hover:bg-sky-100">
                        <p>Departure</p>
                        <h1>
                          <span className="text-3xl font-bold">8</span>
                          <span className="ms-2 me-4 text-xl">Jun'24</span>
                        </h1>
                        <p>Saturday</p>
                      </div>
                      <div className="py-3 px-4 border-s flex justify-center items-center transition">
                        <span className="border border-blue-400 text-blue-400 pb-2 pt-1 shadow-lg  rounded-lg px-4 font-bold">
                          + ADD ANOTHER CITY
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="flex justify-center gap-6 item-center mt-4">
              <div>
                <h2 className="text-sm font-bold">Select a special fare</h2>
                <button className="bg-gradient-to-r from-[#43E0A8] to-[#229594] font-bold rounded-lg px-2  text-white ">
                  EXTRA SAVINGS
                </button>
              </div>
              <div className="flex gap-4">
                {savings.map((item) => (
                  <Saving
                    key={item.id}
                    value={{
                      type: item.type,
                      id: item.id,
                      subtype: item.subtype,
                      setSaving,
                      saving,
                    }}
                  ></Saving>
                ))}
              </div>
            </div>
          </div>
          <button className=" absolute text-2xl font-semibold -bottom-10 text-white left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full px-16 py-1">
            SEARCH
          </button>
        </div>
        <span className="text-sm font-semibold  text-white pb-10 items-center justify-center flex  ">
          {" "}
          <ChevronsDown size={20} strokeWidth={2} /> Explore More{" "}
          <ChevronsDown size={20} strokeWidth={2} />
        </span>
      </div>
      <div className="relative">
        <div className="w-[84%] mt-10 mx-auto flex flex-col gap-5">
          <div className="flex absolute w-[60vw] justify-between  rounded-full bg-white -top-10 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {explore.map((item, i) => (
              <Explore key={i} value={item} />
            ))}
          </div>
          <OfferSection />
          <InfoCorousel />
          <HomeBanner />
          <InfoSection />
        </div>
        <Why />
        <Footer />
      </div>
    </>
  );
};

export default Home;
