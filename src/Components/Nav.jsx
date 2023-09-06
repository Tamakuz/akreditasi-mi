import { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../Context/Context";
import logoMI from "../Assets/icon/mi.png";
import {
  AiFillEye,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { Collapse } from "antd";
import Timer from "./timer/Timer";

const menus = [
  {
    page: "Home",
    path: "/",
  },
  {
    page: "Dokumentasi Jurusan",
    subMenus: [
      {
        subPage: "Profil Jurusan",
        path: "/dokumentasi-jurusan/profil-jurusan",
      },
      { subPage: "Kurikulum", path: "/dokumentasi-jurusan/kurikulum" },
      { subPage: "Jadwal", path: "/dokumentasi-jurusan/jadwal" },
      {
        subPage: "Karya Mahasiswa",
        path: "/dokumentasi-jurusan/karya-mahasiswa",
      },
    ],
  },
  {
    page: "Pendukung akreditasi",
    path: "/pendukung-akreditasi",
  },
  {
    page: "Sarana prasarana",
    path: "/sarana-prasarana",
  },
  {
    page: "Informasi",
    subMenus: [
      { subPage: "Informasi Dosen", path: "/informasi-dosen" },
      { subPage: "Informasi Mahasiswa", path: "/informasi-mahasiswa" },
    ],
    path: "/informasi",
  },
  {
    page: "Dokumen inti Penjaminan Mutu",
    subMenus: [
      { subPage: "Formulir", path: "/dokumen-inti-penjaminan-mutu/formulir" },
      { subPage: "Standart", path: "/dokumen-inti-penjaminan-mutu/standart" },
      { subPage: "Kebijakan", path: "/dokumen-inti-penjaminan-mutu/kebijakan" },
      { subPage: "Manual", path: "/dokumen-inti-penjaminan-mutu/manual" },
    ],
  },
  {
    page: "LPPM",
    subMenus: [
      { subPage: "Penelitian", path: "/lppm/penelitian" },
      { subPage: "Pengabdian", path: "/lppm/pengabdian" },
      { subPage: "Jurnal", path: "/lppm/jurnal" },
      { subPage: "HAKI", path: "/lppm/haki" },
      { subPage: "Road Map", path: "/lppm/road-map" },
      { subPage: "Pedoman", path: "/lppm/pedoman" },
      { subPage: "Renstra", path: "/lppm/renstra" },
    ],
  },
  {
    page: "Dokumentasi Mahasiswa",
    subMenus: [
      {
        subPage: "Makrab",
        path: "/dokumentasi-mahasiswa/makrab",
      },
      { subPage: "Magang", path: "/dokumentasi-mahasiswa/magang" },
      { subPage: "Sosialisasi", path: "/dokumentasi-mahasiswa/sosialisasi" },
      {
        subPage: "Seminar",
        path: "/dokumentasi-mahasiswa/seminar",
      },
      {
        subPage: "Webinar",
        path: "/dokumentasi-mahasiswa/webinar",
      },
      {
        subPage: "Kompetisi Game",
        path: "/dokumentasi-mahasiswa/kompetisi-game",
      },
      {
        subPage: "KAI",
        path: "/dokumentasi-mahasiswa/kai",
      },
      {
        subPage: "HMJ",
        path: "/dokumentasi-mahasiswa/hmj",
      },
    ],
  },
  {
    page: "Download",
    subMenus: [
      { subPage: "BPK", path: "/download/bpk" },
      { subPage: "RPS", path: "/download/rps" },
      { subPage: "Kontrak Kuliah", path: "/download/kontrak-kuliah" },
      { subPage: "Penelitian", path: "/download/penelitian" },
      { subPage: "Pengabdian", path: "/download/pengabdian" },
      { subPage: "Sertifikat", path: "/download/sertifikat" },
    ],
  },
];

const Medsos = [
  {
    name: "Facebook",
    icon: <AiFillFacebook className="w-[30px] h-[30px] text-blue-500" />,
    link: "https://youtube.com",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram className="w-[30px] h-[30px] text-red-500" />,
    link: "https://youtube.com",
  },
  {
    name: "Twitter",
    icon: <AiFillTwitterCircle className="w-[30px] h-[30px] text-blue-500" />,
    link: "https://youtube.com",
  },
];

const Nav = () => {
  const existingVisitorId = localStorage.getItem("totalVisitors");
  const { globalState } = useContext(GlobalState);
  const pageName = globalState.page;
  const { page, subPage } = globalState.page;
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://knowledgeable-painted-guarantee.glitch.me/visitors"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data.length);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <nav>
      <div className="shadow-md w-full">
        <div className="md:px-8  md:static absolute z-[999] w-full px-5 py-3 bg-[#EEEDED] flex justify-between items-center shadown">
          <button onClick={() => setIsOpen(!isOpen)} className="">
            {isOpen ? (
              <button className="btn btn-active btn-primary">Close</button>
            ) : (
              <button className="btn btn-active btn-primary">Menu</button>
            )}
          </button>
          <div className="flex gap-3 text-start justify-start pl-10 p-3">
            <img
              className="aspect-square md:w-[50px] w-[40px] rounded-full"
              src={logoMI}
              alt="logomi"
            />
            <div className="w-full lg:block hidden">
              <h1 className="text-xl font-bold">Manajemen Informatika</h1>
              <p className="text-[12px] text-gray-500">
                Pusat Pengembangan Pembelajaran dan Penjaminan Mutu Pendidikan
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center flex-col pb-3">
              <Timer />
              <p className="text-[12px] flex items-center gap-2">
                <span className="text-[16px]">
                  <AiFillEye />
                </span>
                Dilihat : {data}
              </p>
            </div>
            <div className="lg:flex items-center hidden">
              {Medsos.map((media, i) => {
                return (
                  <div
                    key={i}
                    className="tooltip tooltip-bottom"
                    data-tip={media.name}
                  >
                    <a
                      href={media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {media.icon}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Mobile view */}
        <div className="w-full flex xl:hidden justify-center">
          <div
            className={`${
              isOpen ? "top-0" : "-top-[1000px]"
            } absolute flex flex-col w-full lg:w-[95%] h-fit z-[999] duration-100 shadow-md lg:mt-[97px] mt-[93px] bg-[#d8d8d8] overflow-auto p-5`}
          >
            {menus.map((menu, i) => {
              return (
                <div key={i}>
                  {menu?.subMenus ? (
                    <div>
                      <Collapse
                        className={`!important border-b text-[24px]`}
                        bordered={true}
                        ghost={true}
                        items={[
                          {
                            key: i,
                            label: menu.page,
                            children: (
                              <div className="flex flex-col gap-3 px-10">
                                {menu.subMenus.map((sub, j) => (
                                  <Link
                                    key={j}
                                    to={sub.path}
                                    className={` ${
                                      subPage === sub.subPage
                                        ? "text-blue-700"
                                        : "text-black"
                                    } duration-150 cursor-pointer text-[24px] hover:text-gray-600`}
                                  >
                                    {sub.subPage}
                                  </Link>
                                ))}
                              </div>
                            ),
                          },
                        ]}
                      />
                    </div>
                  ) : (
                    <div className="px-5 py-[12px]">
                      <Link
                        to={menu.path}
                        className={` ${
                          pageName === menu.page
                            ? "text-blue-700"
                            : "text-black"
                        } cursor-pointer text-[24px] hover:text-gray-600`}
                      >
                        {menu.page}
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex items-center px-4 pt-3 lg:hidden ">
              {Medsos.map((media, i) => {
                return (
                  <div
                    key={i}
                    className="tooltip tooltip-bottom"
                    data-tip={media.name}
                  >
                    <a
                      href={media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {media.icon}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Desktop view */}
        <div className="w-full hidden xl:flex justify-center">
          <div
            className={`${
              isOpen ? "top-0" : "-top-[1000px]"
            } absolute flex flex-col w-full lg:w-[95%] h-fit z-[999] duration-100 shadow-md lg:mt-[97px] mt-[93px] bg-[#d8d8d8]  overflow-y-auto p-5`}
          >
            {menus.map((menu, i) => {
              return (
                <div
                  key={i}
                  className="group border-r border-gray-700 w-[500px]"
                >
                  {menu?.subMenus ? (
                    <div>
                      <button
                        className={` ${
                          pageName === menu.page
                            ? "text-blue-700"
                            : "text-black"
                        } cursor-pointer text-[24px] w-full hover:text-gray-600 px-5 py-[12px] flex justify-between items-center`}
                      >
                        {menu.page}
                        <IoIosArrowForward className="group-hover:rotate-90" />
                      </button>
                      <div className="absolute top-0 justify-evenly h-full left-[520px] flex-col gap-3 px-10 text-[24px] hidden group-hover:flex">
                        {menu.subMenus.map((sub, j) => (
                          <Link
                            key={j}
                            to={sub.path}
                            className={` ${
                              subPage === sub.subPage
                                ? "text-blue-700"
                                : "text-black"
                            } duration-150 cursor-pointer text-[24px] hover:text-gray-600`}
                          >
                            {sub.subPage}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="px-5 py-[12px]">
                      <Link
                        to={menu.path}
                        className={` ${
                          pageName === menu.page
                            ? "text-blue-700"
                            : "text-black"
                        } cursor-pointer text-[24px] hover:text-gray-600`}
                      >
                        {menu.page}
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
            <div className="flex items-center px-4 pt-3 lg:hidden ">
              {Medsos.map((media, i) => {
                return (
                  <div
                    key={i}
                    className="tooltip tooltip-bottom"
                    data-tip={media.name}
                  >
                    <a
                      href={media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {media.icon}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
