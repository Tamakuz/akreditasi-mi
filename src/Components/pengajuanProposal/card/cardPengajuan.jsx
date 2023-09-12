import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { LiaSpinnerSolid } from "react-icons/lia";

const CardPengajuan = ({ data, isLoading }) => {
  const {colorMode} =useColorMode()

  return (
    <Card
      className={`shadow-md rounded-xl h-fit w-[400px] ${
        colorMode === "dark" ? "bg-secondaryGray-900" : "bg-white"
      }`}
    >
      <CardBody className="p-0">
        <Box className="relative">
          <Image
            src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" // Ganti dengan URL gambar PDF
            alt="PDF"
            className="h-[100px] w-full object-cover rounded-t-xl"
          />
          <Flex className="absolute text-2xl text-yellow-500 font-semibold top-0 lef-0 w-full h-full justify-center items-center backdrop-blur-md gap-2 rounded-t-xl">
            <LiaSpinnerSolid className="animate-spin" />
            <Text>{data.status}</Text>
          </Flex>
        </Box>
        <Box className="p-3">
          <Heading size="md">{data.judul}</Heading>
          <Divider my={2} />
          <Text className="leading-tight" noOfLines={3}>
            {data.deskripsi}
          </Text>
          <Stack spacing={0} mt={4}>
            <Text>
              <strong>Nama Pengirim:</strong> {data.nama}
            </Text>
            <Text>
              <strong>Tanggal Pengiriman:</strong> {data.tanggalPengiriman}
            </Text>
            <Text>
              <strong>Status:</strong> {data.status}
            </Text>
            <Text>
              <strong>Link:</strong>{" "}
              <Link href={data.link} target="_blank" rel="noopener noreferrer">
                {data.link}
              </Link>
            </Text>
          </Stack>
        </Box>
      </CardBody>
    </Card>
  );
};

export default CardPengajuan;
