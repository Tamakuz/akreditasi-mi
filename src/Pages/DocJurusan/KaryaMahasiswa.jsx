import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";
import Calendar from "react-calendar";
import elitaLink from "../../Assets/elita-link.png";
import edlinkLink from "../../Assets/edlink-link.png";
import siakadLink from "../../Assets/siakad-link.png";
import sisterLink from "../../Assets/sister-link.png";
import { FiLink } from "react-icons/fi";
import { BiLogoReact } from "react-icons/bi";
import { Link } from "react-router-dom";

//* Kompetisi Game
import foto1 from "./../../Assets/dokumentasi-jurusan/karya-mahasiswa/foto-1.jpg";
import foto2 from "./../../Assets/dokumentasi-jurusan/karya-mahasiswa/foto-2.jpg";
import foto3 from "./../../Assets/dokumentasi-jurusan/karya-mahasiswa/foto-3.jpg";

const refrention = [
  {
    img: elitaLink,
    desc: "Elita",
    link: "http://kuliah.politama.ac.id/",
  },
  {
    img: edlinkLink,
    desc: "EdLink",
    link: "https://edlink.id/",
  },
  {
    img: siakadLink,
    desc: "Siakad",
    link: "https://siakad.politama.ac.id/index.php/login",
  },
  {
    img: sisterLink,
    desc: "Sister",
    link: "http://sister.politama.ac.id/dashboard/",
  },
];


const KaryaMahasiswa = () => {
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
          {/* <div className="flex flex-col gap-10">
            <h1 className="text-2xl font-bold text-gray-700">
              Daftar Karya Mahasiswa
            </h1>
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">No</th>
                    <th className="px-4 py-2">Nama</th>
                    <th className="px-4 py-2">Judul</th>
                    <th className="px-4 py-2">Tahun</th>
                    <th className="px-4 py-2">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {!data
                    ? "Data Kosong"
                    : data.map((mhs, i) => {
                        return (
                          <tr
                            key={i}
                            className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                          >
                            <td className="border px-4 py-2">{i + 1}</td>
                            <td className="border px-4 py-2">{mhs.nama}</td>
                            <td className="border px-4 py-2">{mhs.judul}</td>
                            <td className="border px-4 py-2">{mhs.tahun}</td>
                            <td className="border px-4 py-2 space-x-3">
                              {mhs.doc !== "https://" && (
                                <a
                                  href={mhs.doc}
                                  target="_blank"
                                  className="text-blue-500"
                                >
                                  Doc
                                </a>
                              )}
                              {mhs.video !== "https://" && (
                                <a
                                  href={mhs.video}
                                  target="_blank"
                                  className="text-red-500"
                                >
                                  Video
                                </a>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-[300px] w-full flex flex-col items-center gap-3">
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/JTm6rybBReM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/HLBC-GJblUM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              className="aspect-video w-full"
              src="https://www.youtube.com/embed/_nUeF_BGQLU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div className="w-full border-b border-blue-500">
              <p className="text-xl font-bold text-gray-700">Calendar</p>
            </div>
            <Calendar value={new Date()} />
            <div className="w-full border-b border-blue-500">
              <p className="text-xl font-bold text-gray-700">Tautan</p>
            </div>
            <div className="flex flex-wrap justify-center gap-5">
              {refrention.map((ref, i) => {
                return (
                  <div
                    key={i}
                    className="relative h- group w-[130px] aspect-square overflow-hidden"
                  >
                    <img
                      src={ref.img}
                      className="w-full h-full"
                      alt="elita-link"
                    />
                    <div className="absolute opacity-0 group-hover:top-0 hover:opacity-100 duration-300 w-full h-full backdrop-brightness-75 flex justify-center items-center cursor-pointer">
                      <a
                        href={ref.link}
                        target="_blank"
                        className="bg-green-300 px-2 py-2 rounded w-[80px] h-[80px] flex flex-col justify-center items-center"
                      >
                        <FiLink className="text-3xl text-gray-700" />
                        <p>{ref.desc}</p>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div> */}

          <div className="w-full">
            <div>
              <h3 className="text-[23px] px-10 py-5 pb-5 font-bold">
                Tugas Akhir
              </h3>
              <div className="flex justify-evenly flex-wrap gap-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <iframe
                      className="aspect-video w-full"
                      src="https://www.youtube.com/embed/JTm6rybBReM"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Lingga Graha</h2>
                    <p>Sistem Pelaynan Masyarakat Pasar Kliwon</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">2023</div>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <iframe
                      className="aspect-video w-full"
                      src="https://www.youtube.com/embed/HLBC-GJblUM"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Setiya Yuli</h2>
                    <p>Sistem Antrian di PKU Muhammadiya</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline">2023</div>
                    </div>
                  </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure>
                    <iframe
                      className="aspect-video w-full"
                      src="https://www.youtube.com/embed/_nUeF_BGQLU"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Anonim</h2>
                    <p>Website kelurahann</p>
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
              <div className="flex justify-evenly flex-wrap gap-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="rounded-md">
                    <img src={foto1} alt="" />
                  </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <figure className="rounded-md">
                    <img src={foto2} alt="" />
                  </figure>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
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
