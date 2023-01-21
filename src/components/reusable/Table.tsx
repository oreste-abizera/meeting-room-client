import React, { ReactNode } from "react";
import ApproveIcon from "../IconButtons/ApproveIcon";
import DeleteIcon from "../IconButtons/DeleteIcon";
import EditIcon from "../IconButtons/EditIcon";
import RejectIcon from "../IconButtons/RejectIcon";

type Props = {
  columns: Array<{
    Header: string;
    accessor: string;
    customCell?: (row: any) => ReactNode;
  }>;
  data: Array<any>;
  showActions?: boolean;
  approveActions?: boolean;
  handler1?: (id: string) => void;
  handler2?: (id: string) => void;
};

const Table = ({
  data,
  columns,
  showActions,
  approveActions,
  handler1,
  handler2,
}: Props) => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs mb-8">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-no-wrap">
          <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-600 bg-gray-50 dark:text-[#DDE2FF] dark:bg-[#363740]">
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
          <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-[#363740] text-gray-700 dark:text-[#DDE2FF]">
            {data.map((item, index) => {
              return (
                <tr className="" key={index}>
                  <td className="px-4 py-3">
                    <p className="font-semibold">{index + 1}</p>
                  </td>
                  {columns.map((column, index) => {
                    return (
                      <td className="px-4 py-3" key={index}>
                        {column.customCell ? (
                          column.customCell(item)
                        ) : (
                          <p className="">{item[column.accessor]}</p>
                        )}
                      </td>
                    );
                  })}
                  {showActions && (
                    <td className="px-4 py-3">
                      <div className="flex items-center space-x-4">
                        {approveActions ? (
                          <RejectIcon onClick={() => handler1?.(item._id)} />
                        ) : (
                          <EditIcon onClick={() => handler1?.(item._id)} />
                        )}
                        {approveActions ? (
                          <ApproveIcon onClick={() => handler2?.(item._id)} />
                        ) : (
                          <DeleteIcon onClick={() => handler2?.(item._id)} />
                        )}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}

            {data.length === 0 && (
              <tr>
                <td
                  className="px-4 py-3 text-left"
                  colSpan={columns.length + 1 + (showActions ? 1 : 0)}
                >
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
