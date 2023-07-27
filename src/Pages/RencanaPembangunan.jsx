import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";

const RencanaPembangunan = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Rencana Pembangunan" },
    });
  }, []);

  return (
    <Layout>
      <h1>Rencana Pembangunan Page</h1>
    </Layout>
  );
};

export default RencanaPembangunan;
