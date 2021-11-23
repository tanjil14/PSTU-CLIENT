import React from "react";

const TableDataForCsePage = ({ courseCode, courseTitle, creditHour }) => {
  return (
    <tr>
      <td>{courseCode}</td>
      <td>{courseTitle}</td>
      <td>{creditHour}</td>
      <td>Download</td>
    </tr>
  );
};

export default TableDataForCsePage;
