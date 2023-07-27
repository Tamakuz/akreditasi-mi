import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";
import Calendar from "react-calendar";
import elitaLink from "../Assets/elita-link.png";
import edlinkLink from "../Assets/edlink-link.png";
import siakadLink from "../Assets/siakad-link.png";
import sisterLink from "../Assets/sister-link.png";
import { FiLink } from "react-icons/fi";
import { BiLogoReact } from "react-icons/bi";

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

const SaranaPrasaranaDoc = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Sarana Prasarana" },
    });
  }, []);

  return (
    <Layout>
      <section className="px-20 py-10 flex flex-col gap-10 justify-center">
        <div className="w-full flex flex-col justify-center items-center mb-10">
          <span>
            <BiLogoReact className="text-[100px] text-center text-blue-500 animate-pulse" />
          </span>
          <p className="text-[30px]">Sarana Prasarana Manajemen Informatika</p>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col gap-10">
            {/* Content */}
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

export default SaranaPrasaranaDoc;
