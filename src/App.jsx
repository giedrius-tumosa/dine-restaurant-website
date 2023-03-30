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
