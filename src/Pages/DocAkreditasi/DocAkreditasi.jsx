import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";
import { BiSolidFileDoc } from "react-icons/bi";
import { Link } from "react-router-dom";

const DocAkreditasi = () => {
  const { dispatch } = useContext(GlobalState);
  const [datas, setData] = useState(null);
  const [succes, setSucces] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
        setSucces(!succes);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Pendukung akreditasi" },
    });
  }, []);

  return (
    <Layout>
      <section className="md:px-20 px-5 pb-10 flex flex-col gap-5">
        <h1 className="text-[30px] px-10 py-10 pb-5 font-bold ">
          Data Dukung LED Prodi Manajemen Informasi
        </h1>
        {datas ? (
          datas.map((dataParent, index) =>
            dataParent.dataBab ? (
              <div key={index}>
                <h1 className="text-xl font-semibold pb-3">
                  {dataParent.titleBab}
                </h1>
                <div className="flex flex-col gap-2">
                  {dataParent.dataBab.map((bab, index) => (
                    <div className="bg-white ml-5 p-5 rounded-xl" key={index}>
                      <h1 className="text-xl font-semibold pb-3">
                        {bab.title}
                      </h1>
                      <table className="w-full table-auto">
                        <thead className="border">
                          <tr className="bg-gray-200 text-md">
                            <th className="w-[40px] px-4 py-2">No</th>
                            <th className="text-start px-4">Deskripsi</th>
                            <th className="text-center px-4 py-2 w-[100px]">
                              Dokumen
                            </th>
                            <th className="text-center px-4 py-2 w-[200px]">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {bab.dataBody?.map((body, index) => {
                            return (
                              <tr
                                key={index}
                                className={`${
                                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                                }`}
                              >
                                <td className="text-center border px-4 py-2">
                                  {index + 1}
                                </td>
                                <td className="text-start border px-4 py-2">
                                  {body.deskripsi}
                                </td>
                                <td className="text-center border text-blue-500 cursor-pointer text-base px-4 py-2">
                                  <a
                                    href={body.link}
                                    target="_blank"
                                    className="flex items-center gap-3"
                                  >
                                    <BiSolidFileDoc /> Lihat
                                  </a>
                                </td>
                                <td className="text-center border px-4 py-2">
                                  {body.status}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div key={index}>
                <h1 className="text-xl font-semibold pb-3">
                  {dataParent.titleBab}
                </h1>
                <div className="bg-white p-5 rounded-xl ml-5">
                  <table className="w-full table-auto">
                    <thead className="border">
                      <tr className="bg-gray-200 text-md">
                        <th className="w-[40px] px-4 py-2">No</th>
                        <th className="text-start px-4">Deskripsi</th>
                        <th className="text-center px-4 py-2 w-[100px]">
                          Dokumen
                        </th>
                        <th className="text-center px-4 py-2 w-[200px]">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataParent.dataBody?.map((body, i) => {
                        return (
                          <tr
                            key={i}
                            className={`${
                              i % 2 === 0 ? "bg-white" : "bg-gray-100"
                            }`}
                          >
                            <td className="text-center border px-4 py-2">
                              {i + 1}
                            </td>
                            <td className="text-start border px-4 py-2">
                              {body.deskripsi}
                            </td>
                            <td className="text-center border text-blue-500 cursor-pointer text-base px-4 py-2">
                              <a
                                href={body.link}
                                target="_blank"
                                className="flex items-center gap-3"
                              >
                                <BiSolidFileDoc /> Lihat
                              </a>
                            </td>
                            <td className="text-center border px-4 py-2">
                              {body.status}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </Layout>
  );
};

export default DocAkreditasi;
