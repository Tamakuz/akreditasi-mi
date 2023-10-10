import { useGetData } from "../../hooks/apiMethod";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const PenelitianLppm = () => {
  const apiUrl =
    "https://knowledgeable-painted-guarantee.glitch.me/penelitian_lppm";
  const { datas, isLoading } = useGetData(apiUrl);

  return (
    <div className="overflow-x-auto w-full md:w-[calc(100% - 300px)]">
      <TableContainer>
        <Table variant="striped" colorScheme="blue">
          <Thead>
            <Tr>
              <Th className="text-base text-center w-[50px]">No</Th>
              <Th className="text-base text-center w-[400px]">Deskripsi</Th>
              <Th className="text-base text-center w-[100px]">Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {isLoading ? (
              <Tr>
                <Td colSpan={3}>Loading...</Td>
              </Tr>
            ) : (
              datas.map((b, i) => {
                return (
                  <Tr key={i}>
                    <Td className="text-center">{i + 1}</Td>
                    <Td>{b.deskripsi}</Td>
                    <Td className="text-center">
                      <a
                        rel="noopener noreferrer"
                        href={b.link}
                        target="_blank"
                        className="text-black bg-yellow-300 px-[8px] py-[5px] rounded-md shadow-sm"
                      >
                        Download
                      </a>
                    </Td>
                  </Tr>
                );
              })
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PenelitianLppm;
