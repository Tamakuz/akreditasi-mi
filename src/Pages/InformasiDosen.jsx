import { useContext, useEffect } from "react";
import Layout from "../Components/Layout";
import { GlobalState } from "../Context/Context";
import CardProfile from "../Components/InformasiDosen/CardProfile";

const InformasiDosen = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Informasi", subPage: "Informasi Dosen" },
    });
  }, []);
  return (
    <Layout>
      <section className="px-20 pb-10 flex flex-col gap-5">
        <h1 className="text-[30px] px-10 py-10 pb-5 font-bold ">
          Informasi Dosen
        </h1>

        <CardProfile />
      </section>
    </Layout>
  );
};

export default InformasiDosen;
