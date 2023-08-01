import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";
import CardProfile from "../Components/InformasiDosen/CardProfile";

//* Harjono
import informasiUniversalkHarjono from "./../Assets/informasi/dosen/harjono/harjono-universal-information.jpg";
import informasiSpesifikHarjono from "./../Assets/informasi/dosen/harjono/harjono-spesifik-information.jpg";

//* Devi
import informasiUniversalkDevi from "./../Assets/informasi/dosen/devi/devi-universal-information.jpg";
import informasiSpesifikkDevi from "./../Assets/informasi/dosen/devi/devi-spesifik-information.jpg";

//* Didik Warasto
import informasiUniversalkDidikWarasto from "./../Assets/informasi/dosen/didik-warasto/didik-warasto-universal-information.jpg";
import informasiSpesifikkDidikWarasto from "./../Assets/informasi/dosen/didik-warasto/didik-warasto-spesifik-information.jpg";

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
];

const InformasiDosen = () => {
  const { dispatch } = useContext(GlobalState);

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
        <div className="flex gap-5 flex-wrap w-full justify-evenly">
          {images.map((image, index) => {
            return <CardProfile key={index} dataImage={{ ...image }} />;
          })}
        </div>
        <p className="pl-24 pt-10">
          Jumlah Dosen : <span className="font-bold">{images.length}</span>
        </p>
      </section>

      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <figure>
            <img src="sd" alt="Gambar Profile Harjono" />
          </figure>
        </form>
      </dialog>
    </Layout>
  );
};

export default InformasiDosen;
