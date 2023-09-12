import { Field, Form, Formik, useFormik } from "formik";
import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import * as yup from "yup";
import { useGetData, usePostData } from "../../hooks/apiMethod";
import useToastMessages from "../../hooks/useToastMessage";
import CardProposal from "./card/cardPengajuan";
import TableProposal from "./card/cardPengajuan";

const Laporan = () => {
  const apiUrl =
    "https://knowledgeable-painted-guarantee.glitch.me/pengajuan-proposal";
  const [isSubbmiting, setIsSubbmiting] = useState(null);
  const { colorMode } = useColorMode();
  const { datas, isLoading, refetchData } = useGetData(apiUrl);
  const { postData } = usePostData();
  const { showSuccessToast, showErrorToast } = useToastMessages();

  const postProposal = async (values, actions) => {
    setIsSubbmiting(true);
    try {
      const currentTime = new Date();
      const currentDate = currentTime.toISOString().slice(0, 10);

      const options = { timeZone: "Asia/Jakarta" };
      const currentTimeString = currentTime.toLocaleTimeString(
        "id-ID",
        options
      );

      values.link = values.link.startsWith("https://")
        ? values.link
        : `https://${values.link}`;
      values.tanggalPengiriman = currentDate;
      values.waktuPengiriman = currentTimeString;
      values.status = "Proses";
      await postData(apiUrl, values);
      showSuccessToast("Proposal berhasil terkirim");
    } catch (error) {
      console.log(error);
      showErrorToast("Terjadi kesalahan saat mengirim proposal");
    } finally {
      setTimeout(() => {
        setIsSubbmiting(null);
      }, 5000);
      actions.resetForm();
      refetchData();
    }
  };

  const formik = useFormik({
    initialValues: {
      nama: "",
      judul: "",
      deskripsi: "",
      link: "",
      tipe: "",
      tanggalPengiriman: "",
      waktuPengiriman: "",
      tanggalDiterima: "",
      waktuDiterima: "",
      status: "",
    },
    validationSchema: yup.object({
      nama: yup.string().required("Nama harus diisi"),
      judul: yup.string().required("Judul harus diisi"),
      deskripsi: yup.string().required("Deskripsi harus diisi"),
      link: yup.string().required("Link harus diisi"),
      tipe: yup.string().required("Type is required"),
      tanggalPengiriman: yup.string(),
      waktuPengiriman: yup.string(),
      tanggalDiterima: yup.string(),
      waktuDiterima: yup.string(),
      status: yup.string(),
    }),
    onSubmit: async (values, actions) => {
      postProposal(values, actions);
    },
  });

  return (
    <Flex className="flex-col gap-5 w-full">
      <Box
        className={`p-10 rounded-xl shadow ${
          colorMode === "dark" ? "bg-secondaryGray-900" : "bg-white"
        }`}
      >
        <Box className="mb-10">
          <Text className="text-center text-2xl font-semibold">
            Input Pengajuan Laporan
          </Text>
        </Box>
        <Formik
          initialValues={formik.initialValues}
          validationSchema={formik.validationSchema}
          onSubmit={formik.handleSubmit}
        >
          <Form className="flex flex-col gap-5">
            <Flex className="gap-5">
              <FormControl
                isInvalid={formik.touched.nama && formik.errors.nama}
              >
                <FormLabel>Nama Pengirim</FormLabel>
                <Input
                  name="nama"
                  placeholder="nama pengirim"
                  value={formik.values.nama}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.nama}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.judul && formik.errors.judul}
              >
                <FormLabel>Judul Proposal</FormLabel>
                <Input
                  name="judul"
                  placeholder="judul proposal"
                  value={formik.values.judul}
                  onChange={formik.handleChange}
                />
                <FormErrorMessage>{formik.errors.judul}</FormErrorMessage>
              </FormControl>
            </Flex>
            <FormControl
              isInvalid={formik.errors.deskripsi && formik.touched.deskripsi}
            >
              <FormLabel>Deskripsi</FormLabel>
              <Textarea
                maxLength={300}
                name="deskripsi"
                placeholder="deskripsi singkat proposal"
                value={formik.values.deskripsi}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.deskripsi}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.link && formik.touched.link}>
              <FormLabel>Link</FormLabel>
              <Input
                name="link"
                placeholder="link file proposal"
                value={formik.values.link}
                onChange={formik.handleChange}
              />
              <FormErrorMessage>{formik.errors.link}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={formik.errors.tipe && formik.touched.tipe}>
              <FormLabel>Tipe File</FormLabel>
              <Field as={Select} name="tipe" {...formik.getFieldProps("tipe")}>
                <option value="">Pilih Tipe File</option>
                <option value="pdf">Pdf</option>
                <option value="doc">Doc</option>
              </Field>
              <FormErrorMessage>{formik.errors.tipe}</FormErrorMessage>
            </FormControl>
            <Button
              isLoading={isSubbmiting}
              loadingText="Proses Pengiriman..."
              type="submit"
              size={"lg"}
              colorScheme="green"
            >
              Kirim Proposal
            </Button>
          </Form>
        </Formik>
      </Box>
      <Box className="flex flex-wrap gap-5 justify-center">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          datas.map((data, index) => <TableProposal key={index} data={data} />)
        )}
      </Box>
    </Flex>
  );
};

export default Laporan;
