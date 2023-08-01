import { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";
import { Link } from "react-router-dom";
import CardProfileAlumni from "../Components/InformasiMahasiswa/CardProfileAlumni";

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

const imageAlumni2017 = [
  {
    universal: informasiUniversalAllvan,
    spesifik: informasiSpesifikAllvan,
  },
  {
    universal: informasiUniversalKurnia,
    spesifik: informasiSpesifikKurnia,
  },
  {
    universal: informasiUniversalLusi,
    spesifik: informasiSpesifikLusi,
  },
];

const imageAlumni2021 = [
  {
    universal: informasiUniversalLuvita,
    spesifik: informasiSpesifikLuvita,
  },
  {
    universal: informasiUniversalNaufa,
    spesifik: informasiSpesifikNaufa,
  },
  {
    universal: informasiUniversalTetik,
    spesifik: informasiSpesifikTetik,
  },
];

const InformasiMahasiswa = () => {
  const { dispatch } = useContext(GlobalState);
  const [imgSpesifik, setImgSpesifik] = useState();

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Informasi", subPage: "Informasi Mahasiswa" },
    });
  }, []);
  return (
    <Layout>
      <section className="px-20 pb-10 flex flex-col gap-5">
        <h1 className="text-[30px] px-10 py-10 pb-5 font-bold">
          Informasi Mahasiswa
        </h1>
        <div>
          <h3 className="text-[23px] px-10 py-5 pb-5 font-bold">
            Mahasiswa Aktif
          </h3>
          <Link
            to=""
            target="_blank"
            className="underline underline-offset-1 text-green-600 px-10"
          >
            Mahasiswa Aktif
          </Link>
        </div>
        <div>
          <h3 className="text-[23px] px-10 py-10 pb-5 font-bold">Alumni</h3>
          <div className="mb-10">
            <h5 className="text-[19px] px-10 py-4 pb-5">2017</h5>
            <div className="flex gap-5 flex-wrap w-full justify-evenly">
              {imageAlumni2017.map((image, index) => {
                return (
                  <CardProfileAlumni
                    key={index}
                    dataImage={{ ...image }}
                    setImgSpesifik={setImgSpesifik}
                  />
                );
              })}
            </div>
            <p className="pl-24 pt-10">
              Jumlah Alumni :{" "}
              <span className="font-bold">{imageAlumni2017.length}</span>
            </p>
          </div>
          <div>
            <h5 className="text-[19px] px-10 py-4 pb-5">2021</h5>
            <div className="flex gap-5 flex-wrap w-full justify-evenly">
              {imageAlumni2021.map((image, index) => {
                return (
                  <CardProfileAlumni
                    key={index}
                    dataImage={{ ...image }}
                    setImgSpesifik={setImgSpesifik}
                  />
                );
              })}
            </div>
            <p className="pl-24 pt-10">
              Jumlah Alumni :{" "}
              <span className="font-bold">{imageAlumni2021.length}</span>
            </p>
          </div>
        </div>
      </section>

      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box w-fit">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <figure>
            <img src={imgSpesifik} alt="Gambar Profile Harjono" />
          </figure>
        </form>
      </dialog>
    </Layout>
  );
};

export default InformasiMahasiswa;
