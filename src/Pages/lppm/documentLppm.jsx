import React, { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { GlobalState } from "../../Context/Context";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import PengabdianLppm from "../../Components/lppm/PengabdianLppm";
import PenelitianLppm from "../../Components/lppm/PenelitianLppm";
import JurnalLppm from "../../Components/lppm/Jurnal";
import HakiLppm from "../../Components/lppm/Haki";
import RoadMapLppm from "../../Components/lppm/RoadMap";
import PedomanLppm from "../../Components/lppm/PedomanLppm";
import RenstraLppm from "../../Components/lppm/RenstraLppm";
import {
  FaBookReader,
  FaChartLine,
  FaFileAlt,
  FaFlask,
  FaHandsHelping,
  FaMapSigns,
  FaShieldAlt,
} from "react-icons/fa";

const dataButton = [
  {
    title: "Dokumen Penelitian",
    component: <PenelitianLppm />,
    icon: FaFlask,
  },
  {
    title: "Dokumen Pengabdian",
    component: <PengabdianLppm />,
    icon: FaHandsHelping,
  },
  {
    title: "Dokumen Jurnal",
    component: <JurnalLppm />,
    icon: FaBookReader,
  },
  {
    title: "Dokumen Haki",
    component: <HakiLppm />,
    icon: FaShieldAlt,
  },
  {
    title: "Dokumen RoadMap",
    component: <RoadMapLppm />,
    icon: FaMapSigns,
  },
  {
    title: "Dokumen Pedoman",
    component: <PedomanLppm />,
    icon: FaFileAlt,
  },
  {
    title: "Dokumen Renstra",
    component: <RenstraLppm />,
    icon: FaChartLine,
  },
];

const DocumentLppm = () => {
  const { dispatch } = useContext(GlobalState);
  const [titleCompoonent, setTitleComponent] = useState("Dokumen Penelitian")
  const [component, setComponent] = useState(<PenelitianLppm />);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "LPPM", subPage: "Dokumen Lppm" },
    });
  }, []);

  return (
    <Layout>
      <LayoutTamplate titleHeader={"Dokumen Lppm"}>
        <Flex className="flex-col gap-10">
          <Flex className="flex-wrap gap-2 justify-center">
            {dataButton.map((btn, index) => (
              <Button
                leftIcon={<btn.icon />}
                colorScheme="blue"
                key={index}
                onClick={() => {
                  setTitleComponent(btn.title)
                  setComponent(btn.component);
                }}
              >
                {btn.title}
              </Button>
            ))}
          </Flex>
          <Flex className="flex-col gap-5">
            <Text className="text-center text-3xl font-bold">{titleCompoonent}</Text>
            {component}
          </Flex>
        </Flex>
      </LayoutTamplate>
    </Layout>
  );
};

export default DocumentLppm;
