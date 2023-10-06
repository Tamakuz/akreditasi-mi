import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import Layout from "../../Components/Layout";
import Bab1 from "../../Components/akreditasi/bab1";
import { GlobalState } from "../../Context/Context";
import { useContext, useEffect } from "react";

const DocAkreditasi = () => {
  const { dispatch } = useContext(GlobalState);
  const { colorMode } = useColorMode();
  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Pendukung akreditasi" },
    });
  }, []);
  return (
    <Layout>
      <Box
        className={`px-10 py-5 ${
          colorMode === "dark" ? "bg-brandTabs-900" : "bg-blue-50"
        }`}
      >
        <Text className="text-2xl font-semibold">
          Data Pendukung Akreditasi Manajemen Informatika
        </Text>
      </Box>
      <Flex
        className={`flex-col gap-2 md:px-10 px-2 pb-10 ${
          colorMode === "dark" ? "bg-brandTabs-900" : "bg-blue-50"
        }`}
      >
        <Bab1 />
        {/* <Bab2 />
        <Bab3 /> */}
      </Flex>
    </Layout>
  );
};

export default DocAkreditasi;
