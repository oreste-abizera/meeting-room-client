import React from "react";
import DeleteIcon from "../IconButtons/DeleteIcon";
import EditIcon from "../IconButtons/EditIcon";

type Props = {
  columns: Array<{ Header: string; accessor: string }>;
  data: Array<any>;
  showActions?: boolean;
};

const Table = ({ data, columns, showActions }: Props) => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs mb-8">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
            <tr>
              <td className="px-4 py-3">ID</td>
              {columns.map((column, index) => {
                return (
                  <td className="px-4 py-3" key={index}>
                    {column.Header}
                  </td>
                );
              })}
              {showActions && <td className="px-4 py-3">Actions</td>}
            </tr>
          </thead>
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 text-gray-700 dark:text-gray-400">
            {data.map((item, index) => {
              return (
                <tr className="" key={index}>
                  <td className="px-4 py-3">
                    <p className="font-semibold">{index + 1}</p>
                  </td>
                  {columns.map((column, index) => {
                    return (
                      <td className="px-4 py-3" key={index}>
                        <p className="font-semibold">{item[column.accessor]}</p>
                      </td>
                    );
                  })}
                  {showActions && (
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4">
                        <EditIcon />
                        <DeleteIcon />
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
