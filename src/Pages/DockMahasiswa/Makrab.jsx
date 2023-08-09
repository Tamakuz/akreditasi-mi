import React from 'react'
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { Link } from "react-router-dom";

const Makrab = () => {
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Dokumentasi Mahasiswa Makrab"}>
        <div className="w-full flex flex-col gap-10">
          <h3 className="text-[23px] px-10 font-bold">Makrab</h3>
          <div className='flex flex-wrap'>
            <Link
              to="https://drive.google.com/drive/folders/10sakWy9FO5snBkCY721vvB4V4p8OjAzH"
              target="_blank"
              className="underline underline-offset-1 text-green-600 px-10"
            >
              Informasi makrab 1
            </Link>
            <Link
              to="https://drive.google.com/drive/folders/1UlUyGm4bMLzD6GuPVjel3874wh3wUJ-n"
              target="_blank"
              className="underline underline-offset-1 text-green-600 px-10"
            >
              Informasi makrab 2
            </Link>
          </div>
        </div>
      </LayoutTamplate>
    </Layout>
  );
}

export default Makrab