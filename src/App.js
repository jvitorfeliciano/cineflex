import Globalstyle from "./Globostyle";
import Catalog from "./Catalog";
import Header from "./Header";
import Schedule from "./Schedule";
import ChooseSeat from "./ChooseSeat";
import Confirm from "./Confirm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      <Header />
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/movie/:movieid" element={<Schedule />} />
        <Route path="/section/:sectionid" element={<ChooseSeat />} />
        <Route path="/sucsess" element={<Confirm />} />
      </Routes>
    </BrowserRouter>
  );
}
