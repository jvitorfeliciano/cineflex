import Globalstyle from "./Globostyle";
import infosPurchase from "./userPurchase";
import CatalogPage from "./CatalogPage";
import Header from "./Header";
import SchedulePage from "./SchedulePage";
import ChooseSeatPage from "./ChooseSeatPage";
import ConfirmPage from "./ConfirmPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

export default function App() {
const [objInfosPurchase, setObjInfosPurchase] = useState({})
console.log(infosPurchase)
  return (
    <BrowserRouter>
      <Globalstyle />
      <Header />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/sessoes/:idFilme" element={<SchedulePage infosPurchase={infosPurchase}/>} />
        <Route path="/assentos/:idSessao" element={<ChooseSeatPage infosPurchase={infosPurchase} setObjInfosPurchase={setObjInfosPurchase} />} />
        <Route path="/sucesso" element={<ConfirmPage objInfosPurchase={objInfosPurchase} />} />
      </Routes>
    </BrowserRouter>
  );
}
