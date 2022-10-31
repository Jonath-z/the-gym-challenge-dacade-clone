/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React from "react";

const near = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get NEAR Certified with NEAR Balkans and Dacade."
        />
        <title>NEAR Page</title>
      </Head>
      <section className="p-6 bg-white fixed top-0 left-0 right-0 w-full z-20">
        <div className="flex justify-between items-center lg:max-w-4xl lg:mx-auto xl:max-w-7xl xl:mx-auto">
          <div className="flex gap-2">
            <Link href="/near">
              <div className=" pr-2 md:flex md:items-center md:gap-2 lg:pr-5">
                <img
                  src="/images/NearFullLogo.png"
                  alt="near full logo"
                  className="h-[38px] w-[120px] object-cover hidden lg:block"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <h1 className="mt-96 text-center text-4xl font-bold">Near Page</h1>
    </>
  );
};

export default near;
