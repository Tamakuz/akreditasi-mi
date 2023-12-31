import { useState, useEffect } from "react";

const InputLppm = ({ collection }) => {
  const [deskripsi, setDeskrpsi] = useState("");
  const [link, setLink] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://knowledgeable-painted-guarantee.glitch.me/${collection}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, [collection]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        deskripsi,
        link: link.startsWith("https://") ? link : `https://${link}`,
      };

      const postResponse = await fetch(
        `https://knowledgeable-painted-guarantee.glitch.me/${collection}`,
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
        `https://knowledgeable-painted-guarantee.glitch.me/${collection}/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (deleteResponse.ok) {
        alert("Data berhasil dihapus!");
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
          {data ? (
            data.map((b, i) => {
              // Use dataMapping.map instead of collection.map
              return (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <th className="border px-4 py-2">{i + 1}</th>
                  <td className="border px-4 py-2">{b.deskripsi}</td>
                  <td className="border px-4 py-2 text-center">
                    <a href={b.link} target="_blank" className="text-red-500">
                      Download
                    </a>
                  </td>
                  <td className="text-center">
                    <p
                      onClick={() => handleDeleteData(b.id)}
                      className="text-red-400 hover:text-red-500 font-semibold hover:underline cursor-pointer"
                    >
                      Hapus
                    </p>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>
                <p>Loading....</p>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InputLppm;
