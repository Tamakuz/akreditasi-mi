import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../Context/Context";
import logoMI from "../Assets/icon/mi.png";

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
];

const Nav = () => {
  const { globalState } = useContext(GlobalState);
  const pageName = globalState.page;
  const { page, subPage } = globalState.page;

  return (
    <nav>
      <div className="flex justify-between px-20 py-3 shadow-md">
        <div className="flex gap-3 text-start justify-start">
          <img
            className="aspect-square w-[50px] rounded-full"
            src={logoMI}
            alt="logomi"
          />
          <div>
            <h1 className="text-xl font-bold">Manajemen Informatika</h1>
            <p className="text-[12px] text-gray-500">
              Pusat Pengembangan Pembelajaran dan Penjaminan Mutu Pendidikan
            </p>
          </div>
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
                        page === menu.page ? "text-red-500" : "text-gray-700"
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
