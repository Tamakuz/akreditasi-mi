import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../Context/Context";
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";

const Formulir = () => {
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
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Penjaminan Mutu", subPage: "Formulir" },
    });
  }, []);
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Penjaminan Mutu Formulir"}>
        <div className="overflow-x-auto w-full">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 w-[50px]">No</th>
                <th className="px-4 py-2 w-[400px]">Deskripsi</th>
                <th className="px-4 py-2 w-[100px]">Link</th>
              </tr>
            </thead>
            <tbody>
              {!data
                ? "Data Kosong"
                : data.map((b, i) => {
                    return (
                      <tr
                        key={i}
                        className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                      >
                        <th className="border px-4 py-2">{i + 1}</th>
                        <td className="border px-4 py-2">{b.deskripsi}</td>
                        <td className="border px-4 py-2 text-center">
                          <a
                            rel="noopener noreferrer"
                            href={b.link}
                            target="_blank"
                            className="text-red-500"
                          >
                            Download
                          </a>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </LayoutTamplate>
    </Layout>
  );
};

export default Formulir;
