import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Led from "./Pages/DocAkreditasi/Led";
import Lkps from "./Pages/DocAkreditasi/Lkps";
import InformasiDosen from "./Pages/InformasiDosen";
import InformasiMahasiswa from "./Pages/InformasiMahasiswa";
import { useContext, useEffect, useState } from "react";
import { GlobalState } from "./Context/Context";
import Kai from "./Pages/DockMahasiswa/Kai";
import Hmj from "./Pages/DockMahasiswa/Hmj";
import Magang from "./Pages/DockMahasiswa/Magang";
import Makrab from "./Pages/DockMahasiswa/Makrab";
import Seminar from "./Pages/DockMahasiswa/Seminar";
import Sosialisasi from "./Pages/DockMahasiswa/Sosialisasi";
import Webinar from "./Pages/DockMahasiswa/Webinar";
import ProfilJurusan from "./Pages/DocJurusan/ProfilJurusan";
import Kurikulum from "./Pages/DocJurusan/Kurikulum";
import Jadwal from "./Pages/DocJurusan/Jadwal";
import SaranaPrasaranaImage from "./Pages/SaranaPrasarana/SaranaPrasaranaImage";
import KaryaMahasiswa from "./Pages/DocJurusan/KaryaMahasiswa";
import Bpk from "./Pages/Download/Bpk";
import Rps from "./Pages/Download/Rps";
import KontrakKuliah from "./Pages/Download/KontrakKuliah";
import Penelitian from "./Pages/Download/Penelitian";
import Pengabdian from "./Pages/Download/Pengabdian";
import Sertifikat from "./Pages/Download/Sertifikat";
import InputDataAll from "./Pages/InputDataAll";
import Formulir from "./Pages/DokumenIntiPenjaminanMutu/Formulir";
import Manual from "./Pages/DokumenIntiPenjaminanMutu/Manual";
import Standart from "./Pages/DokumenIntiPenjaminanMutu/Standart";
import Kebijakan from "./Pages/DokumenIntiPenjaminanMutu/Kebijakan";
import { ChakraProvider } from "@chakra-ui/react";
import DocumentLppm from "./Pages/lppm/documentLppm";
import PengajuanProposal from "./Pages/lppm/pengajuanProposal";
import Prestasi from "./Pages/DocJurusan/Prestasi";

const App = () => {
  const { globalState } = useContext(GlobalState);
  const [totalVisitors, setTotalVisitors] = useState(0);

  useEffect(() => {
    const resetVisitorId = () => {
      const newVisitorId = Math.random().toString(36).substr(2, 9);
      const previousVisitorIds = localStorage.getItem("previousVisitorIds");
      if (previousVisitorIds) {
        const parsedPreviousVisitorIds = JSON.parse(previousVisitorIds);
        parsedPreviousVisitorIds.push(localStorage.getItem("visitorId"));
        localStorage.setItem(
          "previousVisitorIds",
          JSON.stringify(parsedPreviousVisitorIds)
        );
      } else {
        localStorage.setItem(
          "previousVisitorIds",
          JSON.stringify([localStorage.getItem("visitorId")])
        );
      }
      localStorage.setItem("visitorId", newVisitorId);
      return newVisitorId;
    };

    const handleBeforeUnload = () => {
      const updatedTotalVisitors = totalVisitors + 1;
      setTotalVisitors(updatedTotalVisitors);
      localStorage.setItem("totalVisitors", updatedTotalVisitors);
      resetVisitorId();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    const allVisitorIds = Object.keys(localStorage);
    setTotalVisitors(
      parseInt(localStorage.getItem("totalVisitors")) || allVisitorIds.length
    );

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [totalVisitors]);

  useEffect(() => {
    const metaData = () => {
      document.title =
        typeof globalState?.page === "string"
          ? globalState.page
          : globalState.page.page;
    };

    metaData();
  }, [globalState]);

  return (
    <ChakraProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dokumentasi-mahasiswa/kai" element={<Kai />} />
          <Route path="/dokumentasi-mahasiswa/hmj" element={<Hmj />} />
          <Route path="/dokumentasi-mahasiswa/magang" element={<Magang />} />
          <Route path="/dokumentasi-mahasiswa/makrab" element={<Makrab />} />
          <Route path="/dokumentasi-mahasiswa/seminar" element={<Seminar />} />
          <Route path="/dokumentasi-mahasiswa/webinar" element={<Webinar />} />
          <Route
            path="/dokumentasi-mahasiswa/sosialisasi"
            element={<Sosialisasi />}
          />
          <Route path="/dokumentasi-mahasiiswa/makrab" element={<Makrab />} />
          <Route
            path="/dokumentasi-jurusan/profil-jurusan"
            element={<ProfilJurusan />}
          />
          <Route
            path="/dokumentasi-jurusan/kurikulum"
            element={<Kurikulum />}
          />
          <Route path="/dokumentasi-jurusan/jadwal" element={<Jadwal />} />
          <Route
            path="/dokumentasi-jurusan/karya-mahasiswa"
            element={<KaryaMahasiswa />}
          />
          <Route path="/dokumentasi-jurusan/prestasi" element={<Prestasi />} />
          <Route path="/pendukung-akreditasi/led" element={<Led />} />
          <Route path="/pendukung-akreditasi/lkps" element={<Lkps />} />
          <Route path="/sarana-prasarana" element={<SaranaPrasaranaImage />} />
          <Route path="/informasi-dosen" element={<InformasiDosen />} />
          <Route path="/informasi-mahasiswa" element={<InformasiMahasiswa />} />
          <Route path="/download/bpk" element={<Bpk />} />
          <Route path="/download/rps" element={<Rps />} />
          <Route path="/download/kontrak-kuliah" element={<KontrakKuliah />} />
          <Route path="/download/penelitian" element={<Penelitian />} />
          <Route path="/download/pengabdian" element={<Pengabdian />} />
          <Route path="/download/sertifikat" element={<Sertifikat />} />
          <Route path="/input-data" element={<InputDataAll />} />
          <Route
            path="/dokumen-inti-penjaminan-mutu/formulir"
            element={<Formulir />}
          />
          <Route
            path="/dokumen-inti-penjaminan-mutu/manual"
            element={<Manual />}
          />
          <Route
            path="/dokumen-inti-penjaminan-mutu/kebijakan"
            element={<Kebijakan />}
          />
          <Route
            path="/dokumen-inti-penjaminan-mutu/standart"
            element={<Standart />}
          />
          <Route path="/lppm/dokumen" element={<DocumentLppm />} />
          <Route
            path="/lppm/pengajuan-proposal"
            element={<PengajuanProposal />}
          />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  );
};

export default App;
