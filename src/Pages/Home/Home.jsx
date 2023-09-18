import { useContext, useEffect } from "react";
import Layout from "../../Components/Layout";
import { GlobalState } from "../../Context/Context";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { FiLink } from "react-icons/fi";
import banner1 from "../../Assets/banner/banner1.png";
import banner2 from "../../Assets/banner/banner2.png";
import banner3 from "../../Assets/banner/banner3.png";
import logoPolitama from "../../Assets/logoPolitama.png";
import elitaLink from "../../Assets/elita-link.png";
import edlinkLink from "../../Assets/edlink-link.png";
import siakadLink from "../../Assets/siakad-link.png";
import sisterLink from "../../Assets/sister-link.png";
import ojBrand from "../../Assets/ojs_brand.png";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Link,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
  useDisclosure,
  Text,
  Heading,
  Image,
  Card,
} from "@chakra-ui/react";

const visi = [
  {
    text: "Pada tahun 2030 menjadi Program Studi Vokasional yang menghasilkan lulusan berkualitas dan unggul bidang Manajemen Informatika sebagai Programmer.",
  },
];

const tujuan = [
  {
    text: "Menghasilkan lulusan yang professional di bidang manajemen informatika",
  },
  {
    text: "Menghasilkan karya ilmiah dan penelitian di bidang manajemen informatika yang dapat diabdikan kepada masyarakat",
  },
  {
    text: "Menghasilkan kerjasama di bidang manajemen informatika dengan instansi dalam dan luar negeri",
  },
];

const mission = [
  {
    parent:
      "Menyelenggarakan pendidikan dan pengajaran yang unggul dan berkualitas.",
  },
  {
    parent:
      "Menyelenggarakan penelitian terapan software aplikasi dan multimedia dengan menghasilkan karya ilmiah yang mampu mendukung pelaksanaan pembangunan nasional.",
  },
  {
    parent:
      "Menyelenggarakan pengabdian kepada masyarakat dengan produk software aplikasi dan multimedia yang dihasilkan civitas akademika yang benar-benar dibutuhkan dan dimanfaatkan oleh masyarakat. ",
  },
  {
    parent:
      "Membangun dan menyelenggarakan manajemen dan pelayanan yang unggul dan berkualitas.",
  },
  {
    parent:
      "Membina jalinan kerja sama dengan pihak-pihak eksternal yang berkompeten.",
  },
];

const refrention = [
  {
    name: "Elita",
    Image: elitaLink,
    desc: "Elita",
    link: "http://kuliah.politama.ac.id/",
  },
  {
    name: "EdLink",
    Image: edlinkLink,
    desc: "EdLink",
    link: "https://edlink.id/",
  },
  {
    name: "Siakad",
    Image: siakadLink,
    desc: "Siakad",
    link: "https://siakad.politama.ac.id/index.php/login",
  },
  {
    name: "Sister",
    Image: sisterLink,
    desc: "Sister",
    link: "http://sister.politama.ac.id/dashboard/",
  },
  {
    name: "Jurnal",
    Image: ojBrand,
    desc: "Jurnal",
    link: "http://jurnal.politama.ac.id/index.php/politeknosains",
  },
  {
    name: "PMB",
    Image: logoPolitama,
    desc: "PMB",
    link: "https://pmb.politama.ac.id/index.php/pendaftaran_pmb",
  },
];

const Home = () => {
  const { dispatch } = useContext(GlobalState);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "Home" },
    });
  }, []);

  return (
    <Layout>
      <>
        <Flex className="overflow-hidden relative w-full lg:h-[400px] md:pt-0">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full h-full"
          >
            <SwiperSlide>
              <Image
                className="w-full h-full object-cover"
                src={banner1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-full h-full object-cover"
                src={banner2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className="w-full h-full object-cover"
                src={banner3}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <Box className="absolute top-0 z-10 w-full h-full flex flex-col justify-center items-center backdrop-brightness-50">
            <Text className="text-center text-gray-200 md:text-[20px] lg:text-[29px] font-bold">
              Selamat Datang di Laman
            </Text>
            <Heading
              as="h2"
              className="text-center text-blue-500 text-[20px] sm:text-[38px] md:text-[48px] lg:text-[59px] text-xl font-bold sm:py-5"
            >
              MANAJMEN INFORMATIKA
            </Heading>
            <Text className="text-center text-gray-200 md:text-[20px] lg:text-[29px] font-bold">
              Politeknik Pratama Mulia Surakarta
            </Text>
          </Box>
        </Flex>
        <Box
          as="section"
          className={`w-full h-fit md:px-20 px-10 py-10 flex md:flex-row flex-col-reverse gap-10 justify-between item-center ${
            colorMode === "dark" ? "bg-brandTabs-900" : "bg-blue-100"
          }`}
        >
          <Box className="md:px-10 md:border-r md:border-gray-500">
            <Box className="md:w-fit w-full mb-3">
              <Heading
                as="h1"
                className={`text-3xl font-semibold border-b-2 ${
                  colorMode === "dark" ? "border-yellow-600" : "border-red-600"
                }`}
              >
                TAUTAN
              </Heading>
            </Box>
            <Box className="w-full h-fit flex md:flex-col flex-wrap justify-center gap-2">
              {refrention.map((ref, i) => {
                return (
                  <Box key={i} className="felx flex-col gap-3">
                    <Box className="relative mb-3 group md:w-[120px] w-[80px] h-fit aspect-square overflow-hidden">
                      <Image
                        src={ref.Image}
                        className="w-full h-full"
                        alt="elita-link"
                      />
                      <Box className="absolute opacity-0 group-hover:top-0 hover:opacity-100 duration-300 w-full h-full backdrop-brightness-75 flex justify-center items-center cursor-pointer">
                        <Link
                          rel="noopener noreferrer"
                          href={ref.link}
                          target="_blank"
                          className={`${
                            colorMode === "dark"
                              ? "bg-secondaryGray-900"
                              : "bg-secondaryGray-300"
                          } px-2 py-2 rounded w-[80px] h-[80px] flex flex-col justify-center items-center`}
                        >
                          <FiLink className="text-3xl" />
                          <Text>{ref.desc}</Text>
                        </Link>
                      </Box>
                    </Box>
                    <Box className="w-full text-center">
                      <Text>{ref.name}</Text>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>

          <Flex className="w-full flex flex-col gap-5 ">
            <Box
              className={`w-full md:text-3xl text-xl font-semibol border-b-2 ${
                colorMode === "dark" ? "border-yellow-600" : "border-red-600"
              }`}
            >
              <Heading at="h1">VISI MISI DAN TUJUAN</Heading>
            </Box>
            <Box className="flex md:flex-row flex-col md:gap-10 gap-5">
              {/* Card Visi */}
              <Flex className="w-full flex flex-col md:gap-10 gap-5">
                <Card
                  className={`card w-full h-fit bg-base-100 shadow ${
                    colorMode === "dark"
                      ? "bg-secondaryGray-900"
                      : "bg-secondaryGray-300"
                  }`}
                >
                  <figure
                    className={`w-full h-[150px] border-b-2  ${
                      colorMode === "dark"
                        ? "border-yellow-600"
                        : "border-red-600"
                    }`}
                  >
                    <Image
                      className="w-full h-full object-contain"
                      src={logoPolitama}
                      alt="Shoes"
                    />
                  </figure>
                  <Box className="card-body">
                    <Text as="h2" className="card-title">
                      VISI
                    </Text>
                    {visi.map((item, i) => (
                      <Flex key={i} className="flex gap-2 w-full h-fit">
                        <Text className="font-bold">{i + 1}.</Text>
                        <Text>{item.text}</Text>
                      </Flex>
                    ))}
                  </Box>
                </Card>
                <Box className="md:block  hidden card w-full h-fit bg-base-100 shadow">
                  <Card
                    className={`card-body ${
                      colorMode === "dark"
                        ? "bg-secondaryGray-900"
                        : "bg-secondaryGray-300"
                    }`}
                  >
                    <Heading as="h2" className="card-title">
                      TUJUAN
                    </Heading>
                    {tujuan.map((item, i) => (
                      <Flex key={i} className="flex gap-2 w-full h-fit">
                        <Text className="font-bold">{i + 1}.</Text>
                        <Text>{item.text}</Text>
                      </Flex>
                    ))}
                  </Card>
                </Box>
              </Flex>
              {/* Card Misi */}
              <Flex className="w-full flex flex-col md:gap-10 gap-5">
                <Card
                  className={`card w-full h-fit bg-base-100 shadow ${
                    colorMode === "dark"
                      ? "bg-secondaryGray-900"
                      : "bg-secondaryGray-300"
                  }`}
                >
                  <figure
                    className={`w-full h-[150px] border-b-2  ${
                      colorMode === "dark"
                        ? "border-yellow-600"
                        : "border-red-600"
                    }`}
                  >
                    <Image
                      className="w-full h-full object-contain"
                      src={logoPolitama}
                      alt="Shoes"
                    />
                  </figure>
                  <Card
                    className={`card-body rounded-t-none ${
                      colorMode === "dark"
                        ? "bg-secondaryGray-900"
                        : "bg-secondaryGray-300"
                    }`}
                  >
                    <Heading as="h2" className="card-title">
                      MISI
                    </Heading>
                    {mission.map((misi, i) => (
                      <Flex key={i} className="flex gap-3">
                        <Text className="font-bold">{i + 1}.</Text>
                        <Text>{misi.parent}</Text>
                      </Flex>
                    ))}
                  </Card>
                </Card>
                <Card
                  className={`md:hidden card w-full h-fit bg-base-100 shadow ${
                    colorMode === "dark"
                      ? "bg-secondaryGray-900"
                      : "bg-secondaryGray-300"
                  }`}
                >
                  <Box className="card-body">
                    <Heading as="h2" className="card-title">
                      TUJUAN
                    </Heading>
                    {tujuan.map((item, i) => (
                      <Flex key={i} className="flex gap-2 w-full h-fit">
                        <Text className="font-bold">{i + 1}.</Text>
                        <Text>{item.text}</Text>
                      </Flex>
                    ))}
                  </Box>
                </Card>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </>
    </Layout>
  );
};

export default Home;
