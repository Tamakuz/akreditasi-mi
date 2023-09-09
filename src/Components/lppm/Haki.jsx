import { useGetData } from "../../hooks/apiMethod";

const Haki = () => {
  const apiUrl = "https://knowledgeable-painted-guarantee.glitch.me/haki_lppm";
  const {datas, isLoading} = useGetData(apiUrl)

  return (
    <div className="overflow-x-auto w-full md:w-[calc(100% - 300px)]">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 w-[50px]">No</th>
            <th className="px-4 py-2 w-[400px]">Deskripsi</th>
            <th className="px-4 py-2 w-[100px]">Link</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td>
                <p>Loading....</p>
              </td>
            </tr>
          ) : (
            datas.map((b, i) => {
              return (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <th className="border px-4 py-2">{i + 1}</th>
                  <td className="border px-4 py-2">{b.deskripsi}</td>
                  <td className="border px-4 py-2 text-center">
                    <a
                      rel="noopener noreferrer"
                      href={b.link}
                      target="_blank"
                      className="text-red-500"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Haki;
