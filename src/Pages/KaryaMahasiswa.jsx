import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";

const KaryaMahasiswa = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Karya Mahasiswa" },
    });
  }, []);

  return (
    <Layout>
      <h1>Karya Mahasiswa Page</h1>
    </Layout>
  );
};

export default KaryaMahasiswa;
