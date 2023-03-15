import FooterGlobal from "../pageSections/footerGlobal/FooterGlobal";
import EventsSection from "../pageSections/eventsSection/EventsSection";
import ReadySection from "../pageSections/readySection/ReadySection";

const HomePage = () => {
  return (
    <>
      <div className="pageWrapper">
        <header></header>
        <main>
          <EventsSection />
          <ReadySection />
        </main>
        <FooterGlobal />
      </div>
    </>
  );
};

export default HomePage;
