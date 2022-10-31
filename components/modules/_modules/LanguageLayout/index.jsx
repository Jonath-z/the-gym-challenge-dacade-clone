import React from "react";
import {
  CroatiaFlagVector,
  ChevronRightVector,
  CrossVector,
  BulgarianFlagVector,
  EnglandFlagVector,
} from "../../vectors";

const LanguageLayout = ({ layoutDisplayed = false, onCloseLayout }) => {
  return (
    <section
      className={`${
        layoutDisplayed
          ? "bg-black/20 opacity-1 fixed top-0 left-0 bottom-0 right-0 w-full h-screen z-10 px-5 transition-opacity duration-500"
          : "opacity-0 transition-opacity duration-500 w-0 h-0 overflow-hidden"
      }`}
    >
      <div className="bg-white mt-44 rounded-2xl pb-5 lg:max-w-sm lg:mx-auto">
        <div className=" border-b border-b-gray-200">
          <div className="flex justify-between items-center py-5 px-5">
            <h6 className="font-semibold text-base">Choose Language</h6>

            <button onClick={onCloseLayout}>
              <CrossVector />
            </button>
          </div>
        </div>
        <ul className="flex flex-col gap-5 mt-5">
          <li className="mx-5 py-2 border rounded-xl border-gray-200 flex justify-between items-center px-4">
            <span className="flex gap-3 items-center font-primary">
              <CroatiaFlagVector />
              Croatian
            </span>
            <span className=" bg-gray-300 w-7 h-7 flex justify-center items-center rounded-full">
              <ChevronRightVector />
            </span>
          </li>
          <li className="mx-5 py-2 border rounded-xl border-gray-200 flex justify-between items-center px-4">
            <span className="flex gap-3 items-center font-primary">
              <BulgarianFlagVector />
              Bulgarian
            </span>
            <span className=" bg-gray-300 w-7 h-7 flex justify-center items-center rounded-full">
              <ChevronRightVector />
            </span>
          </li>
          <li className="mx-5 py-2 border rounded-xl border-gray-200 flex justify-between items-center px-4">
            <span className="flex gap-3 items-center font-primary">
              <EnglandFlagVector />
              English
            </span>
            <span className=" bg-gray-300 w-7 h-7 flex justify-center items-center rounded-full">
              <ChevronRightVector />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default LanguageLayout;
