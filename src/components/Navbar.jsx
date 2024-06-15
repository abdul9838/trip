import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white w-full fixed top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="sm:ml-6">
              <div className="flex space-x-4">
                {[
                  "Flights",
                  "Hotels",
                  "Homestays & Villas",
                  "Holiday Packages",
                  "Trains",
                  "Buses",
                  "Cabs",
                  "Forex Card & Currency",
                  "Travel Insurance",
                  "One Way",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
