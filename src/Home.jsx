import React from "react";
import HeroSection from "./components/HeroSection";
import { Services } from "./components/Services.JSX";
import Trusted from "./components/Trusted";
import { FeatureProducts } from "./components/FeatureProducts";

const Home = () => {
  return (
    <div>
      <HeroSection>Abdul E-commerce</HeroSection>
      <FeatureProducts />
      <Services />
      <Trusted />
    </div>
  );
};

export default Home;
