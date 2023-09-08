import { useContext, useEffect, useState } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";
import CardProfile from "../Components/InformasiDosen/CardProfile";
import { Link } from "react-router-dom";
import LayoutTamplate from "../Components/LayoutTamplate";

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

import { Flex } from "@chakra-ui/react";

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
      <LayoutTamplate titleHeader={"Dokumentasi Infomasi Mahasiswa"}>
        <section className="w-[100%]">
          <Flex className="h-fit flex-col gap-3 lg:inline-block block">
            <h1 className="text-[30px] px-8 font-bold mb-5">Informasi Dosen</h1>

            <div className="container mx-auto md:px-12">
              <div className="flex justify-center -mx-1 lg:-mx-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
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

            <p className="pt-5 pb-3 text-center">
              Jumlah Dosen : <span className="font-bold">{images.length}</span>
            </p>

            <Link to="#" target="_blank" className="flex justify-center">
              <span className="bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full ml-10">
                Belum memiliki data...
              </span>
            </Link>

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
          </Flex>
        </section>
      </LayoutTamplate>
    </Layout>
  );
};

export default InformasiDosen;
