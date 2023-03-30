import "./styles/App.scss";
import ReservationPage from "./components/pages/ReservationPage";
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/dine-restaurant-website" element={<HomePage />} />
        <Route path="/dine-restaurant-website/reservation" element={<ReservationPage />} />
      </Routes>
    </>
  );
}

export default App;
