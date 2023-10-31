import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import C from "./bab2/c";
import TamplateAkreditasi from "./bab2/tamplate";
import D from "./bab2/d";

const Bab2 = () => {
  const { colorMode } = useColorMode();
  return (
    <Accordion allowMultiple className="mb-[100vh]">
      <AccordionItem
        className={`${
          colorMode === "dark" ? "bg-secondaryGray-900" : "bg-secondaryGray-300"
        } border-none rounded-xl`}
      >
        <Text>
          <AccordionButton className="text-xl py-3">
            <Box as="span" flex="1" textAlign="left">
              Bab 2 Laporan Evaluasi
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3} className="flex flex-col gap-2">
          <TamplateAkreditasi endpoint={"a"} title={"A. Kondisi Ekternal"} />
          <TamplateAkreditasi
            endpoint={"b"}
            title={"B. Profit Unit Pengelola Program Studi"}
          />
          <C />
          <D />
          <TamplateAkreditasi
            endpoint={"e"}
            title={
              "E. Analisis dan Penetapan Program Pengembangan Unit Pengelola"
            }
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Bab2;
