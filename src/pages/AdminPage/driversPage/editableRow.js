import React from "react";

const editableRow = () => {
  return (
    <tr>
      <td>
        <input
          className="input"
          type="text"
          placeholder="please enter your name: "
        ></input>
      </td>
      <td>
        <input
          className="input"
          type="text"
          placeholder="please enter your Surname: "
        ></input>
      </td>
      <td>
        <input
          className="input"
          type="email"
          placeholder="please enter your email: "
        ></input>
      </td>
      <td>
        <input
          className="input"
          type="integer"
          placeholder="please enter your phone number: "
        ></input>
      </td>
      <td>
        <input
          className="input"
          type="text"
          placeholder="please enter your address: "
        ></input>
      </td>
      <td>
        <input
          className="input"
          type="integer"
          placeholder="please enter your License_code: "
        ></input>
      </td>
    </tr>
  );
};

export default editableRow;
