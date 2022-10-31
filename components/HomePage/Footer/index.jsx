/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import DiscordVector from "../../modules/vectors/DiscordVector";
import FacebookVector from "../../modules/vectors/FacebookVector";
import InstagramVector from "../../modules/vectors/InstagramVector";
import LinkedInVector from "../../modules/vectors/LinkedInVector";
import MediumVector from "../../modules/vectors/MediumVector";
import TelegramVector from "../../modules/vectors/TelegramVector";
import TweeterVector from "../../modules/vectors/TweeterVector";

const Footer = () => {
  return (
    <section className="px-5 flex flex-col gap-10 py-20 bg-white lg:max-w-3xl lg:mx-auto xl:max-w-7xl xl:mx-auto">
      <div>
        <h6 class="text-center text-lg font-primary text-primary">
          Visit
          <Link href="https://nearbalkans.org/" target="_blank">
            <span class="font-bold cursor-pointer px-2">nearbalkans.org</span>
          </Link>
          and make sure to follow us on our social and community <br />{" "}
          channels!
        </h6>
      </div>

      <div className="lg:flex lg:items-center lg:justify-center">
        <Link href="/">
          <img
            src="/images/NearFullLogo.png"
            alt="near full logo"
            className="h-[38px] w-[120px] object-cover hidden lg:block border-r-2 border-gray-200"
          />
        </Link>
        <div className="flex justify-between items-center mt-20 lg:mt-0 lg:gap-10 lg:ml-4">
          <Link href="https://twitter.com/NEARbalkan" target="_blank">
            <TweeterVector />
          </Link>
          <Link href="https://discord.com/invite/NgSYSmJXg9" target="_blank">
            <DiscordVector />
          </Link>
          <Link href="https://t.me/nearbalkanshub" target="_blank">
            <TelegramVector />
          </Link>
          <Link href="https://www.facebook.com/nearbalkans" target="_blank">
            <FacebookVector />
          </Link>
          <Link
            href="https://www.linkedin.com/company/nearbalkans/"
            target="_blank"
          >
            <LinkedInVector />
          </Link>
          <Link href="https://www.instagram.com/nearbalkans/" target="_blank">
            <InstagramVector />
          </Link>
          <Link href="https://medium.com/@nearbalkans" target="_blank">
            <MediumVector />
          </Link>
        </div>
      </div>

      <ul className="flex flex-col justify-center items-center gap-1 text-lg text-primary font-primary lg:flex-row lg:gap-9">
        <li>
          <Link href="/">NEAR Balkans 2022</Link>
        </li>
        <li>
          <Link href="mailto:info@nearbalkans.org">info@nearbalkans.org</Link>
        </li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Terms & Conditions</li>
      </ul>

      <h6 className="text-center text-primary font-primary text-lg">
        NEAR Balkans Hub: Bosnia & Herzegovina, Bulgaria, Croatia, Montenegro,
        North Macedonia, Serbia, and Slovenia
      </h6>
    </section>
  );
};

export default Footer;
