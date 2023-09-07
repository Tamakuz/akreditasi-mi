import { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";
import { Link } from "react-router-dom";
import CardProfileAlumni from "../Components/InformasiMahasiswa/CardProfileAlumni";
import LayoutTamplate from "../Components/LayoutTamplate";

//* 2017
//* Allvan
import informasiUniversalAllvan from "./../Assets/informasi/mahasiswa/2017/allvan/allvan-universal-information.png";
import informasiSpesifikAllvan from "./../Assets/informasi/mahasiswa/2017/allvan/allvan-spesifik-information.png";

//* Kurnia
import informasiUniversalKurnia from "./../Assets/informasi/mahasiswa/2017/kurnia/kurnia-universal-information.png";
import informasiSpesifikKurnia from "./../Assets/informasi/mahasiswa/2017/kurnia/kurnia-spesifik-information.png";

//* Lusi
import informasiUniversalLusi from "./../Assets/informasi/mahasiswa/2017/lusi/lusi-universal-information.png";
import informasiSpesifikLusi from "./../Assets/informasi/mahasiswa/2017/lusi/lusi-spesifik-information.png";

//* 2021
//* Luvita
import informasiUniversalLuvita from "./../Assets/informasi/mahasiswa/2021/luvita/luvita-universal-information.png";
import informasiSpesifikLuvita from "./../Assets/informasi/mahasiswa/2021/luvita/luvita-spesifik-information.png";

//* Naufa
import informasiUniversalNaufa from "./../Assets/informasi/mahasiswa/2021/naufa/naufa-universal-information.png";
import informasiSpesifikNaufa from "./../Assets/informasi/mahasiswa/2021/naufa/naufa-spesifik-information.png";

//* Tetik
import informasiUniversalTetik from "./../Assets/informasi/mahasiswa/2021/tetik/tetik-universal-information.png";
import informasiSpesifikTetik from "./../Assets/informasi/mahasiswa/2021/tetik/tetik-spesifik-information.png";

import { BsFillCalendarDateFill } from "react-icons/bs";
import {
  Box,
  Button,
  Divider,
  Flex,
  useColorMode,
} from "@chakra-ui/react";

const imageYearData = {
  2017: {
    src: [
      {
        universal: informasiUniversalAllvan,
        spesifik: informasiSpesifikAllvan,
        alt: "Gambar",
      },
      {
        universal: informasiUniversalKurnia,
        spesifik: informasiSpesifikKurnia,
        alt: "Gambar",
      },
      {
        universal: informasiUniversalLusi,
        spesifik: informasiSpesifikLusi,
        alt: "Gambar",
      },
    ],
  },
  2021: {
    src: [
      {
        universal: informasiUniversalLuvita,
        spesifik: informasiSpesifikLuvita,
        alt: "Gambar",
      },
      {
        universal: informasiUniversalNaufa,
        spesifik: informasiSpesifikNaufa,
        alt: "Gambar",
      },
      {
        universal: informasiUniversalTetik,
        spesifik: informasiSpesifikTetik,
        alt: "Gambar",
      },
    ],
  },
};

const InformasiMahasiswa = () => {
  const { dispatch } = useContext(GlobalState);
  const [imgSpesifik, setImgSpesifik] = useState();
  const [year, setYear] = useState(2017);
  const { colorMode } = useColorMode();

  let getDataMahasiswa = (year) => {
    const { src } = imageYearData[year];

    return src.map((images, index) => {
      return (
        <CardProfileAlumni
          key={index}
          dataImage={{ ...images }}
          setImgSpesifik={setImgSpesifik}
        />
      );
    });
  };

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Informasi", subPage: "Informasi Mahasiswa" },
    });
  }, []);
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Dokumentasi Infomasi Mahasiswa"}>
        <section className="w-[100%]">
          <Flex className="h-fit flex-col gap-3 inline-block">
            <h3 className="text-[30px] px-10 font-bold">
              Informasi Mahasiswa Aktif
            </h3>
            <Link to="#" target="_blank" className="">
              <span className="underline bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full ml-10 mt-2 mb-8">
                Siakad
              </span>
            </Link>
            <h3 className="text-[30px] px-10 font-bold">Informasi Alumni</h3>
            <Box
              className={`${
                colorMode === "dark"
                  ? "bg-secondaryGray-900"
                  : "bg-secondaryGray-300"
              } rounded-xl py-5 px-10`}
            >
              <h2 className="flex items-center gap-2 font-semibold text-[27px]">
                <BsFillCalendarDateFill className="text-brandTabs-300 text-[27px]" />{" "}
                Tahun :{" "}
              </h2>
              <Box className="mt-2 flex gap-3">
                <Button
                  onClick={() => setYear(2017)}
                  className="bg-brandTabs-300 hover:bg-brandTabs-300  text-brandTabs-100"
                  size="md"
                >
                  2017
                </Button>
                <Button
                  onClick={() => setYear(2021)}
                  className="bg-brandTabs-300 hover:bg-brandTabs-300  text-brandTabs-100"
                  size="md"
                >
                  2021
                </Button>
              </Box>
            </Box>
            <Box
              className={`${
                colorMode === "dark"
                  ? "bg-secondaryGray-900"
                  : "bg-secondaryGray-300"
              } rounded-xl`}
            >
              <Box className="px-10 py-3">
                <h1 className="text-[27px] font-semibold">Alumni {year}</h1>
              </Box>
              <Divider />
              <Box className="px-10 py-5 grid xl:grid-cols-3 gap-5 md:justify-start justify-center">
                {!imageYearData ? (
                  <tr>
                    <td>
                      <p>Loading....</p>
                    </td>
                  </tr>
                ) : (
                  getDataMahasiswa(year)
                )}
              </Box>
            </Box>

            <p className="py-3 text-center">
              Jumlah Alumni : <span className="font-bold">{imageYearData[year].src.length}</span>
            </p>

            <Link to="#" target="_blank" className="flex justify-center">
              <span className="bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full ml-10">
                Belum memiliki data...
              </span>
            </Link>
          </Flex>
        </section>
        <dialog id="my_modal_3" className="modal">
          <form method="dialog" className="modal-box w-fit">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <figure>
              <img src={imgSpesifik} alt="Gambar Profile Harjono" />
            </figure>
            <div className="pt-4">
              <Link
                to=""
                target="_blank"
                className="underline underline-offset-1 bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full"
              >
                Prestasi MISB
              </Link>
            </div>
          </form>
        </dialog>
      </LayoutTamplate>
    </Layout>
  );
};

export default InformasiMahasiswa;
