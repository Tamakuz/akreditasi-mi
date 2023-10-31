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
import DTamplate from "./../../../Components/akreditasi/led/bab2/Component/dTamplate";

const IdentitasPengusul = () => {
  const { colorMode } = useColorMode();
    return (
      <DTamplate
        endpoint={"identitas-pengusul"}
        title={"Identitas Pengusul"}
      />
    );

};

export default IdentitasPengusul;
