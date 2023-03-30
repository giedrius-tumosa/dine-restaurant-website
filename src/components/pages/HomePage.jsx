import FooterGlobal from "../pageSections/footerGlobal/FooterGlobal";
import EventsSection from "../pageSections/eventsSection/EventsSection";
import ReadySection from "../pageSections/readySection/ReadySection";
import HighlightsSection from "../pageSections/highlightsSection/HighlightsSection";
import HomeHeroSection from "../pageSections/homeHeroSection/HomeHeroSection";
import FeaturesSection from "../pageSections/featuresSection/FeaturesSection";

const HomePage = () => {
  return (
    <>
      <div className="pageWrapper">
        <header></header>
        <main>
          <HomeHeroSection />
          <FeaturesSection />
          <HighlightsSection />
          <EventsSection />
          <ReadySection />
        </main>
        <FooterGlobal />
      </div>
    </>
  );
};

export default HomePage;
