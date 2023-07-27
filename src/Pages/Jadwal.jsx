import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";

const Jadwal = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Jadwal" },
    });
  }, []);

  return (
    <Layout>
      <h1>Jadwal Page</h1>
    </Layout>
  );
};

export default Jadwal;
