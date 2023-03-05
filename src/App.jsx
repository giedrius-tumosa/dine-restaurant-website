import "./styles/App.scss";
import FooterGlobal from "./components/pageSections/footerGlobal/FooterGlobal";
import EventsSection from "./components/pageSections/EventsSection";

function App() {
  return (
    <>
      <FooterGlobal />
    </>
  );
}

export default App;

//TODO: change pic source based on screen size - code below

/* <picture>
    <source media="(min-width: 1000px)" srcset="red.jpg">
    <source media="(min-width: 470px)" srcset="blue.jpg">
    <img src="green.jpg" alt="imagealttext">
</picture> */
