import { Box, Flex, Text, useColorMode } from "@chakra-ui/react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";
import { useContext, useEffect } from "react";
import Bab1 from "../../Components/akreditasi/led/bab1";
import Bab2 from "../../Components/akreditasi/led/bab2";

const Led = () => {
  const { dispatch } = useContext(GlobalState);
  const { colorMode } = useColorMode();

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Pendukung Akreditasi", subPage: "LED" },
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
          Data Pendukung Akreditasi LED
        </Text>
      </Box>
      <Flex
        className={`flex-col gap-2 md:px-10 px-2 pb-10 ${
          colorMode === "dark" ? "bg-brandTabs-900" : "bg-blue-50"
        }`}
      >
        <Bab1 />
        <Bab2 />
      </Flex>
    </Layout>
  );
};

export default Led;
