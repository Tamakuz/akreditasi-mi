import { useContext, useEffect } from "react";
import { GlobalState } from "../../Context/Context";
import Layout from "../../Components/Layout";
import LayoutTamplate from "../../Components/LayoutTamplate";
import datas from "../../../datas.json";

const RenstraLppm = () => {
  const { dispatch } = useContext(GlobalState);

  useEffect(() => {
    dispatch({
      type: "UPDATE_PAGE",
      payload: { page: "LPPM", subPage: "Renstra" },
    });
  }, []);
  return (
    <Layout>
      <LayoutTamplate titleHeader={"LPPM Renstra"}>
        <div className="overflow-x-auto w-full md:w-[calc(100% - 300px)]">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">No</th>
                <th className="px-4 py-2 w-[400px]">Deskripsi</th>
                <th className="px-4 py-2">Link</th>
              </tr>
            </thead>
            <tbody>
              {datas.renstraLppm.map((b, i) => {
                return (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-gray-100"}
                  >
                    <th className="border px-4 py-2">{i + 1}</th>
                    <td className="border px-4 py-2">{b.deskripsi}</td>
                    <td className="border px-4 py-2">
                      <a href={b.link} target="_blank" className="text-red-500">
                        Download
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </LayoutTamplate>
    </Layout>
  );
};

export default RenstraLppm;
