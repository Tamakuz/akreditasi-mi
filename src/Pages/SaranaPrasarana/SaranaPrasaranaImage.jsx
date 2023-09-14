import { useContext, useEffect, useState } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";

//* Image Sarana Prasarana
//* Toilet
import imageToilet from "./../../Assets/sarana-prasarana/toilet.jpeg";

//* Ruang Teori
import imageRuangTeori1 from "./../../Assets/sarana-prasarana/ruang-teori-1.jpeg";
import imageRuangTeori2 from "./../../Assets/sarana-prasarana/ruang-teori-2.jpeg";

//* Perpustakaan
import imagePerpustakaan from "./../../Assets/sarana-prasarana/perpustakaan.jpeg";

//* Parkiran Tamu
import imageParkiranTamu1 from "./../../Assets/sarana-prasarana/parkiran-tamu-1.jpeg";
import imageParkiranTamu2 from "./../../Assets/sarana-prasarana/parkiran-tamu-2.jpeg";

//* Parkiran Dosen
//* Mobil
import imageParkiranMobilDosen from "./../../Assets/sarana-prasarana/parkiran-mobil-dosen.jpeg";
//* Motor
import imageParkiranMotorDosen from "./../../Assets/sarana-prasarana/parkiran-motor-dosen.jpeg";

//* Parkiran Mahasiswa
import imageParkiranMahasiswa from "./../../Assets/sarana-prasarana/parkiran-mahasiswa.jpeg";

//* Parkiran Lab Komp
import imageLabKomp1 from "./../../Assets/sarana-prasarana/lab-komp-1.jpeg";
import imageLabKomp2 from "./../../Assets/sarana-prasarana/lab-komp-2.jpeg";

//* Koperasi
import imageKoperasi from "./../../Assets/sarana-prasarana/koperasi.jpeg";

//* Bem
import imageBem from "./../../Assets/sarana-prasarana/bem.jpeg";

//* Blm
import imageBlm from "./../../Assets/sarana-prasarana/blm.jpeg";

//* Fkui
import imageFkui from "./../../Assets/sarana-prasarana/fkui.jpeg";

//* Kantin
import imageKantin from "./../../Assets/sarana-prasarana/kantin.jpeg";

//* Ksr
import imageKsr from "./../../Assets/sarana-prasarana/ksr.jpeg";

//* Maliapala
import imageMaliapala from "./../../Assets/sarana-prasarana/maliapala.jpeg";

//* Masjid
import imageMasjid from "./../../Assets/sarana-prasarana/masjid.jpeg";

//* Ordani
import imageOrdani from "./../../Assets/sarana-prasarana/ordani.jpeg";

//* Pmk
import imagePmk from "./../../Assets/sarana-prasarana/pmk.jpeg";

//* Radio
import imageRadio from "./../../Assets/sarana-prasarana/radio.jpeg";

//* Teater
import imageTeater from "./../../Assets/sarana-prasarana/teater.jpeg";

import "react-calendar/dist/Calendar.css";
import LayoutTamplate from "../../Components/LayoutTamplate";

import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FiExternalLink } from "react-icons/fi";

const saranaPrasarana = [
  {
    nama: "Toilet",
    path: [imageToilet],
  },
  {
    nama: "Ruang Teori",
    path: [imageRuangTeori1, imageRuangTeori2],
  },
  {
    nama: "Perpustakaan",
    path: [imagePerpustakaan],
    tugasAkhir: [
      {
        tahun: 2019,
        link: [
          "https://bit.ly/TUGASAKHIRMI19",
        ],
      },
      {
        tahun: 2020,
        link: [
          "https://bit.ly/TUGASAKHIRMI20",
        ],
      },
      {
        tahun: 2021,
        link: [
          "https://bit.ly/TUGASAKHIRMI21",
        ],
      },
      {
        tahun: 2022,
        link: [
          "https://bit.ly/TUGASAKHIRMI22",
        ],
      },
    ],
  },
  {
    nama: "Parkiran Tamu",
    path: [imageParkiranTamu1, imageParkiranTamu2],
  },
  {
    nama: "Parkiran Motor Dosen",
    path: [imageParkiranMotorDosen],
  },
  {
    nama: "Parkiran Mobil Dosen",
    path: [imageParkiranMobilDosen],
  },
  {
    nama: "Parkiran Mahasiswa",
    path: [imageParkiranMahasiswa],
  },
  {
    nama: "Lab Komputer",
    path: [imageLabKomp1, imageLabKomp2],
  },
  {
    nama: "Koperasi",
    path: [imageKoperasi],
  },
  {
    nama: "BEM",
    path: [imageBem],
  },
  {
    nama: "BLM",
    path: [imageBlm],
  },
  {
    nama: "FKUI",
    path: [imageFkui],
  },
  {
    nama: "Kantin",
    path: [imageKantin],
  },
  {
    nama: "KSR",
    path: [imageKsr],
  },
  {
    nama: "Maliapala",
    path: [imageMaliapala],
  },
  {
    nama: "Masjid",
    path: [imageMasjid],
  },
  {
    nama: "Ordani",
    path: [imageOrdani],
  },
  {
    nama: "PMK",
    path: [imagePmk],
  },
  {
    nama: "Radio",
    path: [imageRadio],
  },
  {
    nama: "Teater",
    path: [imageTeater],
  },
];

const SaranaPrasaranaImage = () => {
  const { dispatch } = useContext(GlobalState);
  const [saranaPrasaranaName, setSaranaPrasaranaName] = useState("Toilet");
  const { colorMode } = useColorMode();

  const selectedSarana = saranaPrasarana.find(
    (element) => element.nama === saranaPrasaranaName
  );

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Sarana prasarana" },
    });
  }, []);
  return (
    <Layout>
      <LayoutTamplate titleHeader={"Sarana Prasarana"}>
        <Flex className="h-fit flex-col gap-3">
          <Box
            className={`${
              colorMode === "dark"
                ? "bg-secondaryGray-900"
                : "bg-secondaryGray-300"
            } rounded-xl py-5 px-10 shadow`}
          >
            <Box className="mt-2 flex flex-wrap gap-3">
              {saranaPrasarana.map((element, index) => {
                return (
                  <Button
                    colorScheme="blue"
                    key={index}
                    onClick={() => setSaranaPrasaranaName(element.nama)}
                    size="md"
                  >
                    {element.nama}
                  </Button>
                );
              })}
            </Box>
          </Box>
          <Box
            className={`${
              colorMode === "dark"
                ? "bg-secondaryGray-900"
                : "bg-secondaryGray-300"
            } rounded-xl shadow`}
          >
            <Box className="px-10 py-3">
              <h1 className="text-[27px] font-semibold">
                {saranaPrasaranaName}
              </h1>
            </Box>
            <Divider />
            <Stack className="px-10 py-5 gap-5">
              {selectedSarana && (
                <Stack>
                  {selectedSarana.path.map((path, index) => (
                    <Stack>
                      <Image
                        key={index}
                        className="aspect-video object-cover rounded-xl border border-brandTabs-300 shadow-md w-full"
                        src={path}
                        alt={selectedSarana.nama}
                      />
                    </Stack>
                  ))}
                  {selectedSarana.tugasAkhir && (
                    <Stack className="gap-3">
                      <Text className="text-2xl font-semibold">Link Akses Softfile Tugas Akhir</Text>
                      {selectedSarana.tugasAkhir.map((ta, index) => (
                        <Flex className="gap-2">
                          <Text>{ta.tahun} : </Text>
                          <List>
                            {ta.link.map((link, index) => (
                              <ListItem>
                                <Link href={link} isExternal className="flex items-center hover:text-blue-500">{link} <FiExternalLink /></Link>
                              </ListItem>
                            ))}
                          </List>
                        </Flex>
                      ))}
                    </Stack>
                  )}
                </Stack>
              )}
            </Stack>
          </Box>
        </Flex>
      </LayoutTamplate>
    </Layout>
  );
};

export default SaranaPrasaranaImage;
