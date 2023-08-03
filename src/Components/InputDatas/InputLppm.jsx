import React, { useEffect, useState } from "react";

const InputLppm = ({ collection }) => {
  const [deskripsi, setDeskrpsi] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState()
  const [succes, setSucces] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/${collection}`,
          {
            method: "GET",
            cache: "no-store",
          }
        );

        if (!res.ok) {
          throw new Error("Network response was not ok.");
        }

        // Assuming the response is JSON data, use json() to extract the data
        const jsonData = await res.json();

        setData(jsonData); // Update the state with the fetched data
      } catch (error) {
        // Handle errors here, e.g. setData('Error fetching data')
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [collection, succes]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        deskripsi,
        link: link.startsWith("https://") ? link : `https://${link}`,
      };

      const postResponse = await fetch(
        `http://localhost:5000/${collection}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        }
      );

      if (postResponse.ok) {
        alert("Data berhasil ditambahkan!");
        setDeskrpsi("");
        setLink("");
        setSucces((prev) => !prev);
      } else {
        return alert("Maaf Data Sudah Ada Silahkan Periksa");
      }
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };

  const handleDeleteData = async (id) => {
    try {
      const deleteResponse = await fetch(
        `http://localhost:5000/${collection}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (deleteResponse.ok) {
        alert("Data berhasil dihapus!");
        setSucces((prev) => !prev)
      } else {
        alert("Gagal menghapus data!");
      }
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" p-4 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label htmlFor="judul" className="block font-medium mb-1">
            Deskripsi :
          </label>
          <input
            type="text"
            value={deskripsi}
            onChange={(e) => setDeskrpsi(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deskripsi" className="block font-medium mb-1">
            Link :
          </label>
          <input
            type="text"
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
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 w-[80px]">No</th>
            <th className="px-4 py-2 w-[400px]">Deskripsi</th>
            <th className="px-4 py-2 w-[100px]">Link</th>
            <th className="px-4 py-2 w-[100px]">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <th className="border px-4 py-2">{index + 1}</th>
              <td className="border px-4 py-2">{item.deskripsi}</td>
              <td className="border px-4 py-2 text-center">
                <a href={item.link} target="_blank" className="text-red-500">
                  Download
                </a>
              </td>
              <td className="text-center">
                <p
                  onClick={() => handleDeleteData(item.id)}
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
  );
};

export default InputLppm;
