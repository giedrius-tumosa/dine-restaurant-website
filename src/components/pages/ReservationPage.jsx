import ReservationFormSection from "../pageSections/reservationFormSection/ReservationFormSection";
import ReservationHero from "../pageSections/reservationHero/ReservationHero";
import FooterGlobal from "../pageSections/footerGlobal/FooterGlobal";

const ReservationPage = () => {
  return (
    <div className="pageWrapper">
      <ReservationHero />
      <ReservationFormSection />
      <FooterGlobal />
    </div>
  );
};

export default ReservationPage;
