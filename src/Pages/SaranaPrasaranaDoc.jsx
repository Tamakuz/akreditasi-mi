import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";

const SaranaPrasaranaDoc = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Sarana Prasarana" },
    });
  }, []);

  return (
    <Layout>
      <h1>Sarana Prasarana Doc Page</h1>
    </Layout>
  );
};

export default SaranaPrasaranaDoc;
