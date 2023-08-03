import { useState, useEffect } from "react";

const InputDataKarya = () => {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [tahun, setTahun] = useState(Number);
  const [doc, setDoc] = useState("");
  const [video, setVideo] = useState("");

const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://knowledgeable-painted-guarantee.glitch.me/karya_mahasiswa"
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
}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new object with the form data
      const newMahasiswa = {
        nama,
        judul,
        tahun: String(tahun), // Convert to string as the API expects a string for tahun
        doc: doc.startsWith("https://") ? doc : `https://${doc}`, // Check and add "https://" prefix if missing
        video: video.startsWith("https://") ? video : `https://${video}`, // Check and add "https://" prefix if missing
      };

      // Make the POST request to the server
      const response = await fetch(
        "https://knowledgeable-painted-guarantee.glitch.me/karya_mahasiswa",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMahasiswa),
        }
      );

      if (!response.ok) {
        return alert("Gagal Menambahkan Data");
      }

      alert("Data berhasil ditambahkan");

      setNama("");
      setJudul("");
      setTahun(0);
      setDoc("");
      setVideo("");
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleDeleteData = async (id) => {
    try {
      const deleteResponse = await fetch(
        `https://knowledgeable-painted-guarantee.glitch.me/karya_mahasiswa/${id}`,
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
      console.error("Terjadi kesalahan:", error);
    }
  };

  return (
    <section className=" py-10">
      <form
        onSubmit={handleSubmit}
        className=" p-4 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label htmlFor="judul" className="block font-medium mb-1">
            Nama:
          </label>
          <input
            type="text"
            id="nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
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
            Tahun:
          </label>
          <input
            type="number"
            id="tahun"
            value={tahun}
            onChange={(e) => setTahun(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block font-medium mb-1">
            Link Doc:
          </label>
          <input
            type="text"
            id="link-doc"
            value={doc}
            onChange={(e) => setDoc(e.target.value)}
            className="w-full px-3 py-2 rounded border focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="link" className="block font-medium mb-1">
            Link Video:
          </label>
          <input
            type="text"
            id="link-video"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
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
      <div>
        <h1 className="text-2xl font-bold text-gray-7  00">
          Daftar Karya Mahasiswa
        </h1>
        <table className="table table-zebra">
          <thead>
            <tr className="bg-gray-200">
              <td className="w-[40px] px-4 py-2">No</td>
              <td>Nama</td>
              <td>Judul</td>
              <td>Tahun</td>
              <td>Link</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((mhs, i) => {
              return (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="text-center border px-4 py-2">{i + 1}</td>
                  <td className="text-center border px-4 py-2">{mhs.nama}</td>
                  <td className="text-center border px-4 py-2">{mhs.judul}</td>
                  <td className="text-center border px-4 py-2">{mhs.tahun}</td>
                  <td className="flex gap-3 h-[44px] w-full justify-center items-center text-center border px-4 py-2">
                    {mhs.doc !== "https://" && (
                      <a
                        href={mhs.doc}
                        target="_blank"
                        className="text-blue-500"
                      >
                        Doc
                      </a>
                    )}
                    {mhs.video !== "https://" && (
                      <a
                        href={mhs.video}
                        target="_blank"
                        className="text-red-500"
                      >
                        Video
                      </a>
                    )}
                  </td>
                  <td className="text-center border px-4 py-2">
                    <p
                      onClick={() => handleDeleteData(mhs.id)} // Panggil fungsi handleDeleteData dengan dataId dan rowIndex
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
    </section>
  );
};

export default InputDataKarya;
