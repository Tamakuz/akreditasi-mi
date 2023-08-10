import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { Link } from "react-router-dom";

const Makrab = () => {
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Dokumentasi Mahasiswa Makrab"}>
        <div className="w-full flex flex-col gap-10">
          <h3 className="text-[23px] px-10 font-bold">Makrab</h3>
          <div className="flex flex-wrap">
            <Link
              to="https://drive.google.com/drive/u/0/mobile/folders/1t3WqYhb38I-3bpH16n47QeHOvzifM1Qh"
              target="_blank"
            >
              <span className="underline underline-offset-1 bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full ml-10">
                Informasi makrab 1
              </span>
            </Link>
          </div>
        </div>
      </LayoutTamplate>
    </Layout>
  );
}

export default Makrab