import { Box, Flex, Text } from "@chakra-ui/react";
import Layout from "../../Components/Layout";
import Bab1  from "../../Components/akreditasi/bab1"
import Bab2  from "../../Components/akreditasi/bab2"
import Bab3  from "../../Components/akreditasi/bab3"


const DocAkreditasi = () => {
  return (
    <Layout>
      <Box className="px-10 py-5">
        <Text className="text-2xl font-semibold">
          Data Pendukung Akreditasi Manajemen Informatika
        </Text>
      </Box>
      <Flex className="flex-col gap-2 md:px-10 px-2 pb-10">
        <Bab1 />
        <Bab2 />
        <Bab3 />
      </Flex>
    </Layout>
  );
};

export default DocAkreditasi;
