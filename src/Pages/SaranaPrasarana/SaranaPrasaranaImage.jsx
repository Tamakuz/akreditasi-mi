import { useContext, useEffect } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";
import Calendar from "react-calendar";
import elitaLink from "../../Assets/elita-link.png";
import edlinkLink from "../../Assets/edlink-link.png";
import siakadLink from "../../Assets/siakad-link.png";
import sisterLink from "../../Assets/sister-link.png";
import { FiLink } from "react-icons/fi";
import { BiLogoReact } from "react-icons/bi";

//* Image Sarana Prasarana
//* Toilet
import imageToilet from "./../../Assets/sarana-prasarana/toilet.jpeg";

//* Ruang Teori
import imageRuangTeori1 from "./../../Assets/sarana-prasarana/ruang-teori-1.jpeg";
import imageRuangTeori2 from "./../../Assets/sarana-prasarana/ruang-teori-2.jpeg";

//* Perpustakaan
import imagePerpustakaan from "./../../Assets/sarana-prasarana/perpustakaan.jpeg";

//* Parkiran Tamu
import imageParkiranTamu1 from "./../../Assets/sarana-prasarana/parkiran-tamu-1.jpeg";
import imageParkiranTamu2 from "./../../Assets/sarana-prasarana/parkiran-tamu-2.jpeg";

//* Parkiran Dosen
//* Mobil
import imageParkiranMobilDosen from "./../../Assets/sarana-prasarana/parkiran-mobil-dosen.jpeg";
//* Motor
import imageParkiranMotorDosen from "./../../Assets/sarana-prasarana/parkiran-motor-dosen.jpeg";

//* Parkiran Mahasiswa
import imageParkiranMahasiswa from "./../../Assets/sarana-prasarana/parkiran-mahasiswa.jpeg";

//* Parkiran Lab Komp
import imageLabKomp1 from "./../../Assets/sarana-prasarana/lab-komp-1.jpeg";
import imageLabKomp2 from "./../../Assets/sarana-prasarana/lab-komp-2.jpeg";

//* Koperasi
import imageKoperasi from "./../../Assets/sarana-prasarana/koperasi.jpeg";

//* Bem
import imageBem from "./../../Assets/sarana-prasarana/bem.jpeg";

//* Blm
import imageBlm from "./../../Assets/sarana-prasarana/blm.jpeg";

//* Fkui
import imageFkui from "./../../Assets/sarana-prasarana/fkui.jpeg";

//* Kantin
import imageKantin from "./../../Assets/sarana-prasarana/kantin.jpeg";

//* Ksr
import imageKsr from "./../../Assets/sarana-prasarana/ksr.jpeg";

//* Maliapala
import imageMaliapala from "./../../Assets/sarana-prasarana/maliapala.jpeg";

//* Masjid
import imageMasjid from "./../../Assets/sarana-prasarana/masjid.jpeg";

//* Ordani
import imageOrdani from "./../../Assets/sarana-prasarana/ordani.jpeg";

//* Pmk
import imagePmk from "./../../Assets/sarana-prasarana/pmk.jpeg";

//* Radio
import imageRadio from "./../../Assets/sarana-prasarana/radio.jpeg";

//* Teater
import imageTeater from "./../../Assets/sarana-prasarana/teater.jpeg";

import "react-calendar/dist/Calendar.css";
import LayoutTamplate from "../../Components/LayoutTamplate";

const refrention = [
  {
    img: elitaLink,
    desc: "Elita",
    link: "http://kuliah.politama.ac.id/",
  },
  {
    img: edlinkLink,
    desc: "EdLink",
    link: "https://edlink.id/",
  },
  {
    img: siakadLink,
    desc: "Siakad",
    link: "https://siakad.politama.ac.id/index.php/login",
  },
  {
    img: sisterLink,
    desc: "Sister",
    link: "http://sister.politama.ac.id/dashboard/",
  },
];

const saranaPrasarana = [
  {
    nama: "Toilet",
    path: [imageToilet],
  },
  {
    nama: "Ruang Teori",
    path: [imageRuangTeori1, imageRuangTeori2],
  },
  {
    nama: "Perpustakaan",
    path: [imagePerpustakaan],
  },
  {
    nama: "Parkiran Tamu",
    path: [imageParkiranTamu1, imageParkiranTamu2],
  },
  {
    nama: "Parkiran Motor Dosen",
    path: [imageParkiranMotorDosen],
  },
  {
    nama: "Parkiran Mobil Dosen",
    path: [imageParkiranMobilDosen],
  },
  {
    nama: "Parkiran Mahasiswa",
    path: [imageParkiranMahasiswa],
  },
  {
    nama: "Lab Komputer",
    path: [imageLabKomp1, imageLabKomp2],
  },
  {
    nama: "Koperasi",
    path: [imageKoperasi],
  },
  {
    nama: "BEM",
    path: [imageBem],
  },
  {
    nama: "BLM",
    path: [imageBlm],
  },
  {
    nama: "FKUI",
    path: [imageFkui],
  },
  {
    nama: "Kantin",
    path: [imageKantin],
  },
  {
    nama: "KSR",
    path: [imageKsr],
  },
  {
    nama: "Maliapala",
    path: [imageMaliapala],
  },
  {
    nama: "Masjid",
    path: [imageMasjid],
  },
  {
    nama: "Ordani",
    path: [imageOrdani],
  },
  {
    nama: "PMK",
    path: [imagePmk],
  },
  {
    nama: "Radio",
    path: [imageRadio],
  },
  {
    nama: "Teater",
    path: [imageTeater],
  },
];

const SaranaPrasaranaImage = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Sarana prasarana" },
    });
  }, []);
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Sarana Prasarana"}>
        <div className="w-full flex justify-center flex-col gap-10">
          {saranaPrasarana.map((image, index) => {
            return (
              <div key={index}>
                <h3 className="text-[23px] px-10 py-5 pb-1 font-bold md:text-start text-center">
                  {image.nama}
                </h3>
                {image.path.map((pathImage, index) => {
                  return (
                    <figure key={index} className="flex justify-center">
                      <img
                        className="rounded-md w-[80%]"
                        src={pathImage}
                        alt={image.nama}
                      />
                    </figure>
                  );
                })}
              </div>
            );
          })}
        </div>
      </LayoutTamplate>
    </Layout>
  );
};

export default SaranaPrasaranaImage;
