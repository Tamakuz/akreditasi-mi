import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DocJurusan from "./Pages/DocJurusan";
import DocAkreditasi from "./Pages/DocAkreditasi";
import SaranaPrasarana from "./Pages/SaranaPrasarana";
import InformasiDosen from "./Pages/InformasiDosen";
import InfoemasiMahasiswa from "./Pages/InformasiMahasiswa";
import { useContext, useEffect } from "react";
import { GlobalState } from "./Context/Context";
import InputData from "./Pages/InputData";

const App = () => {
  const {globalState} = useContext(GlobalState)

  useEffect(() => {
    const metaData = () => {
      document.title = globalState.page
    }

    metaData()
  },[globalState])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dokumentasi-jurusan" element={<DocJurusan />} />
        <Route path="/pendukung-akreditasi" element={<DocAkreditasi />} />
        <Route path="/sarana-prasarana" element={<SaranaPrasarana />} />
        <Route path="/informasi-dosen" element={<InformasiDosen />} />
        <Route path="/informasi-mahasiswa" element={<InfoemasiMahasiswa />} />
        <Route path="/input-data" element={<InputData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
