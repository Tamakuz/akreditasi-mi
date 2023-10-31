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
import TamplateAkreditasi from "./pointLkps/template";

const PointLkps = () => {
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
              Point Lkps
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3} className="flex flex-col gap-2">
          <TamplateAkreditasi
            endpoint={"a"}
            title={"Tata Pamong, Tata Kelola, dan Kerjasama"}
          />
          <TamplateAkreditasi
            endpoint={"a"}
            title={"Visi, Misi, Tujuan dan Strategi"}
          />
          <TamplateAkreditasi
            endpoint={"a"}
            title={"Mahasiswa"}
          />
          <TamplateAkreditasi
            endpoint={"a"}
            title={"Sumber Daya Manusia"}
          />
          <TamplateAkreditasi
            endpoint={"a"}
            title={"Keuangan, Sarana dan Prasarana"}
          />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PointLkps;
