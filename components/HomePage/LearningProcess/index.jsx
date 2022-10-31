/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";
import { FlexArrowLeft, FlexArrowRight } from "../../modules/vectors";
import TargetVector from "../../modules/vectors/TargetVector";
import Button from "../../modules/_modules/Button";

const LearningProcess = ({ onDispalayLayout }) => {
  return (
    <section className="px-5 relative lg:overflow-x-hidden" id="learning">
      <div className="grid mt-16 justify-items-center font-primary text-center text-primary text-dark-100 font-semibold text-[32px] lg:text-5xl leading-7 lg:leading-[60px] tracking-[-0.02em]">
        Making your NEAR
        <br />
        learning easy.
      </div>

      <div class="bg-gradien-logo h-[480px] w-full max-w-[480px] absolute z-0 right-0 blur-xl opacity-20 top-[100px] xl:top-[140px] -mr-10 xl:mr-96 hidden lg:block" />
      <div class="bg-gradient-logo-right h-[600px] w-full max-w-[490px] absolute z-0 left-0 blur-xl opacity-20 top-[800px] hidden lg:block -ml-56" />

      <div className="relative">
        <div className="flex flex-col-reverse justify-center items-center gap-y-5 lg:flex-row lg:justify-between lg:items-center lg:mt-28 relative lg:max-w-4xl lg:mx-auto">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="font-semibold text-primary font-primary text-2xl text-center lg:text-left lg:text-4xl leading-[44px] tracking-[-0.02em]">
              Open NEAR wallet
            </h1>
            <p className="text-center lg:text-start text-primary/80 font-primary text-base lg:text-lg lg:leading-6 pt-[6px]">
              Opening a NEAR wallet is the first step and
              <br />
              essential part of joining the NEAR community
              <br />
              as well as starting this course.
            </p>

            <div className="mt-10">
              <Link href="/create-wallet">
                <Button title={"Create wallet"} />
              </Link>
            </div>
          </div>
          <img
            src="/images/dacadeImage.png"
            alt="dacade image"
            className="mx-auto mt-10 lg:block w-[180px] h-[180px] lg:w-[296px] lg:h-[296px] object-cover lg:mx-0"
          />
        </div>

        <FlexArrowRight className="hidden lg:block mx-auto" />

        <div className="flex flex-col justify-center gap-5 items-center mt-10 lg:flex-row lg:justify-between lg:max-w-4xl lg:mx-auto">
          <TargetVector className="lg:mx-0 lg:w-[296px] lg:h-[296px] w-[180px] h-[180px]" />

          <div className="lg:mr-20">
            <h1 class="font-primary text-primary text-center lg:text-start font-semibold text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em]">
              Complete the course
            </h1>
            <p className="text-primary/70 text-base mt-2 lg:mt-7 text-center lg:text-start">
              In three simple modules, learn:
            </p>
            <div className="flex flex-col gap-5 mt-10">
              <div className="flex flex-col gap-2 justify-center items-center lg:flex-row lg:justify-start">
                <img
                  src="/images/courseModuleImage.png"
                  alt="course module image"
                  className="w-5 h-5 lg:w-8 lg:h-8"
                />

                <p className="text-primary/70 text-base">
                  Essential NEAR concepts
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center lg:flex-row lg:justify-start">
                <img
                  src="/images/courseConcept.png"
                  alt="course module image"
                  className="w-5 h-5 lg:w-8 lg:h-8"
                />
                <p className="text-primary/70">
                  How to write smart contracts on NEAR
                </p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center lg:flex-row lg:justify-start">
                <img
                  src="/images/dappOnNearImage.png"
                  alt="course module image"
                  className="w-5 h-5 mt-4 lg:mt-0 lg:w-8 lg:h-8"
                />
                <p className="text-primary/70">
                  How to build dapps on the NEAR blockchain
                </p>
              </div>
            </div>
          </div>
        </div>

        <FlexArrowLeft className="hidden lg:block mx-auto" />

        <div className="mt-16 lg:mt-7 lg:max-w-4xl lg:mx-auto">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-primary font-primary text-center font-semibold text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em]">
              Claim NEAR certificate
            </h1>

            <p className="text-hero-paragraph-color text-center font-primary">
              Upon course completion, receive the NEAR dev 101{" "}
              <br className="hidden lg:block" /> certificate as an NFT on your
              NEAR
              <br className="lg:hidden" /> wallet.
            </p>

            <div className="mt-5 lg:max-w-[644px] lg:mt-20">
              <img src="/images/nearCartificateImage.png" alt="certificate" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-40 lg:flex-row-reverse xl:justify-between lg:max-w-4xl lg:mx-auto xl:max-w-screen-2xl lg:gap-20 relative lg:pb-10 overflow-hidden">
          <img
            src="/images/nearSecondLogo.png"
            alt="near logo"
            className="w-[180px] h-[180px] lg:w-[370px] lg:h-[370px]"
          />
          <div class="bg-developement-bg w-full h-[300px] absolute z-0 bottom-0 xl:left-0  xl:-z-10 xl:-mb-32 hidden blur-2xl opacity-30 lg:block" />
          <div className="flex flex-col items-center xl:items-start">
            <h1 className="text-primary font-primary font-semibold text-2xl lg:text-4xl leading-[44px] tracking-[-0.02em]">
              NEAR Development <br className="hidden lg:block xl:hidden" /> 101
            </h1>

            <Button
              title={"Start the course"}
              onClick={onDispalayLayout}
              className="rounded-full px-5 py-2 font-primary border border-gray-200 text-primary text-base mt-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningProcess;
