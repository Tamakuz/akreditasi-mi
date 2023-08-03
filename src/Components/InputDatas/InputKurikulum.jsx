import { useState, useEffect } from "react";

const InputKurikulum = () => {
  const [id, setId] = useState(0);
  const [matkul, setMatkul] = useState("");
  const [sks, setSks] = useState(0);
  const [tp, setTp] = useState(true);
  const [semester, setSemester] = useState(0);
  const [data, setData] = useState([]);
  const [succes, setSucces] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://knowledgeable-painted-guarantee.glitch.me/kurikulums"
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
  }, [succes]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = {
        id,
        matkul,
        sks,
        tp,
        semester,
      };

      const postResponse = await fetch(
        "https://knowledgeable-painted-guarantee.glitch.me/kurikulums",
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
        setId(0);
        setMatkul("");
        setSks(0);
        setTp(true);
        setSemester(0);
        setSucces(!succes);
      } else {
        return alert("Maaf Data Sudah Ada Silahkan Periksa");
      }
    } catch (error) {
      console.log("Terjadi kesalahan:", error);
    }
  };

  const handleDeleteData = async (kurikulumId) => {
    try {
      // Periksa apakah data dengan id yang diberikan ada dalam array
      const existingData = data.find(
        (kurikulum) => kurikulum.id === kurikulumId
      );
      if (!existingData) {
        return alert("Data tidak ditemukan!");
      }

      const deleteResponse = await fetch(
        `https://knowledgeable-painted-guarantee.glitch.me/kurikulums/${kurikulumId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (deleteResponse.ok) {
        alert("Data berhasil dihapus!");
        setSucces(!succes);
      } else {
        alert("Gagal menghapus data!");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <form
        onSubmit={handleSubmit}
        className=" p-4 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label htmlFor="judul" className="block font-medium mb-1">
            ID :
          </label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="deskripsi" className="block font-medium mb-1">
            Mata Kuliah :
          </label>
          <input
            type="text"
            value={matkul}
            onChange={(e) => setMatkul(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block font-medium mb-1">
            SKS :
          </label>
          <input
            type="number"
            value={sks}
            onChange={(e) => setSks(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block font-medium mb-1">
            T/P :
          </label>
          <select
            type="number"
            value={tp}
            onChange={(e) => setTp(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value={true}>Teori</option>
            <option value={false}>Praktek</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block font-medium mb-1">
            Semester :
          </label>
          <input
            type="number"
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
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
            <th className="w-[40px] px-4 py-2">No</th>
            <th className="text-center px-4 py-2">ID</th>
            <th className="py-3">Mata Kuliah</th>
            <th className="text-center px-4 py-2">SKS</th>
            <th className="text-center px-4 py-2">T/P</th>
            <th className="text-center px-4 py-2">Semester</th>
          </tr>
        </thead>
        <tbody>
          {data.map((kurikulum, i) => {
            return (
              <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}>
                <td className="text-center border px-4 py-2">{i + 1}</td>
                <td className="text-center border px-4 py-2">{kurikulum.id}</td>
                <td className="border px-4 py-2">{kurikulum.matkul}</td>
                <td className="text-center border px-4 py-2">
                  {kurikulum.sks}
                </td>
                <td className="text-center border px-4 py-2">
                  {kurikulum.tp ? "T" : "P"}
                </td>
                <td className="text-center border px-4 py-2">
                  {kurikulum.semester}
                </td>
                <td>
                  <p
                    onClick={() => handleDeleteData(kurikulum.id)} // Panggil fungsi handleDeleteData dengan dataId dan rowIndex
                    className="text-red-400 hover:text-red-500 font-semibold hover:underline cursor-pointer"
                  >
                    Hapus
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default InputKurikulum;
