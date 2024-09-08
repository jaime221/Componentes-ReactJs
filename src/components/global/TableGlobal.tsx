import { TableProps } from "./types/table-global.types";

function TableGlobal<T>({ data, columns }: TableProps<T>): JSX.Element {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-md">
        <thead>
          <tr className="bg-red-500 text-white">
            {columns.map((column, index) => (
              <th key={index} className="py-3 px-2 md:px-5 text-left">{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition-colors duration-300">
              {columns.map((column, colIndex) => (
                <td key={colIndex} className={column.cellClass || ""}>
                  {column.Cell ? column.Cell(item) : (item[column.accessor] as any)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableGlobal;
