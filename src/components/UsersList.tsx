import React, { useContext } from "react";
import StoreContext from "../context/StoreContext";
import Table from "./reusable/Table";

type Props = {};

const UsersList = (props: Props) => {
  const { store } = useContext(StoreContext);
  const data = (store?.users || []).map((user) => {
    return {
      ...user,
      names: `${user.firstName} ${user.lastName}`,
      creationDate: new Date(user.createdAt).toLocaleDateString(),
    };
  });
  const columns = [
    {
      Header: "Names",
      accessor: "names",
    },
    {
      Header: "Company",
      accessor: "companyName",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Creation Date",
      accessor: "creationDate",
    },
  ];
  return <Table columns={columns} data={data} showActions={true}></Table>;
};

export default UsersList;
