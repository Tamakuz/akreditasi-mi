import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";

const DocAkreditasi = () => {
  const { dispatch } = useContext(GlobalState);
  const [data, setData] = useState(null);
  const [succes, setSucces] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://knowledgeable-painted-guarantee.glitch.me/karya_mahasiswa"
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
  }, [succes]);

  useEffect(() => {
    dispatch({ type: "UPDATE_PAGE", payload: "Pendukung akreditasi" });
  }, []);

  return (
    <Layout>
      <section className="md:px-20 px-5 pb-10 flex flex-col gap-5">
        <h1 className="text-[30px] px-10 py-10 pb-5 font-bold ">
          Data Dukung LED Prodi Manajemen Informasi
        </h1>
        {!data
          ? "Data Kosong"
          : data.map((da, i) => (
              <div key={i} className="w-full bg-gray-50 p-5 rounded shadow-md">
                <h1 className="md:text-[20px] text-[16px] font-bold text-gray-700">
                  {da.judul}
                </h1>
                <table className="w-full table table-fixed">
                  <thead className="border-b-2 border-gray-300">
                    <tr>
                      <th className="md:w-12 w-8 p-0">No</th>
                      <th className="">Deskripsi</th>
                      <th className="w-[100px]">Dokumen</th>
                    </tr>
                  </thead>
                  <tbody>
                    {da.dataBody.map((data, j) => (
                      <tr key={j}>
                        <th className="p-0">{j + 1}</th>
                        <td className="md:text-[14px] text-[12px]">
                          {data.deskripsi}
                        </td>
                        <td>
                          <a
                            href={data.link}
                            className="text-blue-400 hover:text-blue-500 md:text-[14px] text-[12px] font-semibold tex-xl hover:underline"
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
