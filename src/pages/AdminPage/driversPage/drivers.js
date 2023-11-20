import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import data from "../MOCK_DATA.json";
import { useState } from "react";
import EditableRow from "./editableRow";
import ReadOnly from "./readOnly";
const Drivers = () => {
  const [driver, setDriver] = useState(data);
  const [getId, setId] = useState(null);
  const handleEditClick = (event, driver) => {
    event.preventDefault();
    setId(driver.gov_id);
  };
  const [addNewDriver, setAddNewDriver] = useState({
    name: "",
    surname: "",
    email: "",
    number: "",
    address: "",
    license_code: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDriver = {
      name: addNewDriver.name,
      surname: addNewDriver.surname,
      email: addNewDriver.email,
      number: addNewDriver.number,
      address: addNewDriver.address,
      license_code: addNewDriver.license_code,
    };
    setDriver((prevArray) => [...driver, newDriver]);
    console.log(driver);
    setAddNewDriver({
      name: "",
      surname: "",
      email: "",
      number: "",
      address: "",
      license_code: "",
    });
  };
  return (
    <div>
      <form>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Number</th>
              <th>Address</th>
              <th>License Code</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {driver.map((driver) => (
              <Fragment>
                {getId === driver.gov_id ? (
                  <EditableRow />
                ) : (
                  <ReadOnly driver={driver} handleEditClick={handleEditClick} />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
        <div className="new-driver">
          <form onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              onChange={(e) => {
                setAddNewDriver({ ...addNewDriver, name: e.target.value });
              }}
              value={addNewDriver.name}
              placeholder="please enter your name: "
            ></input>
            <input
              className="input"
              type="text"
              onChange={(e) => {
                setAddNewDriver({ ...addNewDriver, surname: e.target.value });
              }}
              value={addNewDriver.surname}
              placeholder="please enter your Surname: "
            ></input>
            <input
              className="input"
              type="email"
              value={addNewDriver.email}
              onChange={(e) => {
                setAddNewDriver({ ...addNewDriver, email: e.target.value });
              }}
              placeholder="please enter your email: "
            ></input>
            <input
              className="input"
              type="integer"
              value={addNewDriver.number}
              onChange={(e) => {
                setAddNewDriver({ ...addNewDriver, number: e.target.value });
              }}
              placeholder="please enter your phone number: "
            ></input>
            <input
              className="input"
              type="text"
              value={addNewDriver.address}
              onChange={(e) => {
                setAddNewDriver({ ...addNewDriver, address: e.target.value });
              }}
              placeholder="please enter your address: "
            ></input>
            <input
              className="input"
              type="integer"
              value={addNewDriver.license_code}
              onChange={(e) => {
                setAddNewDriver({
                  ...addNewDriver,
                  license_code: e.target.value,
                });
              }}
              placeholder="please enter your License_code: "
            ></input>
            <button className="add-driver">Add</button>
          </form>
        </div>
      </form>
      <div>
        <h1>Next Page</h1>
        <Link to="/admin">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default Drivers;
