/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { DacadeLogoVectorMinified } from "../components/modules/vectors";

const dacade = () => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Get NEAR Certified with NEAR Balkans and Dacade."
        />
        <title>Dacade Page</title>
      </Head>
      <section className="p-6 bg-white fixed top-0 left-0 right-0 w-full z-20">
        <div className="flex justify-between items-center lg:max-w-4xl lg:mx-auto xl:max-w-7xl xl:mx-auto">
          <div className="flex gap-2">
            <Link href="/dacade">
              <div className=" pr-2 md:flex md:items-center md:gap-2 lg:pr-5">
                <DacadeLogoVectorMinified />

                <span className="hidden md:block text-lg font-primary font-semibold text-primary">
                  Dacade
                </span>
              </div>
            </Link>
          </div>

          <div className="lg:flex lg:justify-between lg:gap-14 lg:items-center">
            <p>Login</p>
            <p>Signup</p>
          </div>
        </div>
      </section>

      <h1 className="mt-96 text-center text-4xl font-bold">Dacade Page</h1>
    </>
  );
};

export default dacade;
