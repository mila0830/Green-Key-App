// components/Table.js
import React from "react";
import "./Table.css"; // Import the CSS file

const Table1 = ({ data }) => {
  return (
    <table className="custom-table">
      <thead>
        <tr>
          <th>Metric</th>
          <th>Code</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table1;