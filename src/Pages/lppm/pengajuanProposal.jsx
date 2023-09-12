import React, { useContext, useEffect } from "react";
import { GlobalState } from "../../Context/Context";
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Proposal from "../../Components/pengajuanProposal/proposal";
import Laporan from "../../Components/pengajuanProposal/laporan";

const PengajuanProposal = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "LPPM", subPage: "Pengajuan Proposal" },
    });
  }, []);
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Pengajuan Proposal"}>
        <Box className="w-full">
          <Tabs size="lg" isFitted colorScheme="blue">
            <TabList>
              <Tab className="text-xl font-semibold">Pengajuan Proposal</Tab>
              <Tab className="text-xl font-semibold">Pengajuan Laporan</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Proposal />
              </TabPanel>
              <TabPanel>
                <Laporan />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </LayoutTamplate>
    </Layout>
  );
};

export default PengajuanProposal;
