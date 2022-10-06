import Globalstyle from "./Globostyle";
import infos from "./userPurchase";
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
        <Route path="/sessoes/:idFilme" element={<SchedulePage infos={infos}/>} />
        <Route path="/assentos/:idSessao" element={<ChooseSeatPage infos={infos}/>} />
        <Route path="/sucsess" element={<ConfirmPage />} />
      </Routes>
    </BrowserRouter>
  );
}
