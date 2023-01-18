import React from "react";
import Table from "./reusable/Table";

type Props = {};

const UsersList = (props: Props) => {
  const data = [
    {
      names: "John Doe",
      companyName: "Company 1",
      email: "johndoe@gmail.com",
      country: "Country 1",
      creationDate: "2021-01-01",
    },
    {
      names: "Jane Doe",
      companyName: "Company 2",
      email: "janedoe@gmail.com",
      country: "Country 2",
      creationDate: "2021-01-01",
    },
  ];
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
