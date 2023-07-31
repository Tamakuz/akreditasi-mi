import React, { useState } from "react";
import Layout from "../Components/Layout";
import InputKurikulum from "../Components/InputDatas/InputKurikulum";
import InputDataKarya from "../Components/InputDatas/InputDataKarya";
import InputDataAkreditasi from "../Components/InputDatas/InputDataAkreditasi";

const InputDataAll = () => {
  const [selectedOption, setSelectedOption] = useState("kurikulums"); // State untuk menangkap nilai dropdown
  console.log(selectedOption);

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
