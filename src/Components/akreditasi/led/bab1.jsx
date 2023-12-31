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
import TamplateAkreditasi from "./bab2/tamplate";

const Bab2 = () => {
  const { colorMode } = useColorMode();
  return (
    <Accordion allowMultiple>
      <AccordionItem
        className={`${
          colorMode === "dark" ? "bg-secondaryGray-900" : "bg-secondaryGray-300"
        } border-none rounded-xl`}
      >
        <Text>
          <AccordionButton className="text-xl py-3">
            <Box as="span" flex="1" textAlign="left">
              Bab 1 Pendahuluan
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3} className="flex flex-col gap-2">
          <TamplateAkreditasi endpoint={"a"} title={"A. Dasar Penyusun"} />
          <TamplateAkreditasi
            endpoint={"b"}
            title={"B. TIM PENYUSUN DAN TANGGUNGJAWAB"}
          />
          <TamplateAkreditasi
            endpoint={"b"}
            title={"C. MEKANISME KERJA PENYUSUNAN EVALUASI DIRI"}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Bab2;
