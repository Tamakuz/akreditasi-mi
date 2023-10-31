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
import DTamplate from "./../../../Components/akreditasi/led/bab2/Component/dTamplate"

const PointLkps = () => {
  const { colorMode } = useColorMode();
  return (
    <DTamplate endpoint={"poin-lkps"} title={"Point LKPS"} />
  );
};

export default PointLkps;
