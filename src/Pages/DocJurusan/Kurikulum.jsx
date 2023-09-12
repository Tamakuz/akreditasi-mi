import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";

import "react-calendar/dist/Calendar.css";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { useGetData } from "../../hooks/apiMethod";
import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Kurikulum = () => {
  const apiUrl = "https://knowledgeable-painted-guarantee.glitch.me/kurikulums";
  const { dispatch } = useContext(GlobalState);
  const { datas, isLoading } = useGetData(apiUrl);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Dokumentasi Jurusan", subPage: "Kurikulum" },
    });
  }, []);

  return (
    <Layout>
      <LayoutTamplate titleHeader={"Kurikulum D3 Manajemen Informatika"}>
        <div className="overflow-x-auto w-full md:w-[calc(100% - 300px)]">
          <TableContainer>
            <Table variant="striped" colorScheme="blue">
              <TableCaption>T/P : Teori / Praktek</TableCaption>
              <Thead>
                <Tr>
                  <Th className="text-base w-[50px]">No</Th>
                  <Th className="text-base text-center">Id</Th>
                  <Th className="text-base">Mata Kuliah</Th>
                  <Th className="text-base">SKS</Th>
                  <Th className="text-base">T/P</Th>
                  <Th className="text-base">Semester</Th>
                </Tr>
              </Thead>
              <Tbody>
                {isLoading ? (
                  <Tr>
                    <Td colSpan={6}>Loading...</Td>
                  </Tr>
                ) : (
                  datas.map((data, index) => (
                    <Tr key={index}>
                      <Td className="text-center">{index + 1}</Td>
                      <Td>{data.id}</Td>
                      <Td>{data.matkul}</Td>
                      <Td className="text-center">{data.sks}</Td>
                      <Td className="text-center">{data.tp ? "T" : "P"}</Td>
                      <Td className="text-center">{data.semester}</Td>
                    </Tr>
                  ))
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </LayoutTamplate>
    </Layout>
  );
};

export default Kurikulum;
