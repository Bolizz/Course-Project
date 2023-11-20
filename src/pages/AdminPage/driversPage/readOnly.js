import React from "react";

const readOnly = ({ driver, handleEditClick }) => {
  return (
    <tr>
      <th>{driver.first_name}</th>
      <th>{driver.last_name}</th>
      <th>{driver.email}</th>
      <th>{driver.number}</th>
      <th>{driver.address}</th>
      <th>{driver.license_code}</th>
      <th>
        <button onClick={(event) => handleEditClick(event, driver)}>
          Edit
        </button>
      </th>
      <th>Delete</th>
    </tr>
  );
};

export default readOnly;
