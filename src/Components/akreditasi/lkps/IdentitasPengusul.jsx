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

const IdentitasPengusul = () => {
  const { colorMode } = useColorMode();
  return (
    <Accordion allowMultiple>
      <AccordionItem
        className={`${
          colorMode === "dark" ? "bg-secondaryGray-900" : "bg-white"
        } border-none rounded-xl shadow p-3`}
      >
        <Text>
          <AccordionButton className="text-xl py-3">
            <Box as="span" flex="1" textAlign="left" className="font-semibold">
              Identitas Pengusul
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3} className="flex flex-col gap-2">
          <TamplateAkreditasi endpoint={"identitas-pengusul"} />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default IdentitasPengusul;
