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
import miPagi from "../../Assets/jadwal/mi-pagi.jpg";
import miSore from "../../Assets/jadwal/mi-sore.jpg";

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

const Jadwal = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Jadwal" },
    });
  }, []);

  return (
    <Layout>
      <LayoutTamplate titleHeader={"Jadwa D3 Manajemen Informatika"}>
        <div className="flex flex-col gap-10">
          <img src={miPagi} alt="miPagi" />
          <img src={miSore} alt="miSore" />
        </div>
      </LayoutTamplate>
    </Layout>
  );
};

export default Jadwal;
