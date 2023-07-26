import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../Context/Context"

const menus = [
  {
    page: "Home",
    path: "/",
  },
  {
    page: "Dokumentasi Jurusan",
    path: "/dokumentasi-jurusan",
  },
  {
    page: "Pendukung akreditasi",
    path: "/pendukung-akreditasi",
  },
  {
    page: "Sarana prasarana",
    path: "/sarana-prasarana",
  },
];

const informasi = [
  {
    page: "Informasi Dosen",
    path: "/informasi-dosen",
  },
  {
    page: "Informasi Mahasiswa",
    path: "/informasi-mahasiswa",
  },
];

const Nav = () => {
  const {globalState} = useContext(GlobalState)
  const pageName = globalState.page

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
                <Link
                  key={i}
                  to={menu.path}
                  className={`${pageName === menu.page ? "text-red-500" : "text-gray-700"} hover:text-red-500 duration-150 cursor-pointer`}
                >
                  {menu.page}
                </Link>
              );
            })}
            <li className="dropdown dropdown-end text-gray-700 hover:text-red-500 duration-150 cursor-pointer">
              <span tabIndex={0} className="cursor-pointer">
                Informasi
              </span>
              <ul
                tabIndex={0}
                className="dropdown-content z-20 menu p-2 shadow bg-base-100 rounded-box w-fit"
              >
                {informasi.map((info, i) => {
                  return (
                    <li key={i}>
                      <Link className={`${pageName === info.page ? "text-red-500" : "text-gray-700"} hover:text-red-500 duration-150 cursor-pointer`} to={info.path}>{info.page}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
