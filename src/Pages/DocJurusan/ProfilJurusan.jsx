import { useContext, useEffect } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";
import LayoutTamplate from "../../Components/LayoutTamplate";
import cpl from "../../../cpl.json";

const ProfilJurusan = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Profil Jurusan" },
    });
  }, []);

  return (
    <Layout>
      <LayoutTamplate titleHeader={"Profil Jurusan Manajemen Informatika"}>
        <div className="w-full md:p-10">
          <div>
            <h1 className="text-3xl font-bold px-3 py-10">Profile Jurusan</h1>
            <table className="table text-base ">
              <tbody>
                <tr>
                  <td className="py-1 md:w-[230px] w-[100px] font-semibold">
                    Kode Profil <span>:</span>
                  </td>
                  <td className="py-1">PL-1</td>
                </tr>
                <tr>
                  <td className="py-1 md:w-[230px] w-[100px] font-semibold">
                    Profil Lulusan <span>:</span>
                  </td>
                  <td className="py-1">Programming</td>
                </tr>
                <tr>
                  <td className="py-1 md:w-[230px] w-[100px] font-semibold">
                    Deskripsi Profil Jurusan <span>:</span>
                  </td>
                  <td className="py-1">
                    <ul>
                      <li className="py-1">
                        <span className="font-semibold">DS-1 : </span>
                        Lulusan mampu membangun dan mengembangkan aplikasi dan
                        sistem informasi yang terintegrasi dengan sistem
                        database, berbasis pemrograman mobile/android, web, dan
                        desktop baik single user maupun multiuser dengan
                        penguasaan bahasa pemrograman berorientasi obyek.
                      </li>
                      <li className="py-1">
                        <span className="font-semibold">DS-2 : </span>
                        Lulusan memiliki kemampuan dalam menganalisis,
                        merancang, dan mengimplementasikan sistem informasi
                        menggunakan metode yang tepat dan teknologi terkini.
                      </li>
                      <li className="py-1">
                        <span className="font-semibold">DS-3 : </span>
                        Lulusan mampu bekerja secara profesional dalam tim
                        maupun mandiri, serta memiliki kemampuan berkomunikasi
                        dan beradaptasi dengan lingkungan kerja.
                      </li>
                      <li className="py-1">
                        <span className="font-semibold">DS-4 : </span>
                        Lulusan memiliki integritas moral, etika profesional,
                        dan rasa tanggung jawab dalam melaksanakan tugas di
                        bidang teknologi informasi.
                      </li>
                      <li className="py-1">
                        <span className="font-semibold">DS-5 : </span>
                        Lulusan memiliki kesadaran terhadap pentingnya
                        pengembangan diri dan ilmu pengetahuan serta kemampuan
                        dalam memahami perkembangan teknologi informasi yang
                        mutakhir.
                      </li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h1 className="text-2xl font-bold px-3 py-10">
              CPL (Capaian Pembelajaran Lulusan) : 4 aspek (S, KU, KK, dan P)
            </h1>
            <div className="mb-5">
              <h3 className="text-xl font-semibold px-3">⦁ Sikap</h3>
              <div className="pl-10">
                {cpl.sikap.map((csikap, i) => {
                  return (
                    <ul key={i}>
                      <li className="py-1">
                        <span className="font-semibold">S{i + 1} : </span>{" "}
                        {csikap}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="mb-5">
              <h3 className="text-xl font-semibold px-3">
                ⦁ Keterampilan Umum
              </h3>
              <div className="pl-10">
                {cpl.ketrampilan_umum.map((csikap, i) => {
                  return (
                    <ul key={i}>
                      <li className="py-1">
                        <span className="font-semibold">KU{i + 1} : </span>{" "}
                        {csikap}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className="mb-5">
              <h3 className="text-xl font-semibold px-3">
                ⦁ Keterampilan Khusus
              </h3>
              <div className="pl-10">
                {cpl.ketrampilan_khusus.map((csikap, i) => {
                  return (
                    <ul key={i}>
                      <li className="py-1">
                        <span className="font-semibold">KK{i + 1} : </span>{" "}
                        {csikap}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </LayoutTamplate>
    </Layout>
  );
};

export default ProfilJurusan;
