import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Table from "./Table";
//import Table from "./components/Table";
function App() {
  const [attendeces, setAttendences] = useState([]);

  function addAttendence(newAttendence) {
    setAttendences((prevAttendences) => {
      return [...prevAttendences, newAttendence];
    });
  }
  return (
    <div className="main-container">
      <nav>
        <h1>Attendence App</h1>
      </nav>
      <div className="create-area">
        <CreateArea onAdd={addAttendence} />
      </div>

      <h2>
        Attendence Table &nbsp;(
        {new Date().getDate() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getFullYear()}
        )
      </h2>

      <div>
        <table className="table-heading">
          <tr>
            <th style={{ width: "204px" }}>Name</th>
            <th style={{ width: "100px" }}>Roll</th>
            <th style={{ width: "100px" }}>CheckIN</th>
            <th style={{ width: "100px" }}>CheckOut</th>
          </tr>
        </table>

        {attendeces.map((item, index) => {
          return (
            <Table
              name={item.name}
              roll={item.roll}
              checkIn={item.checkIn}
              checkOut={item.checkOut}
              id={index}
            />
          );
        })}
      </div>

      <h3 className="studentCount">
        Student Present In the School is: {attendeces.length}
      </h3>
    </div>
  );
}

export default App;
