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

const IdentitasPengusul = () => {
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
              Identitas Pengusul
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </Text>
        <AccordionPanel pb={3} className="flex flex-col gap-2">
          {/* NEED DATA */}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default IdentitasPengusul;
