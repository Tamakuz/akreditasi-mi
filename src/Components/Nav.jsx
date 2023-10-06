import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../Context/Context";
import logoMI from "../Assets/icon/mi.png";
import {
  AiFillEye,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { GrClose } from "react-icons/gr";
import { Collapse } from "antd";
import Timer from "./timer/Timer";
import {
  IconButton,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Image,
  Heading,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Center,
  Divider,
  Flex,
  List,
  ListIcon,
  ListItem,
  Menu,
  MenuButton,
  MenuList,
  Switch,
  Text,
  Popover,
  useColorMode,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverArrow,
} from "@chakra-ui/react";
import {
  FaUser,
  FaGraduationCap,
  FaBook,
  FaCalendarAlt,
  FaPencilAlt,
  FaFileAlt,
  FaRegClipboard,
  FaGavel,
  FaFlask,
  FaHandshake,
  FaBookOpen,
  FaShieldAlt,
  FaMapSigns,
  FaClipboardList,
  FaBriefcase,
  FaUsers,
  FaChalkboardTeacher,
  FaLaptop,
  FaGamepad,
  FaTrain,
  FaUsersCog,
  FaFileDownload,
  FaFileSignature,
  FaCertificate,
  FaTrophy,
} from "react-icons/fa";
import { MdOutlineLightMode, MdDarkMode, MdAssignmentTurnedIn } from "react-icons/md";

const menus = [
  {
    page: "Home",
    path: "/",
  },
  {
    page: "Dokumentasi Jurusan",
    subMenus: [
      {
        subPage: "Profil Jurusan",
        path: "/dokumentasi-jurusan/profil-jurusan",
        icon: <FaUser />,
      },
      {
        subPage: "Kurikulum",
        path: "/dokumentasi-jurusan/kurikulum",
        icon: <FaBook />,
      },
      {
        subPage: "Jadwal",
        path: "/dokumentasi-jurusan/jadwal",
        icon: <FaCalendarAlt />,
      },
      {
        subPage: "Karya Mahasiswa",
        path: "/dokumentasi-jurusan/karya-mahasiswa",
        icon: <FaPencilAlt />,
      },
      {
        subPage: "Prestasi",
        path: "/dokumentasi-jurusan/prestasi",
        icon: <FaTrophy />,
      },
    ],
  },
  {
    page: "Pendukung akreditasi",
    path: "/pendukung-akreditasi",
  },
  {
    page: "Sarana prasarana",
    path: "/sarana-prasarana",
  },
  {
    page: "Informasi",
    subMenus: [
      {
        subPage: "Informasi Dosen",
        path: "/informasi-dosen",
        icon: <FaUser />,
      },
      {
        subPage: "Informasi Mahasiswa",
        path: "/informasi-mahasiswa",
        icon: <FaGraduationCap />,
      },
    ],
  },
  {
    page: "Penjaminan Mutu",
    subMenus: [
      {
        subPage: "Formulir",
        path: "/dokumen-inti-penjaminan-mutu/formulir",
        icon: <FaFileAlt />,
      },
      {
        subPage: "Standart",
        path: "/dokumen-inti-penjaminan-mutu/standart",
        icon: <FaRegClipboard />,
      },
      {
        subPage: "Kebijakan",
        path: "/dokumen-inti-penjaminan-mutu/kebijakan",
        icon: <FaGavel />,
      },
      {
        subPage: "Manual",
        path: "/dokumen-inti-penjaminan-mutu/manual",
        icon: <FaBook />,
      },
    ],
  },
  {
    page: "LPPM",
    subMenus: [
      {
        subPage: "Dokumen Lppm",
        path: "/lppm/dokumen",
        icon: <FaFlask />,
      },
      {
        subPage: "Pengajuan Prposal",
        path: "/lppm/pengajuan-proposal",
        icon: <MdAssignmentTurnedIn />,
      },
    ],
  },
  {
    page: "Dokumentasi Mahasiswa",
    subMenus: [
      {
        subPage: "Makrab",
        path: "/dokumentasi-mahasiswa/makrab",
        icon: <FaUsers />,
      },
      {
        subPage: "Magang",
        path: "/dokumentasi-mahasiswa/magang",
        icon: <FaBriefcase />,
      },
      {
        subPage: "Sosialisasi",
        path: "/dokumentasi-mahasiswa/sosialisasi",
        icon: <FaUsers />,
      },
      {
        subPage: "Seminar",
        path: "/dokumentasi-mahasiswa/seminar",
        icon: <FaChalkboardTeacher />,
      },
      {
        subPage: "Webinar",
        path: "/dokumentasi-mahasiswa/webinar",
        icon: <FaLaptop />,
      },
      {
        subPage: "KAI",
        path: "/dokumentasi-mahasiswa/kai",
        icon: <FaTrain />,
      },
      {
        subPage: "HMJ",
        path: "/dokumentasi-mahasiswa/hmj",
        icon: <FaUsersCog />,
      },
    ],
  },
  {
    page: "Download",
    subMenus: [
      {
        subPage: "BPK",
        path: "/download/bpk",
        icon: <FaFileDownload />,
      },
      {
        subPage: "RPS",
        path: "/download/rps",
        icon: <FaFileAlt />,
      },
      {
        subPage: "Kontrak Kuliah",
        path: "/download/kontrak-kuliah",
        icon: <FaFileSignature />,
      },
      {
        subPage: "Penelitian",
        path: "/download/penelitian",
        icon: <FaFlask />,
      },
      {
        subPage: "Pengabdian",
        path: "/download/pengabdian",
        icon: <FaHandshake />,
      },
      {
        subPage: "Sertifikat",
        path: "/download/sertifikat",
        icon: <FaCertificate />,
      },
    ],
  },
];

const Medsos = [
  {
    name: "Facebook",
    icon: <AiFillFacebook className="w-[30px] h-[30px] text-blue-500" />,
    link: "https://www.facebook.com/politamasolo/?locale=id_ID",
  },
  {
    name: "Instagram",
    icon: <AiFillInstagram className="w-[30px] h-[30px] text-red-500" />,
    link: "https://www.instagram.com/politamasolo/?hl=id",
  },
  {
    name: "Twitter",
    icon: <AiFillTwitterCircle className="w-[30px] h-[30px] text-blue-500" />,
    link: "https://twitter.com/politamasolo",
  },
];

const Nav = () => {
  const { globalState } = useContext(GlobalState);
  const { page, subPage } = globalState.page;
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://knowledgeable-painted-guarantee.glitch.me/visitors"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data.length);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Box className="z-[99] w-full">
        <Flex
          className={`md:px-8  md:static absolute z-[9999] w-full px-5 flex justify-between items-center shadow ${
            colorMode === "dark" ? "bg-brandTabs-900" : "bg-blue-100"
          }`}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden block"
          >
            {isOpen ? (
              <GrClose className="text-2xl" />
            ) : (
              <BsList className="text-2xl" />
            )}
          </Button>
          <Flex className="flex gap-3 text-start justify-start">
            <Image
              className="hidden md:block aspect-square md:w-[50px] w-[40px] rounded-full"
              src={logoMI}
              alt="logomi"
            />
            <Box className="w-full lg:block hidden">
              <Heading as="h1" className="text-xl font-bold">
                Manajemen Informatika
              </Heading>
              <Text className="text-[12px] text-gray-00">
                Pusat Pengembangan Pembelajaran dan Penjaminan Mutu Pendidikan
              </Text>
            </Box>
          </Flex>
          <Flex className="flex items-center gap-5">
            <Flex className="flex items-center flex-col pb-3">
              <Timer />
              <Flex className="text-[12px] flex items-center gap-2">
                <Flex className="text-[16px]">
                  <AiFillEye />
                </Flex>
                Dilihat : {data}
              </Flex>
            </Flex>
            <Flex className="lg:flex items-center hidden">
              {Medsos.map((media, i) => {
                return (
                  <Box
                    key={i}
                    className="tooltip tooltip-bottom"
                    data-tip={media.name}
                  >
                    <Link
                      href={media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {media.icon}
                    </Link>
                  </Box>
                );
              })}
            </Flex>
            <Flex>
              <IconButton
              variant={"ghost"}
                aria-label="Toggle dark mode"
                icon={
                  colorMode === "dark" ? <MdOutlineLightMode /> : <MdDarkMode />
                }
                onClick={toggleColorMode}
              />
            </Flex>
          </Flex>
        </Flex>
        {/* Mobile view */}
        <Flex className="w-full flex xl:hidden justify-center h-fit">
          <Flex
            className={`${
              isOpen ? "-top-2" : "-top-[1000px]"
            } absolute flex flex-col w-full lg:w-[95%] z-[999] duration-100 shadow-md lg:mt-[97px] mt-[70px] bg-gray-200 p-2`}
          >
            {menus.map((menu, i) => {
              return (
                <Box key={i} className="h-fit">
                  {menu?.subMenus ? (
                    <Box>
                      <Collapse
                        className={`!important border-b text-[16px]`}
                        bordered={true}
                        ghost={true}
                        items={[
                          {
                            key: i,
                            label: menu.page,
                            children: (
                              <Box className="flex flex-col gap-3 px-10">
                                {menu.subMenus.map((sub, j) => (
                                  <Link
                                    key={j}
                                    to={sub.path}
                                    className={` ${
                                      subPage === sub.subPage
                                        ? "text-blue-700"
                                        : "text-black"
                                    } duration-150 cursor-pointer text-[16px] hover:text-gray-600`}
                                  >
                                    {sub.subPage}
                                  </Link>
                                ))}
                              </Box>
                            ),
                          },
                        ]}
                      />
                    </Box>
                  ) : (
                    <Box className="px-5 py-[12px]">
                      <Link
                        to={menu.path}
                        className={` ${
                          page === menu.page ? "text-blue-700" : "text-black"
                        } cursor-pointer text-[16px] hover:text-gray-600`}
                      >
                        {menu.page}
                      </Link>
                    </Box>
                  )}
                </Box>
              );
            })}
            <Flex className="flex items-center px-4 pt-3 lg:hidden ">
              {Medsos.map((media, i) => {
                return (
                  <Box
                    key={i}
                    className="tooltip tooltip-bottom"
                    data-tip={media.name}
                  >
                    <Link
                      href={media.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {media.icon}
                    </Link>
                  </Box>
                );
              })}
            </Flex>
          </Flex>
        </Flex>
        {/* Desktop view */}
        <Flex
          className={`w-full py-3 px-3 hidden lg:flex xl:gap-5 gap-2 justify-center ${
            colorMode === "dark" ? "bg-secondaryGray-900" : "bg-blue-400"
          }`}
        >
          {menus.map((menu, index) =>
            menu.subMenus ? (
              <Popover key={index}>
                <PopoverTrigger>
                  <Text
                    className={`cursor-pointer hover:underline ${
                      page === menu.page && "underline"
                    }`}
                  >
                    {menu.page}
                  </Text>
                </PopoverTrigger>
                <Portal>
                  <PopoverContent className="bg-white text-gray-700 p-5 w-fit shadow rounded-xl">
                    <PopoverArrow />
                    <Box className="grid grid-cols-2 gap-5 w-fit">
                      {menu.subMenus.map((subMenu, index) => (
                        <Link
                          key={index}
                          to={subMenu.path}
                          className={`flex items-center gap-2 rounded-xl group hover:shadow-md duration-300 px-5 py-3 cursor-pointer ${
                            subPage === subMenu.subPage &&
                            "shadow-md text-blue-700"
                          }`}
                        >
                          <Text className="group-hover:text-blue-700">
                            {subMenu.icon}
                          </Text>
                          <Text className="group-hover:text-blue-700">
                            {subMenu.subPage}
                          </Text>
                        </Link>
                      ))}
                    </Box>
                  </PopoverContent>
                </Portal>
              </Popover>
            ) : (
              <Link
                to={menu.path}
                key={index}
                className={`${
                  page === menu.page && "underline"
                } hover:underline`}
              >
                {menu.page}
              </Link>
            )
          )}
        </Flex>
      </Box>
    </Box>
  );
};

export default Nav;
