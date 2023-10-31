import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";
import { useContext, useEffect } from "react";
import PointLkps from "../../Components/akreditasi/lkps/PointLkps";
import IdentitasTimPenyusunLkps from "../../Components/akreditasi/lkps/IdentitasTimPenyusunLkps";
import IdentitasPengusul from "../../Components/akreditasi/lkps/IdentitasPengusul";

const Lkps = () => {
  const { dispatch } = useContext(GlobalState);
  const { colorMode } = useColorMode();

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Pendukung Akreditasi", subPage: "LKPS" },
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
          Data Pendukung Akreditasi LKPS
        </Text>
      </Box>
      <Flex
        className={`flex-col gap-2 md:px-10 px-2 pb-10 ${
          colorMode === "dark" ? "bg-brandTabs-900" : "bg-blue-50"
        }`}
      >
        <IdentitasPengusul />
        <IdentitasTimPenyusunLkps />
        <PointLkps />
      </Flex>
    </Layout>
  );
};

export default Lkps;
