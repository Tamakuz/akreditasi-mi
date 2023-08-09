import React from "react";
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";

const Kai = () => {
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Dokumentasi Mahasiswa Kai"}>
        <div className="w-full flex justify-center flex-col gap-10">
          <h3 className="text-[23px] px-10 py-5 pb-1 font-bold md:text-start text-center">
            Kai
          </h3>

          <figure className="flex justify-center">
            <img
              className="rounded-md w-[80%]"
              src="https://unsplash.com/photos/phIFdC6lA4E"
              alt="GAmbar"
            />
          </figure>
        </div>
      </LayoutTamplate>
    </Layout>
  );
};

export default Kai;
