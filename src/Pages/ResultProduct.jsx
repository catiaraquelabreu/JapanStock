import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SubHeader from "../Components/Layout/SubHeader/SubHeader";
import HeroSection from "../Components/Layout/Hero/HeroSection/HeroSection";
import MainResultProduct from "../Components/Layout/MainSection/MainResultProduct/MainResultProduct";
import { useMedia } from "../Components/Context/MediaContext";
import { useAltText } from "../Components/Context/AltTextContext";
function ResultProduct() {
  const titleProp = `alt text api`;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedImage = queryParams.get("selectedImage");
  const { selectedMediaAlt } = useMedia();
  const { selectedAltText } = useAltText();
  return (
    <div>
      <SubHeader />
      <HeroSection
        titleContent={selectedAltText || "Stunning Japanese Video"}
      />
      <MainResultProduct selectedImage={selectedImage} />
    </div>
  );
}

export default ResultProduct;
