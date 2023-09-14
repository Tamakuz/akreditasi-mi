import React, { useContext, useEffect } from "react";
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { GlobalState } from "../../Context/Context";
import { Box, Img, Stack } from "@chakra-ui/react";
import prestasi1 from "../../Assets/prestasi/preastasi1.jpg";
import prestasi2 from "../../Assets/prestasi/preastasi2.jpg";
import prestasi3 from "../../Assets/prestasi/prestasi3.png";
import prestasi4 from "../../Assets/prestasi/prestasi4.png";

const Prestasi = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Prestasi" },
    });
  }, []);

  return (
    <Layout>
      <LayoutTamplate titleHeader={"Prestasi Non Akademik"}>
        <Box className="grid grid-cols-2 gap-5">
          <Img src={prestasi1} alt="prestasi1" className="rounded-xl shadow"/>
          <Img src={prestasi2} alt="prestasi2" className="rounded-xl shadow"/>
          <Img src={prestasi3} alt="prestasi2" className="rounded-xl shadow"/>
          <Img src={prestasi4} alt="prestasi2" className="rounded-xl shadow"/>
        </Box>
      </LayoutTamplate>
    </Layout>
  );
};

export default Prestasi;
