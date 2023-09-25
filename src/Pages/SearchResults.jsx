import React from "react";
import { useLocation } from "react-router-dom";
import SubHeader from "../Components/Layout/SubHeader/SubHeader";
import MainSearchResults from "../Components/Layout/MainSection/MainSearchResults/MainSearchResults";
import LinksSection from "../Components/Layout/LinksSection/LinksSection";
import HeroSection from "../Components/Layout/Hero/HeroSection/HeroSection";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");
  const category = queryParams.get("category");

  const titleProp = searchQuery
    ? `You’ve searched for: ${searchQuery}`
    : "Japanese City";

  return (
    <div>
      <SubHeader />
      <HeroSection titleContent={titleProp} />
      <MainSearchResults />
      <LinksSection />
    </div>
  );
}

export default SearchResults;
