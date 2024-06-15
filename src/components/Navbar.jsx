import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md fixed w-full z-50">
      <div className="px-4 flex justify-center items-center">
        <nav className="flex items-center justify-between flex-wrap py-4">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <a href="#">
              <img
                src="https://get2trip.com/logo1.png"
                alt="logo"
                className="h-10 w-auto"
              />
            </a>
          </div>
          <div className="block lg:hidden">
            <button
              className="navbar-toggler flex items-center px-3 py-2 border rounded text-blue-500 border-blue-500 hover:text-blue-700 hover:border-blue-700"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              {[
                { name: "Home", href: "#" },
                { name: "Flight", href: "#" },
                { name: "Hotel", href: "#" },
                { name: "Visa", href: "#" },
                { name: "Holidays", href: "#" },
                { name: "Umrah", href: "#" },
                { name: "Hajj", href: "#" },
                { name: "About", href: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block mt-4 lg:inline-block lg:mt-0 text-blue-500 hover:text-blue-700 px-4 py-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
