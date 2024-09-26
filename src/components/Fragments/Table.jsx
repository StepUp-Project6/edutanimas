import HeadSection2 from "../Elements/HeadSection2";

const Table = ({ tableData }) => {
  return (
    <div className="w-full mt-4">
      <div className="mb-4">
        <HeadSection2
          classname="text-sm lg:text-xl"
          width="text-wrap lg:w-[790px] font-semibold text-start"
          content={[
            { title: "Contoh penerapan agroforestri di ", classname: "" },
            { title: "Pulau Jawa", classname: "text-primary" },
          ]}
        />
      </div>
      <div className="w-full overflow-x-auto rounded-lg no-scrollbar lg:scrollbar-visible">
        <table className="min-w-[1138px] w-full text-left text-xs lg:text-sm border-collapse border font-mulish ">
          <thead className="bg-primary/85 border-white ">
            <tr className="border">
              <th className="ps-12 border border-t-primary/85  border-l-primary/85 px-4 py-2 w-[230px]">
                Sistem
              </th>
              <th className="ps-12 border border-t-primary/85 px-4 py-2 w-[350px]">
                Sub-Sistem
              </th>
              <th className="ps-12 border border-t-primary/85 px-4 py-2 w-[269px]">
                Contoh Praktik
              </th>
              <th className="ps-12 border border-t-primary/85 border-r-primary/85 px-4 py-2 w-[289px]">
                Contoh Teknologi
              </th>
            </tr>
          </thead>
          <tbody className="bg-primary/10">
            {tableData.map((data) => (
              <>
                {data.rows.map((row, index) => (
                  <tr key={`${data.sistem}-${index}`}>
                    {/* Hanya tampilkan 'sistem' pada baris pertama dari setiap sistem */}
                    {index === 0 && (
                      <td
                        className="ps-12 border border-primary/85 px-4 py-2"
                        rowSpan={data.rows.length}
                      >
                        {data.sistem}
                      </td>
                    )}
                    <td className="border ps-12 border-primary/85 px-4 py-2">
                      {row.subSistem}
                    </td>
                    <td className="border ps-12 border-primary/85 px-4 py-2">
                      {row.contohPraktik}
                    </td>
                    <td className="border ps-12 border-primary/85 px-4 py-2">
                      {row.contohTeknologi}
                    </td>
                  </tr>
                ))}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
