import Globalstyle from "./Globostyle";
import infosPurchase from "./userPurchase";
import CatalogPage from "./CatalogPage";
import Header from "./Header";
import SchedulePage from "./SchedulePage";
import ChooseSeatPage from "./ChooseSeatPage";
import ConfirmPage from "./ConfirmPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      <Header />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/sessoes/:idFilme" element={<SchedulePage />} />
        <Route
          path="/assentos/:idSessao"
          element={<ChooseSeatPage infosPurchase={infosPurchase} />}
        />
        <Route path="/sucesso" element={<ConfirmPage />} />
      </Routes>
    </BrowserRouter>
  );
}
