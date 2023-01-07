import React from "react";

function Table(props) {
  return (
    <table className="table-content">
      <tr>
        <td style={{ width: "204px" }}>{props.name}</td>
        <td style={{ width: "100px" }}>{props.roll}</td>
        <td style={{ width: "100px" }}>{props.checkIn}</td>
        <td style={{ width: "100px" }}>{props.checkOut}</td>
      </tr>
    </table>
  );
}

export default Table;
