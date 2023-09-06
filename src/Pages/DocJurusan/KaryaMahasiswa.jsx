import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-router-dom";

//* Kompetisi Game
import foto1 from "./../../Assets/dokumentasi-jurusan/karya-mahasiswa/foto-1.jpg";
import foto2 from "./../../Assets/dokumentasi-jurusan/karya-mahasiswa/foto-2.jpg";
import foto3 from "./../../Assets/dokumentasi-jurusan/karya-mahasiswa/foto-3.jpg";

const KaryaMahasiswa = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://knowledgeable-painted-guarantee.glitch.me/karya_mahasiswa"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
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
      <section className="md:px-10 px-5 py-10 flex flex-col gap-10 justify-center">
        <div className="w-full flex flex-col justify-center items-center mb-10">
          <span>
            <BiLogoReact className="text-6xl text-blue-500 animate-pulse" />
          </span>
          <p className="text-3xl font-bold">
            Karya Mahasiswa Manajemen Informatika
          </p>
        </div>
        <div className="flex md:flex-row gap-10">
          <div className="w-full">
            <div>
              <h3 className="text-[23px] px-10 py-5 pb-5 font-bold">
                Tugas Akhir
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20">
                <div className="card bg-base-100 shadow-xl">
                  <figure className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/JTm6rybBReM"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Lingga Graha</h2>
                    <p>Sistem Pelayanan Masyarakat Pasar Kliwon</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">2023</div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                  <figure className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/HLBC-GJblUM"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Setiya Yuli</h2>
                    <p>Sistem Antrian di PKU Muhammadiyah</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">2023</div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                  <figure className="aspect-w-16 aspect-h-9">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/_nUeF_BGQLU"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Anonim</h2>
                    <p>Website Kelurahan</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">2023</div>
                    </div>
                  </div>
                </div>
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-20">
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
    </Layout>
  );
};

export default KaryaMahasiswa;
