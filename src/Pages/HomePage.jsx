import Hero from "../Components/Layout/Hero/HeroHomePage/Hero";
import LinksSection from "../Components/Layout/LinksSection/LinksSection";

import MainSection from "../Components/Layout/MainSection/MainHomePage/MainSection";

function HomePage() {
  return (
    <div>
      <Hero />
      <MainSection />
      <LinksSection />
    </div>
  );
}

export default HomePage;
