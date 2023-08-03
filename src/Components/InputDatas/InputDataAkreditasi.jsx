import React, { useState } from "react";
import datas from "../../../datas.json";

const InputDataAkreditasi = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Lakukan permintaan GET ke JSON Server untuk memeriksa apakah judul sudah ada atau belum
      const checkResponse = await fetch(
        `https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi?judul=${judul}`
      );
      const existingData = await checkResponse.json();

      if (existingData.length > 0) {
        // Jika judul sudah ada, tampilkan konfirmasi untuk menambahkan data atau tidak
        const shouldAddData = window.confirm(
          "Judul sudah ada, tambahkan deskripsi dan link ke data yang sudah ada?"
        );

        if (shouldAddData) {
          // Ambil id dari data yang sudah ada
          const existingId = existingData[0].id;

          // Lakukan permintaan PATCH untuk menambahkan deskripsi dan link ke data yang sudah ada
          if (deskripsi === "" || link === "") {
            alert("Masukkan deskripsi dan link, dan tidak boleh kosong!");
          } else {
            const patchResponse = await fetch(
              `https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi/${existingId}`,
              {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  dataBody: [...existingData[0].dataBody, { deskripsi, link }],
                }),
              }
            );

            if (patchResponse.ok) {
              alert("Data berhasil ditambahkan!");
              setJudul("");
              setDeskripsi("");
              setLink("");
            } else {
              alert("Gagal menambahkan data!");
            }
          }
        }
      } else {
        // Jika judul belum ada, lakukan permintaan POST untuk menambahkan data baru
        if (deskripsi === "" || link === "") {
          alert("Masukkan deskripsi dan link, dan tidak boleh kosong!");
        } else {
          const postResponse = await fetch(
            "https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                judul,
                dataBody: [{ deskripsi, link }],
              }),
            }
          );

          if (postResponse.ok) {
            alert("Data berhasil ditambahkan!");
            setJudul("");
            setDeskripsi("");
            setLink("");
          } else {
            alert("Gagal menambahkan data!");
          }
        }
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const handleDeleteData = async (dataId, rowIndex) => {
    try {
      const existingData = datas.dataAkreditasi.find((da) => da.id === dataId);

      if (existingData) {
        const newDataBody = existingData.dataBody.filter(
          (data, index) => index !== rowIndex
        );

        const patchResponse = await fetch(
          `https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi/${dataId}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              dataBody: newDataBody,
            }),
          }
        );

        if (patchResponse.ok) {
          alert("Data berhasil dihapus!");
        } else {
          alert("Gagal menghapus data!");
        }
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  const handleDeleteDataByJudul = async (judul) => {
    try {
      const existingData = datas.dataAkreditasi.find((da) => da.judul === judul);

      if (existingData) {
        const deleteResponse = await fetch(
          `https://knowledgeable-painted-guarantee.glitch.me/dataAkreditasi/${existingData.id}`,
          {
            method: "DELETE",
          }
        );

        if (deleteResponse.ok) {
          alert("Data berhasil dihapus!");
          // If needed, you should have a function here to update the state or re-fetch the data
          // Example: fetchDataAkreditasi();
        } else {
          alert("Gagal menghapus data!");
        }
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <section className="px-10 flex flex-col gap-5">
      <form
        onSubmit={handleSubmit}
        className=" p-4 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label htmlFor="judul" className="block font-medium mb-1">
            Judul:
          </label>
          <input
            type="text"
            id="judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deskripsi" className="block font-medium mb-1">
            Deskripsi:
          </label>
          <input
            type="text"
            id="deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block font-medium mb-1">
            Link:
          </label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Tambahkan Data
        </button>
      </form>
      {datas.dataAkreditasi.map((da, i) => (
        <div key={i} className="w-full bg-gray-50 p-5 rounded shadow-md">
          <div className="flex justify-between items-center pr-10">
            <h1 className="text-[20px] font-bold text-gray-700">{da.judul}</h1>
            <p
              onClick={() => handleDeleteDataByJudul(da.judul)}
              className="text-red-400 hover:text-red-500 font-semibold hover:underline cursor-pointer"
            >
              Hapus
            </p>
          </div>
          <table className="w-full table table-fixed">
            <thead className="border-b-4 border-gray-300">
              <tr>
                <th className="w-12">No</th>
                <th className="">Deskripsi</th>
                <th className="w-[100px]">Dokumen</th>
                <th className="w-[100px]">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {da?.dataBody?.map((data, j) => (
                <tr key={j}>
                  <th>{j + 1}</th>
                  <td>{data.deskripsi}</td>
                  <td>
                    <a
                      href={data.link}
                      className="text-blue-400 hover:text-blue-500 font-semibold hover:underline"
                    >
                      Buka
                    </a>
                  </td>
                  <td>
                    {/* Tambahkan teks "Hapus" di samping teks "Buka" */}
                    <p
                      onClick={() => handleDeleteData(da.id, j)} // Panggil fungsi handleDeleteData dengan dataId dan rowIndex
                      className="text-red-400 hover:text-red-500 font-semibold hover:underline cursor-pointer"
                    >
                      Hapus
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </section>
  );
};

export default InputDataAkreditasi;
