import React from 'react'
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { Link } from "react-router-dom";

const Sosialisasi = () => {
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Dokumentasi Mahasiswa Magang"}>
        <div className="w-full flex flex-col gap-10">
          <h3 className="text-[23px] px-10 font-bold">Sosialisasi</h3>
          <div className="flex flex-wrap">
            <Link
              to="https://drive.google.com/drive/folders/1oFG6-oaiR5LKgaWHTN2pjjqEkzg8UE97"
              target="_blank"
              className="underline underline-offset-1 text-green-600 px-10"
            >
              Informasi bagi takjil 1
            </Link>
            <Link
              to="https://drive.google.com/drive/folders/105ZMR9LOmb98H8kAp282IySoEecurj-M"
              target="_blank"
              className="underline underline-offset-1 text-green-600 px-10"
            >
              Informasi bagi takjil 2
            </Link>
          </div>
        </div>
      </LayoutTamplate>
    </Layout>
  );
}

export default Sosialisasi