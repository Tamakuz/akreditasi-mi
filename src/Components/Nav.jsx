import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../Context/Context";

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
      {
        subPage: "Rencana Pembangunan",
        path: "/dokumentasi-jurusan/rencana-pembangunan",
      },
      { subPage: "Jadwal", path: "/dokumentasi-jurusan/jadwal" },
      {
        subPage: "Sarana Prasarana",
        path: "/dokumentasi-jurusan/sarana-prasarana",
      },
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
];

const Nav = () => {
  const { globalState } = useContext(GlobalState);
  const pageName = globalState.page;
  const {page, subPage} = globalState.page

  return (
    <nav>
      <div className="flex justify-between px-20 py-3 shadow-md">
        <div className="flex flex-col text-start justify-start">
          <h1 className="text-xl font-bold">Manajemen Informatika</h1>
          <p className="text-[12px] text-gray-500">
            Pusat Pengembangan Pembelajaran dan Penjaminan Mutu Pendidikan
          </p>
        </div>
        <div className="flex justify-center items-center">
          <ul className="flex gap-3 ">
            {menus.map((menu, i) => {
              return (
                <div key={i} className="relative group">
                  {menu?.subMenus ? (
                    <label
                      tabIndex={0}
                      className={`${
                        page === menu.page
                          ? "text-red-500"
                          : "text-gray-700"
                      } m-1 cursor-pointer`}
                    >
                      {menu.page}
                    </label>
                  ) : (
                    <Link
                      to={menu.path}
                      className={`${
                        pageName === menu.page
                          ? "text-red-500"
                          : "text-gray-700"
                      } m-1 cursor-pointer`}
                    >
                      {menu.page}
                    </Link>
                  )}
                  {menu.subMenus && menu.subMenus.length > 0 && (
                    <ul
                      className={`${
                        pageName === menu.page ? "block" : "hidden"
                      } z-50 menu p-2 bg-base-100 rounded-box w-fit right-[5px] absolute group-hover:block`}
                    >
                      {menu.subMenus.map((sub, j) => (
                        <li key={j}>
                          <Link
                            to={sub.path}
                            className={`${
                              subPage === sub.subPage
                                ? "text-red-500"       
                                : "text-gray-700"
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
    </nav>
  );
};

export default Nav;
