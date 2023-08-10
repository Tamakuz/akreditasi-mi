import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { Link } from "react-router-dom";

const Seminar = () => {
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Dokumentasi Mahasiswa Magang"}>
        <div className="w-full flex flex-col gap-10">
          <h3 className="text-[23px] px-10 py-5 pb-1 font-bold md:text-start text-center">
            Seminar
          </h3>

          <Link
            to="https://drive.google.com/drive/folders/10sakWy9FO5snBkCY721vvB4V4p8OjAzH"
            target="_blank"
          >
            <span className="underline underline-offset-1 bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full ml-10">
              -
            </span>
          </Link>
        </div>
      </LayoutTamplate>
    </Layout>
  );
}

export default Seminar