import "./styles/App.scss";
import ReservationPage from "./components/pages/ReservationPage";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
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
