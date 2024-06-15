import React from "react";

const OfferNav = ({ value, openTab, setOpenTab }) => {
  const activeTextColor = "text-sky-500";

  return (
    <li className="me-2">
      <button
        className={
          `px-2 flex items-center cursor-pointer leading-normal ` +
          (openTab === value.subtitle
            ? `${activeTextColor} border-b-2 border-sky-500 font-bold`
            : "")
        }
        onClick={() => setOpenTab(value.subtitle)}
      >
        {value.title}
      </button>
    </li>
  );
};

export default OfferNav;
