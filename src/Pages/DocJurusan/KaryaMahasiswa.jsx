import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-router-dom";

//* Kompetisi Game
import foto1 from "./../../Assets/dokumentasi-jurusan/karya-mahasiswa/foto-1.jpg";
import foto2 from "./../../Assets/dokumentasi-jurusan/karya-mahasiswa/foto-2.jpg";
import foto3 from "./../../Assets/dokumentasi-jurusan/karya-mahasiswa/foto-3.jpg";
import LayoutTamplate from "../../Components/LayoutTamplate";

const KaryaMahasiswa = () => {
  const { dispatch } = useContext(GlobalState);

  const [data, setData] = useState(null);

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
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Karya Mahasiswa" },
    });
  }, []);

  return (
    <Layout>
      <LayoutTamplate titleHeader={"Karya Mahasiswa"}>
        <section className="md:px-10 px-5 py-10 flex flex-col gap-10">
          <div className="flex md:flex-row gap-10">
            <div className="w-full">
              <div>
                <h3 className="text-[23px] px-10 py-5 pb-5 font-bold">
                  Tugas Akhir
                </h3>
                <div className="grid grid-rows-1f md:grid-cols-2 lg:grid-cols-3 gap-3 lg:px-20">
                  {!data ? (
                    <tr>
                      <td>
                        <p>Loading....</p>
                      </td>
                    </tr>
                  ) : (
                    data.map((element, index) => {
                      return (
                        <div key={index} className="card bg-base-100 shadow-xl">
                          <figure className="aspect-w-16 aspect-h-9">
                            <video src={element.video}></video>
                          </figure>
                          <div className="card-body">
                            <h2 className="card-title">{element.nama}</h2>
                            <p>{element.judul}</p>
                            <div className="card-actions justify-end">
                              <div className="badge badge-outline">
                                {element.tahun}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-[23px] px-10 py-5 mt-10 pb-5 font-bold">
                  Kompetisi Game
                </h3>
                <Link
                  to="https://drive.google.com/file/d/1UHkS5bEFGt-FcR8XAUCpRzDyNUESVhvV/view?usp=drive_link"
                  target="_blank"
                  className="ml-20 mb-5 text-lg underline underline-offset-1 bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full"
                >
                  Video Kompetisi Game
                </Link>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-20">
                  <div className="card bg-base-100 shadow-xl">
                    <figure className="rounded-md">
                      <img src={foto1} alt="" />
                    </figure>
                  </div>
                  <div className="card bg-base-100 shadow-xl">
                    <figure className="rounded-md">
                      <img src={foto2} alt="" />
                    </figure>
                  </div>
                  <div className="card bg-base-100 shadow-xl">
                    <figure className="rounded-md">
                      <img src={foto3} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutTamplate>
    </Layout>
  );
};

export default KaryaMahasiswa;
