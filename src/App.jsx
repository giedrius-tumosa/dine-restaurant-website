import "./styles/App.scss";
import ReservationPage from "./components/pages/ReservationPage";

function App() {
  return (
    <>
      <ReservationPage />
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
