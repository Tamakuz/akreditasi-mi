import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";

const Kurikulum = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Kurikulum" },
    });
  }, []);

  return (
    <Layout>
      <h1>Kurikulum Page</h1>
    </Layout>
  );
};

export default Kurikulum;
