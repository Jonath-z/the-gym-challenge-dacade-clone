import React, { useState } from "react";
import LanguageLayout from "../modules/_modules/LanguageLayout";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import LearningProcess from "./LearningProcess";

const HomePage = () => {
  const [layoutDisplayed, setLayoutDisplayed] = useState(false);

  const onDispalayLayout = () => {
    setLayoutDisplayed(true);
  };

  const onCloseLayout = () => {
    setLayoutDisplayed(false);
  };

  return (
    <section className="relative">
      <div className="bg-hero-bg w-[50%] h-80 absolute -top-[70px] left-0 opacity-30 lg:hidden"></div>
      <div className="bg-hero-bg w-[40%] h-80 absolute -top-[70px] right-0 opacity-30 lg:hidden"></div>
      <Header onDispalayLayout={onDispalayLayout} />

      <LanguageLayout
        layoutDisplayed={layoutDisplayed}
        onCloseLayout={onCloseLayout}
      />
      <Hero />
      <LearningProcess onDispalayLayout={onDispalayLayout} />
      <Footer />
    </section>
  );
};

export default HomePage;
