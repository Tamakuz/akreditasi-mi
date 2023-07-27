import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";

const ProfilJurusan = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({ type: "UPDATE_PAGE", payload: {page: "Dokumentasi Jurusan", subPage: "Profil Jurusan"} });
  }, []);

  return (
    <Layout>
      <h1>Profile Jurusan Page</h1>
    </Layout>
  );
};

export default ProfilJurusan;
