import React from 'react'
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { Link } from "react-router-dom";

export const KompetisiGame = () => {
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Dokumentasi Mahasiswa Kompetisi Game"}>
        <div className="w-full flex flex-col gap-10">
          <h3 className="text-[23px] px-10 font-bold">Kompetisi Game</h3>
          <div className="flex flex-wrap">
            <Link
              to="https://drive.google.com/drive/folders/1B8T4Gkz0cFeK-ZA9zzqjl-rlJzYz_PdD"
              target="_blank"
              className="underline underline-offset-1 text-green-600 px-10"
            >
              Informasi kompetisi game
            </Link>
          </div>
        </div>
      </LayoutTamplate>
    </Layout>
  );
}

export default KompetisiGame