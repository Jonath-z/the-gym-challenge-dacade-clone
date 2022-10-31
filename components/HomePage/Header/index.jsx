/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import {
  DacadeLogoVectorMinified,
  NearLogoVectorMinified,
} from "../../modules/vectors";
import Button from "../../modules/_modules/Button";

const Header = ({ onDispalayLayout }) => {
  return (
    <section className="p-6 bg-white fixed top-0 left-0 right-0 w-full z-20">
      <div className="flex justify-between items-center lg:max-w-4xl lg:mx-auto xl:max-w-7xl xl:mx-auto">
        <div className="flex gap-2">
          <Link href="/dacade">
            <div className="border-r-2 border-gray-200 pr-2 md:flex md:items-center md:gap-2 lg:pr-5">
              <DacadeLogoVectorMinified />

              <span className="hidden md:block text-lg font-primary font-semibold text-primary">
                Dacade
              </span>
            </div>
          </Link>
          <Link href="/near">
            <NearLogoVectorMinified className="lg:hidden" />
            <img
              src="/images/NearFullLogo.png"
              alt="near full logo"
              className="h-[38px] w-[120px] object-cover hidden lg:block"
            />
          </Link>
        </div>

        <div className="lg:flex lg:justify-between lg:gap-14 lg:items-center">
          <p
            onClick={onDispalayLayout}
            className="hidden lg:block text-primary font-primary cursor-pointer"
          >
            Start The Course
          </p>
          <Link href="/create-wallet">
            <Button title={"Create Wallet"} fill={true} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
