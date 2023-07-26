import React, { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";
import data from "../../dataAkreditasi.json";

const DocAkreditasi = () => {
  const { dispatch } = useContext(GlobalState);
  const {dataAkreditasi} = data

  useEffect(() => {
    dispatch({ type: "UPDATE_PAGE", payload: "Pendukung akreditasi" });
  }, []);

  return (
    <Layout>
      <section className="px-20 pb-10 flex flex-col gap-5">
        <h1 className="text-[30px] px-10 py-10 pb-5 font-bold ">Data Dukung LED Prodi Manajemen Informasi</h1>
        {dataAkreditasi.map((da, i) => (
          <div key={i} className="w-full bg-gray-50 p-5 rounded shadow-md">
            <h1 className="text-[20px] font-bold text-gray-700">
              {da.judul}
            </h1>
            <table className="w-full table table-fixed">
              <thead className="border-b-4 border-gray-300">
                <tr>
                  <th className="w-12">No</th>
                  <th className="">Deskripsi</th>
                  <th className="w-[150px]">Dokumen</th>
                </tr>
              </thead>
              <tbody>
                {da.dataBody.map((data, j) => (
                  <tr key={j}>
                    <th>{j + 1}</th>
                    <td>{data.deskripsi}</td>
                    <td>
                      <a
                        href={data.link}
                        className="text-blue-400 hover:text-blue-500 font-semibold tex-xl hover:underline"
                      >
                        Buka
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default DocAkreditasi;
