import { useLocation } from "react-router-dom";
import SubHeader from "../Components/Layout/SubHeader/SubHeader";
import HeroSection from "../Components/Layout/Hero/HeroSection/HeroSection";
import MainResultProduct from "../Components/Layout/MainSection/MainResultProduct/MainResultProduct";
import { useAltText } from "../Components/Context/AltTextContext";

function ResultProduct() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedImage = queryParams.get("selectedImage");

  const { selectedAltText } = useAltText();
  return (
    <div>
      <SubHeader />
      <HeroSection
        titleContent={selectedAltText || "Stunning Japanese Content"}
      />
      <MainResultProduct selectedImage={selectedImage} />
    </div>
  );
}

export default ResultProduct;
