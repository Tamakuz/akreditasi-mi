import React, { useState } from "react";
import Layout from "../Components/Layout";
import InputKurikulum from "../Components/InputDatas/InputKurikulum";
import InputDataKarya from "../Components/InputDatas/InputDataKarya";
import InputDataAkreditasi from "../Components/InputDatas/InputDataAkreditasi";
import InputBpk from "../Components/InputDatas/InputBpk";
import InputRps from "../Components/InputDatas/InputRps";
import InputKontrakKuliah from "../Components/InputDatas/inputKontrakKuliah";
import InputPenelitian from "../Components/InputDatas/InputPenelitian";
import InputPengabdian from "../Components/InputDatas/InputPengabdian";
import InputFormulir from "../Components/InputDatas/InputFormulir";
import InputSop from "../Components/InputDatas/InputSop";
import InputPedoman from "../Components/InputDatas/InputPedoman";
import InputRenstra from "../Components/InputDatas/InputRenstra";
import InputRip from "../Components/InputDatas/InputRip";
import InputLppm from "../Components/InputDatas/InputLppm";
import InputSertifikat from "../Components/InputDatas/InputSertifikat";

const InputDataAll = () => {
  const [selectedOption, setSelectedOption] = useState("kurikulums"); // State untuk menangkap nilai dropdown

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  let content;
  switch (selectedOption) {
    case "kurikulums":
      content = <InputKurikulum />;
      break;
    case "karya_mahasiswa":
      content = <InputDataKarya />;
      break;
    case "dataAkreditasi":
      content = <InputDataAkreditasi />;
      break;
    case "bpk":
      content = <InputBpk />;
      break;
    case "rps":
      content = <InputRps />;
      break;
    case "kontrak_kuliah":
      content = <InputKontrakKuliah />;
      break;
    case "penelitian":
      content = <InputPenelitian />;
      break;
    case "pengabdian":
      content = <InputPengabdian />;
      break;
    case "sertifikat":
      content = <InputSertifikat />;
      break;
    case "formulir":
      content = <InputFormulir />;
      break;
    case "sop":
      content = <InputSop />;
      break;
    case "pedoman":
      content = <InputPedoman />;
      break;
    case "renstra":
      content = <InputRenstra />;
      break;
    case "rip":
      content = <InputRip />;
      break;
    case "penelitian_lppm":
      content = <InputLppm collection={selectedOption} />;
      break;
    case "pengabdian_lppm":
      content = <InputLppm collection={selectedOption} />;
      break;
    case "jurnal_lppm":
      content = <InputLppm collection={selectedOption} />;
      break;
    case "haki_lppm":
      content = <InputLppm collection={selectedOption} />;
      break;
    case "roadmap_lppm":
      content = <InputLppm collection={selectedOption} />;
      break;
    case "pedoman_lppm":
      content = <InputLppm collection={selectedOption} />;
      break;
    case "renstra_lppm":
      content = <InputLppm collection={selectedOption} />;
      break;

    default:
      break;
  }

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-fit px-20 py-10">
        <div className="w-full flex flex-col gap-10">
          <div>
            <label
              htmlFor="dropdown"
              className="text-gray-700 text-sm font-medium mb-1"
            >
              Select an option:
            </label>
            <div className="relative">
              <select
                id="dropdown"
                className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
                value={selectedOption} // Menghubungkan value dengan state
                onChange={handleDropdownChange} // Menghubungkan perubahan dengan fungsi handleDropdownChange
              >
                <option value="kurikulums">Kurikulum</option>
                <option value="karya_mahasiswa">Karya Mahasiswa</option>
                <option value="dataAkreditasi">
                  Data Pendukung Akreditasi
                </option>
                <option value="bpk">BPK</option>
                <option value="rps">RPS</option>
                <option value="kontrak_kuliah">Kontrak Kuliah</option>
                <option value="penelitian">Penelitian</option>
                <option value="pengabdian">Pengabdian</option>
                <option value="sertifikat">Sertifikat</option>
                <option value="formulir">Formulir</option>
                <option value="sop">SOP</option>
                <option value="pedoman">Pedoman</option>
                <option value="renstra">Renstra</option>
                <option value="rip">RIP</option>
                <option value="penelitian_lppm">Penelitian LPPM</option>
                <option value="pengabdian_lppm">Pengabdian LPPM</option>
                <option value="jurnal_lppm">Jurnal LPPM</option>
                <option value="haki_lppm">HAKI LPPM</option>
                <option value="roadmap_lppm">Road Map LPPM</option>
                <option value="pedoman_lppm">Pedoman LPPM</option>
                <option value="renstra_lppm">Renstra LPPM</option>
              </select>
            </div>
          </div>
          <div>{content}</div>
        </div>
      </div>
    </Layout>
  );
};

export default InputDataAll;
