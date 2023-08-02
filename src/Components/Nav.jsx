import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../Context/Context";
import logoMI from "../Assets/icon/mi.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
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
    page: "Penjaminan Mutu",
    subMenus: [
      { subPage: "Formulir", path: "/penjaminan-mutu/formulir" },
      { subPage: "SOP", path: "/penjaminan-mutu/sop" },
      { subPage: "Pedoman", path: "/penjaminan-mutu/pedoman" },
      { subPage: "Renstra", path: "/penjaminan-mutu/renstra" },
      { subPage: "RIP", path: "/penjaminan-mutu/rip" },
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
  const { globalState } = useContext(GlobalState);
  const pageName = globalState.page;
  const { page, subPage } = globalState.page;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="shadow-md md:static fixed z-[99] w-full">
        <div className="md:px-20 md:static absolute z-[9999] w-full px-5 py-3 bg-[#EEEDED] flex justify-between items-center shadown">
          <div className="flex gap-3 text-start justify-start">
            <img
              className="aspect-square md:w-[50px] w-[40px] rounded-full"
              src={logoMI}
              alt="logomi"
            />
            <div className="w-full md:block hidden">
              <h1 className="text-xl font-bold">Manajemen Informatika</h1>
              <p className="text-[12px] text-gray-500">
                Pusat Pengembangan Pembelajaran dan Penjaminan Mutu Pendidikan
              </p>
            </div>
          </div>
          <div className="md:flex items-center hidden">
            <div className="pr-3 pb-3">
              <Timer />
            </div>
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
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <GrClose className="w-[20px] h-[20px] cursor-pointer" />
            ) : (
              <BsList className="w-[20px] h-[20px] cursor-pointer" />
            )}
          </button>
        </div>

        {/* Desktop And Tablet View */}
        <div className="bg-[#1D5D9B] xl:px-20 md:block hidden md:px-5 py-3 shadow">
          <div className="flex justify-end items-center">
            <ul className=" xl:gap-3 md:gap-1 flex">
              {menus.map((menu, i) => {
                return (
                  <div key={i} className="relative group">
                    {menu?.subMenus ? (
                      <label
                        tabIndex={0}
                        className={`${
                          page === menu.page ? "text-red-500" : "text-gray-100"
                        } m-1 cursor-pointer xl:text-[16px] md:text-[12px]`}
                      >
                        {menu.page}
                      </label>
                    ) : (
                      <Link
                        to={menu.path}
                        className={`${
                          pageName === menu.page
                            ? "text-red-500"
                            : "text-gray-100"
                        } m-1 cursor-pointer xl:text-[16px] md:text-[12px]`}
                      >
                        {menu.page}
                      </Link>
                    )}
                    {menu.subMenus && menu.subMenus.length > 0 && (
                      <ul
                        className={`${
                          pageName === menu.page ? "block" : "hidden"
                        } z-50 menu bg-[#1D5D9B] p-2 rounded-box w-fit right-[5px] absolute group-hover:block`}
                      >
                        {menu.subMenus.map((sub, j) => (
                          <li key={j}>
                            <Link
                              to={sub.path}
                              className={`${
                                subPage === sub.subPage
                                  ? "text-red-500"
                                  : "text-gray-100"
                              } duration-150 cursor-pointer`}
                            >
                              {sub.subPage}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mobile view */}
        <div
          className={`${
            isOpen ? "top-0" : "-top-[1000px]"
          } absolute flex flex-col bg-[#1d5d9b] w-full h-fit z-[999] duration-100 shadow-md pt-[64px]`}
        >
          {menus.map((menu, i) => {
            return (
              <div key={i}>
                {menu?.subMenus ? (
                  <div className="border-b border-gray-500 ">
                    <Collapse
                      className={`text-white border-b text-[16px]`}
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
                                  className={`${
                                    subPage === sub.subPage && "text-white"
                                  } duration-150 cursor-pointer`}
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
                  <div className="px-5 py-[12px] border-b border-gray-500">
                    <Link
                      to={menu.path}
                      className={`${
                        pageName === menu.page ? "text-gray-100" : "text-black"
                      } cursor-pointer text-[16px] hover:text-blue-300`}
                    >
                      {menu.page}
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
