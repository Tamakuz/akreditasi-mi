import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { Link } from "react-router-dom";

import { BsFillCalendarDateFill } from "react-icons/bs";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { GlobalState } from "../../Context/Context";

const imageYearData = {
  2023: [
    {
      src: "https://images.unsplash.com/photo-1629115928899-bd61fea564c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViaW5hcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Gambar 1 - Tahun 2023",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661682777553-d620975e42c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2ViaW5hcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      alt: "Gambar 2 - Tahun 2023",
    },
  ],
};

const Webinar = () => {
  const [year, setYear] = useState(2023);
  const { colorMode } = useColorMode();
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Mahasiswa", subPage: "Webinar" },
    });
  }, []);

  return (
    <Layout>
      <LayoutTamplate titleHeader={"Dokumentasi Mahasiswa Webinar"}>
        <section className="w-[100%]">
          <Flex className="h-fit flex-col gap-3 inline-block">
            <h3 className="text-[30px] px-10 font-bold">Webinar</h3>
            <Box
              className={`${
                colorMode === "dark"
                  ? "bg-secondaryGray-900"
                  : "bg-secondaryGray-300"
              } rounded-xl py-5 px-10`}
            >
              <h2 className="flex items-center gap-2 font-semibold text-[27px]">
                <BsFillCalendarDateFill className="text-brandTabs-300 text-[27px]" />{" "}
                Tahun :{" "}
              </h2>
              <Box className="mt-2 flex gap-3">
                <Button
                  onClick={() => setYear(2023)}
                  className="bg-brandTabs-300 hover:bg-brandTabs-300  text-brandTabs-100"
                  size="md"
                >
                  2023
                </Button>
              </Box>
            </Box>
            <Box
              className={`${
                colorMode === "dark"
                  ? "bg-secondaryGray-900"
                  : "bg-secondaryGray-300"
              } rounded-xl`}
            >
              <Box className="px-10 py-3">
                <h1 className="text-[27px] font-semibold">Recap {year}</h1>
              </Box>
              <Divider />
              <Box className="px-10 py-5 grid xl:grid-cols-2 gap-2">
                {!imageYearData ? (
                  <tr>
                    <td>
                      <p>Loading....</p>
                    </td>
                  </tr>
                ) : (
                  imageYearData[year].map((image, index) => {
                    return (
                      <Image
                        key={index}
                        className="aspect-video w-full object-cover rounded-xl border border-brandTabs-300 shadow-md"
                        src={image.src}
                        alt={image.alt}
                      />
                    );
                  })
                )}
              </Box>
            </Box>
            <Link to="#" target="_blank" className="flex justify-center">
              <span className="bg-green-600 text-white px-10 inline-block px-3 py-1 rounded-full ml-10">
                Belum memiliki data...
              </span>
            </Link>
          </Flex>
        </section>
      </LayoutTamplate>
    </Layout>
  );
};

export default Webinar;
