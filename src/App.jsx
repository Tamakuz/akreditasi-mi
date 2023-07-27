import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import DocAkreditasi from "./Pages/DocAkreditasi";
import InformasiDosen from "./Pages/InformasiDosen";
import InfoemasiMahasiswa from "./Pages/InformasiMahasiswa";
import { useContext, useEffect } from "react";
import { GlobalState } from "./Context/Context";
import InputData from "./Pages/InputData";
import ProfilJurusan from "./Pages/ProfilJurusan";
import Kurikulum from "./Pages/Kurikulum";
import RencanaPembangunan from "./Pages/RencanaPembangunan";
import Jadwal from "./Pages/Jadwal";
import SaranaPrasaranaDoc from "./Pages/SaranaPrasaranaDoc";
import SaranaPrasaranaImage from "./Pages/SaranaPrasaranaImage";
import KaryaMahasiswa from "./Pages/KaryaMahasiswa";

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
        <Route path="/" element={<Home />} />
        <Route
          path="/dokumentasi-jurusan/profil-jurusan"
          element={<ProfilJurusan />}
        />
        <Route
          path="/dokumentasi-jurusan/kurikulum"
          element={<Kurikulum />}
        />
        <Route
          path="/dokumentasi-jurusan/rencana-pembangunan"
          element={<RencanaPembangunan />}
        />
        <Route
          path="/dokumentasi-jurusan/jadwal"
          element={<Jadwal />}
        />
        <Route
          path="/dokumentasi-jurusan/sarana-prasarana"
          element={<SaranaPrasaranaDoc />}
        />
        <Route
          path="/dokumentasi-jurusan/karya-mahasiswa"
          element={<KaryaMahasiswa />}
        />
        <Route path="/pendukung-akreditasi" element={<DocAkreditasi />} />
        <Route
          path="/sarana-prasarana"
          element={<SaranaPrasaranaImage />}
        />
        <Route path="/informasi-dosen" element={<InformasiDosen />} />
        <Route path="/informasi-mahasiswa" element={<InfoemasiMahasiswa />} />
        <Route path="/input-data" element={<InputData />} />
      </Routes>
    </BrowserRouter>
  );
};       

export default App;
