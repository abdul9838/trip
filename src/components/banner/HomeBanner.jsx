import React from "react";
import img1 from "../../assets/app-sprite1.jpg";
import img2 from "../../assets/app-sprite2.jpg";
import img3 from "../../assets/app-sprite3.jpg";

const HomeBanner = () => {
  return (
    <div className=" bg-white h-48 rounded-lg p-8">
      <div className="flex justify-between">
        <div className="flex gap-3 w-1/2">
          <div className="w-16">
            <img src={img1} alt="" srcset="" />
          </div>
          <div>
            <h1 className="font-bold text-2xl"> Download App Now!</h1>
            <p>
              Use code <strong>WELCOMEMMT</strong> and get{" "}
              <strong>FLAT 12%</strong> OFF* on your first domestic flight
              booking
            </p>
            <form className="flex items-center justify-between rounded-s-md rounded-e-md  mt-2 border border-gray-500 bg-white">
              {/* Country Select */}
              <div className="flex items-center space-x-2 px-2 ">
                <img
                  src="data:image/png;base64,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"
                  alt="Country Flag"
                  className="w-6 h-6 rounded-full"
                />
                <select className="p-2">
                  <option value="IN">India</option>
                  <option value="UK">UK</option>
                </select>
              </div>

              {/* Phone Number Input */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-2 flex-grow border-none focus:outline-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="px-4 py-2 h-full border-2 font-bold border-blue-500 rounded-e-md text-blue-500"
              >
                Get App Link
              </button>
            </form>
          </div>
        </div>

        <div className="flex w-1/3 ">
          <div className="w-36">
            <img cla src={img2} alt="" srcset="" />
          </div>
          <div className="w-24">
            <img cla src={img3} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
