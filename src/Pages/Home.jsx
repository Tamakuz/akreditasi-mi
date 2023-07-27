import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiLink } from "react-icons/fi";
import hero1 from "../Assets/hero1.jpg";
import hero2 from "../Assets/hero2.png";
import logoPolitama from "../Assets/logoPolitama.png";
import elitaLink from "../Assets/elita-link.png";
import edlinkLink from "../Assets/edlink-link.png";
import siakadLink from "../Assets/siakad-link.png";
import sisterLink from "../Assets/sister-link.png";
import ojBrand from "../Assets/ojs_brand.png";

const visi = [
  {
    text: "Pada tahun 2030 menjadi Program Studi Vokasional yang menghasilkan lulusan berkualitas dan unggul bidang Manajemen Informatika sebagai Programmer.",
  },
];

const mission = [
  {
    parent:
      "A.	Menyelenggarakan pendidikan dan pengajaran yang unggul dan berkualitas, yaitu :",
    body: [
      "Unggul pada penguasaan ilmu dan keterampilan Manajemen Informatika khususnya bidang pemrograman yang didukung penguasaan bidang multimedia",
      "Pembekalan kemampuan dalam team work, pembinaan individu kreatif inovatif dan pengembangan potensi diri.",
      "Suasana akademik yang kondusif untuk mendukung proses belajar-mengajar",
    ],
  },
  {
    parent:
      "B.	Menyelenggarakan penelitian terapan software aplikasi dan multimedia dengan menghasilkan karya ilmiah yang mampu mendukung pelaksanaan pembangunan nasional.",
  },
  {
    parent:
      "C.	Menyelenggarakan pengabdian kepada masyarakat dengan produk software aplikasi dan multimedia yang dihasilkan civitas akademika yang benar-benar dibutuhkan dan dimanfaatkan oleh masyarakat. ",
  },
  {
    parent:
      "D.	Membangun dan menyelenggarakan manajemen dan pelayanan yang unggul dan berkualitas, yaitu :",
    body: [
      "Budaya kerja dan budaya akademik yang profesional dan elegan.",
      "Pelayanan administrasi yang profesional.",
      "Menjamin kontrol kualipelaksanaan Tridharma Perguruan Tinggi.",
    ],
  },
  {
    parent:
      "E. Membina jalinan kerja sama dengan pihak-pihak eksternal yang berkompeten.",
  },
];

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
  {
    img: ojBrand,
    desc: "Jurnal",
    link: "http://jurnal.politama.ac.id/index.php/politeknosains",
  },
  {
    img: logoPolitama,
    desc: "PMB",
    link: "https://pmb.politama.ac.id/index.php/pendaftaran_pmb",
  },
];

const Home = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({ type: "UPDATE_PAGE", payload: "Home" });
  }, []);

  return (
    <Layout>
      <>
        <section className="relative w-full h-[400px]">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full h-full"
          >
            <SwiperSlide>
              <img className="w-full h-full object-cover" src={hero1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="w-full h-full object-cover" src={hero2} alt="" />
            </SwiperSlide>
          </Swiper>
          <div className="absolute top-0 z-10 w-full h-full flex justify-center items-center backdrop-brightness-50">
            <h1
              className="text-blue-500 text-4xl font-bold"
              style={{ textShadow: "5px 5px 10px rgba(0, 0, 0, 1)" }}
            >
              Manajemen Informatika
            </h1>
          </div>
        </section>

        <section className="w-full h-fit px-20 py-10 flex gap-10 justify-between item-center">
          <div className="w-[300px] h-full border-r border-gray-500">
            <div className="w-fit">
              <h1 className="text-3xl fonr-semibold text-gray-700 border-b-2 border-red-500">
                TAUTAN
              </h1>
            </div>
            <div className="w-full h-full flex flex-col gap-2">
              {refrention.map((ref, i) => {
                return (
                  <div
                    key={i}
                    className="relative h- group w-[150px] h-[150px] aspect-square overflow-hidden"
                  >
                    <img
                      src={ref.img}
                      className="w-full h-full"
                      alt="elita-link"
                    />
                    <div className="absolute opacity-0 group-hover:top-0 hover:opacity-100 duration-300 w-full h-full backdrop-brightness-75 flex justify-center items-center cursor-pointer">
                      <a
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

          <div className="w-full flex flex-col gap-5">
            <div className="w-full text-3xl fonr-semibold text-gray-700 border-b-2 border-red-500">
              <h1>VISI DAN MISI</h1>
            </div>
            <div className="flex gap-10">
              {/* Card Visi */}
              <div className="card w-full h-fit bg-base-100 shadow">
                <figure className="w-full h-[150px] border-b-2 border-red-500 ">
                  <img
                    className="w-full h-full object-cover"
                    src={logoPolitama}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">VISI</h2>
                  {visi.map((item, i) => (
                    <div key={i} className="flex gap-2 w-full h-fit">
                      <span className="text-gray-800 font-bold">{i + 1}.</span>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Card Misi */}
              <div className="card w-full h-fit bg-base-100 shadow">
                <figure className="w-full h-[150px] border-b-2 border-red-500 ">
                  <img
                    className="w-full h-full object-cover"
                    src={logoPolitama}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">MISI</h2>
                  {mission.map((misi, i) => (
                    <div key={i}>
                      <h6>{misi.parent}</h6>
                      {misi.body?.map((item, j) => (
                        <div key={j} className="flex gap-2 w-full h-fit">
                          <span className="text-sm text-gray-800 font-bold">
                            {j + 1}.
                          </span>
                          <p className="text-sm">{item}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Home;
