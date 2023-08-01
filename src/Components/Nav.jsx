import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../Context/Context";
import logoMI from "../Assets/icon/mi.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {BsList} from"react-icons/bs"
import {GrClose} from"react-icons/gr"

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
  const [isOpen, setIsOpen] = useState(false)

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
            <div className="md:block hidden">
              <h1 className="text-xl font-bold">Manajemen Informatika</h1>
              <p className="text-[12px] text-gray-500">
                Pusat Pengembangan Pembelajaran dan Penjaminan Mutu Pendidikan
              </p>
            </div>
          </div>
          <div className="md:block hidden">
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
          <button onClick={() => setIsOpen(!isOpen)}>
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

        <div
          className={`${
            isOpen ? "top-0" : "-top-[1000px]"
          } absolute flex flex-col gap-2 bg-[#1d5d9b] w-full h-fit z-[999] duration-100 shadow-md pt-[74px] pb-[10px] px-5`}
        >
          {menus.map((menu, i) => {
            return (
              <div key={i} className="relative group">
                {menu?.subMenus ? (
                  <div key={i} className="collapse collapse-arrow px-0 py-0">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-md">
                      {menu.page}
                    </div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={menu.path}
                    className={`${
                      pageName === menu.page ? "text-red-500" : "text-gray-100"
                    } m-1 cursor-pointer xl:text-[16px] md:text-[12px]`}
                  >
                    {menu.page}
                  </Link>
                )}
                {/* {menu.subMenus && menu.subMenus.length > 0 && (
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
                )} */}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
