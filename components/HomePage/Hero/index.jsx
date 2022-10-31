import Link from "next/link";
import React from "react";
import ArrowDownVector from "../../modules/vectors/ArrowDownVector";

const Hero = () => {
  return (
    <section className="text-center lg:w-[910px] mx-auto px-5 mt-40 h-[600px] flex flex-col justify-center items-center">
      <div className="">
        <h1 className="lg:text-[72px] lg:w-full w-[200px] mx-auto font-thin text-4xl text-primary font-primary-semi-bold lg:font-primary lg:font-semibold">
          Get
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-gradient-violet via-gradient-sky-blue to-gradient-gradient-magnatat px-2 lg:px-4">
            NEAR
          </span>
          <br className="lg:hidden" />
          Certified!
        </h1>
      </div>

      <p className="pt-5 pb-24 lg:text-[22px] text-lg text-hero-paragraph-color leading-[28px] text-center font-primary lg:mt-10">
        We, in NEAR Balkans, know how important it is to have regional and local
        support. Now you can become NEAR certified in a regional language of
        preference and connect with our team to support your further growth
        within the NEAR ecosystem.
      </p>

      <Link href="#learning">
        <ArrowDownVector />
      </Link>
    </section>
  );
};

export default Hero;
