import React from "react";
import HeroSection from "./components/HeroSection";
import { Services } from "./components/Services.JSX";
import Trusted from "./components/Trusted";

const Home = () => {
  return (
    <div>
      <HeroSection>Abdul E-commerce</HeroSection>
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
