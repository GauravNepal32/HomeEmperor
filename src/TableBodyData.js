import React from "react";

const TableBodyData = ({ varTableData }) => {
  return (
    <tr>
      <td>{varTableData.data1}</td>
      <td>{varTableData.data2}</td>
    </tr>
  );
};

export default TableBodyData;
