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

const IdentitasTimPenyusunLkps = () => {
  const { colorMode } = useColorMode();
  return <DTamplate endpoint={"identitas-tim-penyusun"} title={"Identitas Tim Penyusun LKPS"} />;
};

export default IdentitasTimPenyusunLkps;
