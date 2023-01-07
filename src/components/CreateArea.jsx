import React, { useState } from "react";

function CreateArea(props) {
  const [attendence, setAttendence] = useState({
    name: "",
    roll: "",
    checkIn: "",
    checkOut: ""
  });

  function handleClick(event) {
    props.onAdd(attendence);
    setAttendence({
      name: "",
      roll: "",
      checkIn: "",
      checkOut: ""
    });
    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setAttendence((prevAttendence) => {
      return { ...prevAttendence, [name]: value };
    });
  }

  return (
    <form>
      <ul>
        <li>
          <label> Name</label>
          <span>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={attendence.name}
            />
          </span>
        </li>
        <br />
        <li>
          <label> Roll</label>
          <span>
            <input
              type="text"
              placeholder="Enter Roll"
              name="roll"
              onChange={handleChange}
              value={attendence.roll}
            />
          </span>
        </li>
        <br />
        <li>
          <label> Check In</label>
          <span>
            <input
              type="time"
              name="checkIn"
              onChange={handleChange}
              value={attendence.checkIn}
            />
          </span>
        </li>
        <br />

        <li>
          <label> CheckOut</label>
          <span>
            <input
              type="time"
              name="checkOut"
              onChange={handleChange}
              value={attendence.checkOut}
            />
          </span>
        </li>
      </ul>
      <button type="submit" onClick={handleClick}>
        Mark Attend
      </button>
    </form>
  );
}

export default CreateArea;
