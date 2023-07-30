import React from "react";
import logoPolitama from "../Assets/logoPolitama.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-20 bg-gray-300 text-base-content">
      <div>
        <img src={logoPolitama} className="w-[70px] h-[70px]" alt="" />
        <p>
          Politeknik Pratama Mulia
          <br />
          Jl. Haryo Panular No.18A, Panularan, Kec. Laweyan, <br /> Kota
          Surakarta, Jawa Tengah 57149
        </p>
      </div>
      <div>
        <span className="footer-title">Alternatif</span>
        <Link
          to={"/dokumentasi-jurusan/profil-jurusan"}
          className="link link-hover"
        >
          Profil Jurusan
        </Link>
        <Link to={"/dokumentasi-jurusan/kurikulum"} className="link link-hover">Kurikulum</Link>
        <Link to={"/dokumentasi-jurusan/jadwal"} className="link link-hover">Jadwal</Link>
        <Link to={"/dokumentasi-jurusan/karya-mahasiswa"} className="link link-hover">Karya Mahasiswa</Link>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0152979646873!2d110.81180577470991!3d-7.573310292440911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a167c11e566c5%3A0x84dda233930e297b!2sPOLITAMA%20Politeknik%20Pratama%20Mulia!5e0!3m2!1sid!2sid!4v1690185796852!5m2!1sid!2sid"
          width="350"
          height="200"
          className="shadow-xl"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
