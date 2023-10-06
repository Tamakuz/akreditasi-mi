import { useContext, useEffect } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";
import mipagi1 from "../../Assets/jadwal/mipagi-1.jpg"
import mipagi2 from "../../Assets/jadwal/mipagi-2.jpg"
import mipagi3 from "../../Assets/jadwal/mipagi-3.jpg"
import misore1 from "../../Assets/jadwal/misore-1.jpg"
import misore2 from "../../Assets/jadwal/misore-2.jpg"

import "react-calendar/dist/Calendar.css";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { Img, Stack } from "@chakra-ui/react";

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
      <LayoutTamplate titleHeader={"Jadwa D3 Manajemen Informatika"}>
        <Stack className="gap-10 w-full px-10">
          <Img src={mipagi1} />
          <Img src={mipagi2} />
          <Img src={mipagi3} />
          <Img src={misore1} />
          <Img src={misore2} />
        </Stack>
      </LayoutTamplate>
    </Layout>
  );
};

export default Jadwal;
