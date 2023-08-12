import { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";
import CardProfile from "../Components/InformasiDosen/CardProfile";
import { Link } from "react-router-dom";

//* Harjono
import informasiUniversalkHarjono from "./../Assets/informasi/dosen/harjono/harjono-universal-information.jpg";
import informasiSpesifikHarjono from "./../Assets/informasi/dosen/harjono/harjono-spesifik-information.jpg";

//* Devi
import informasiUniversalkDevi from "./../Assets/informasi/dosen/devi/devi-universal-information.jpg";
import informasiSpesifikkDevi from "./../Assets/informasi/dosen/devi/devi-spesifik-information.jpg";

//* Didik Warasto
import informasiUniversalkDidikWarasto from "./../Assets/informasi/dosen/didik-warasto/didik-warasto-universal-information.jpg";
import informasiSpesifikkDidikWarasto from "./../Assets/informasi/dosen/didik-warasto/didik-warasto-spesifik-information.jpg";

//* Agus Haryawan
import informasiUniversalAgusHaryawan from "./../Assets/informasi/dosen/agus/agus-universal-information.jpeg";

//* Alhan
import informasiUniversalAlhan from "./../Assets/informasi/dosen/alhan/alhan-universal-information.jpeg";

//* Alhan
import informasiUniversalTaufik from "./../Assets/informasi/dosen/taufik/taufik-universal-information.jpeg";

//* Taman Ginting
import informasiUniversalTamanGinting from "./../Assets/informasi/dosen/ginting/ginting-universal-information.jpeg";

//* Yusuf
import informasiUniversalYusuf from "./../Assets/informasi/dosen/yusuf/yusuf-universal-information.jpeg";

const images = [
  {
    universal: informasiUniversalkHarjono,
    spesifik: informasiSpesifikHarjono,
  },
  {
    universal: informasiUniversalkDevi,
    spesifik: informasiSpesifikkDevi,
  },
  {
    universal: informasiUniversalkDidikWarasto,
    spesifik: informasiSpesifikkDidikWarasto,
  },
  {
    universal: informasiUniversalAgusHaryawan,
    spesifik: "",
  },
  {
    universal: informasiUniversalAlhan,
    spesifik: "",
  },
  {
    universal: informasiUniversalTamanGinting,
    spesifik: "",
  },
  {
    universal: informasiUniversalTaufik,
    spesifik: "",
  },
  {
    universal: informasiUniversalYusuf,
    spesifik: "",
  },
];

const InformasiDosen = () => {
  const { dispatch } = useContext(GlobalState);
  const [imgSpesifik, setImgSpesifik] = useState();

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Informasi", subPage: "Informasi Dosen" },
    });
  }, []);

  return (
    <Layout>
      <section className="px-20 pb-10 flex flex-col gap-5">
        <h1 className="text-[30px] px-10 py-10 pb-5 font-bold">
          Informasi Dosen
        </h1>

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              {images.map((image, index) => {
                return (
                  <CardProfile
                    key={index}
                    dataImage={{ ...image }}
                    setImgSpesifik={setImgSpesifik}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* <div className="flex gap-5 flex-wrap w-full justify-evenly">
          {images.map((image, index) => {
            return (
              <CardProfile
                key={index}
                dataImage={{ ...image }}
                setImgSpesifik={setImgSpesifik}
              />
            );
          })}
        </div> */}
        <p className="pt-10 text-center">
          Jumlah Dosen : <span className="font-bold">{images.length}</span>
        </p>
      </section>

      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box w-fit">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-0 top-0">
            ✕
          </button>
          <figure>
            <img src={imgSpesifik} alt="Gambar" />
          </figure>
          <div className="pt-4">
            <Link
              to=""
              target="_blank"
              className="underline underline-offset-1 bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full"
            >
              Sertifikat
            </Link>
            <Link
              to=""
              target="_blank"
              className="underline underline-offset-1 bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full ml-2"
            >
              CV
            </Link>
          </div>
        </form>
      </dialog>
    </Layout>
  );
};

export default InformasiDosen;
