import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { Link } from "react-router-dom";

const Hmj = () => {
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Dokumentasi Mahasiswa HMJ"}>
        <div className="w-full flex flex-col gap-10">
          <h3 className="text-[23px] px-10 py-5 pb-1 font-bold md:text-start text-center">
            HMJ
          </h3>

          <Link
            to="https://drive.google.com/drive/folders/1P7wUrNUVYC3nWnYLMMzPuHIXEr8NvPVB?usp=sharing"
            target="_blank"
          >
            <span className="underline underline-offset-1 bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full ml-10">
              Informasi HMJ
            </span>
          </Link>
        </div>
      </LayoutTamplate>
    </Layout>
  );
};

export default Hmj;
