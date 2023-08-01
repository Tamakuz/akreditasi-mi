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

import "react-calendar/dist/Calendar.css";

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
];

const SaranaPrasaranaImage = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({ type: "UPDATE_PAGE", payload: "Sarana prasarana" });
  }, []);
  return (
    <Layout>
      <section className="px-20 py-10 flex flex-col gap-10 justify-center">
        <div className="w-full flex flex-col justify-center items-center mb-10">
          <span>
            <BiLogoReact className="text-[100px] text-center text-blue-500 animate-pulse" />
          </span>
          <h1 className="text-[30px]">Sarana Prasarana</h1>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex justify-center flex-col gap-10">
            {saranaPrasarana.map((image) => {
              return (
                <>
                  <h3 className="text-[23px] px-10 py-5 pb-1 font-bold">{image.nama}</h3>
                  {image.path.map((pathImage, index) => {
                    return (
                      <figure key={index}>
                        <img className="ml-28 rounded-md w-[80%]" src={pathImage} alt={image.nama} />
                      </figure>
                    );
                  })}
                </>
              );
            })}
          </div>
          <div className="w-[300px] flex flex-col gap-3">
            <div className="w-full border-b border-blue-500">
              <p className="text-bold text-[20px] text-gray-700">Calender</p>
            </div>
            <Calendar value={new Date()} />
            <div className="w-full border-b border-blue-500">
              <p className="text-bold text-[20px] text-gray-700">Tautan</p>
            </div>
            <div className="flex flex-wrap gap-5">
              {refrention.map((ref, i) => {
                return (
                  <div
                    key={i}
                    className="relative h- group w-[130px] aspect-square overflow-hidden"
                  >
                    <img
                      src={ref.img}
                      className="w-full h-full"
                      alt="elita-link"
                    />
                    <div className="absolute opacity-0 group-hover:top-0 hover:opacity-100 duration-300 w-full h-full backdrop-brightness-75 flex justify-center items-center cursor-pointer">
                      <a
                        rel="noopener noreferrer"
                        href={ref.link}
                        target="_blank"
                        className="bg-green-300 px-2 py-2 rounded w-[80px] h-[80px] flex flex-col justify-center items-center"
                      >
                        <FiLink className="text-3xl text-gray-700" />
                        <p>{ref.desc}</p>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SaranaPrasaranaImage;
