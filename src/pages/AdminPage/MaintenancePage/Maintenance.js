import React from "react";
import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import data from "./MOCK_DATA.json";
import { useState } from "react";
const Maintenance = () => {
  const [jobAssignment, setJobAssignment] = useState(data);
  const [addNewJob, setAddNewJob] = useState({
    jobID: "",
    car_info: "",
    mileage: "",
    dateTime: "",
    license_plate: "",
    description: "",
    status: false,
  });
  const [getJobID, setJobID] = useState(null);
  const [editJob, setEditJob] = useState({
    jobID: "",
    car_info: "",
    mileage: "",
    dateTime: "",
    license_plate: "",
    description: "",
    status: false,
  });

  //--------
  // adding functions
  //--------
  const handleAddSubmit = (e) => {
    e.preventDefault();

    setJobAssignment((prevArray) => [
      ...jobAssignment,
      {
        car_info: addNewJob.car_info,
        mileage: addNewJob.mileage,
        license_plate: addNewJob.license_plate,
        sitting_capacity: addNewJob.sitting_capacity,
        status: false,
      },
    ]);

    setAddNewJob({
      car_info: "",
      mileage: "",
      license_plate: "",
      sitting_capacity: "",
      status: false,
    });
  };

  //--------
  // edition funtion for readOnly
  //--------
  const handleEditClick = (event, job) => {
    event.preventDefault();
    setJobID(job.license_plate);
    setEditJob({
      car_info: job.car_info,
      mileage: job.mileage,
      license_plate: job.license_plate,
      sitting_capacity: job.sitting_capacity,
      status: false,
    });
  };

  //--------
  // edition funtion for edit
  //--------
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    var neweditJobs = [...jobAssignment];

    const index = jobAssignment.findIndex(
      (job) => job.license_plate === getJobID
    );
    neweditJobs[index] = {
      car_info: editJob.car_info,
      mileage: editJob.mileage,
      license_plate: editJob.license_plate,
      sitting_capacity: editJob.sitting_capacity,
      status: editJob.status,
    };
    setJobAssignment(neweditJobs);
    setJobID(null);
  };
  const handleEditChange = (event) => {
    event.preventDefault();
    setEditJob({ ...editJob, [event.target.name]: event.target.value });
  };
  const handleCancelClick = () => {
    setJobID(null);
  };
  //------
  //deletion
  //-----
  const handleDeleteClick = (jobID) => {
    var newJobs = [...jobAssignment];
    const index = jobAssignment.findIndex((job) => job.license_plate === jobID);
    newJobs.splice(index, 1);
    setJobAssignment(newJobs);
  };
  // ----
  //-----add to auction-----
  //----

  //--------
  // return
  //--------
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>car_info</th>
              <th>mileage</th>
              <th>License Plate</th>
              <th>Sitting Capacity</th>
            </tr>
          </thead>

          <tbody>
            {jobAssignment.map((job) => (
              <Fragment>
                {getJobID === job.license_plate ? (
                  <EditableRow
                    editJob={editJob}
                    handleEditChange={handleEditChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnly
                    job={job}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                    handleAddAuction={handleAddAuction}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <div>
        <form onSubmit={handleAddSubmit}>
          <input
            className="input"
            type="text"
            name="car_info"
            onChange={(e) => {
              setAddNewJob({
                ...addNewJob,
                car_info: e.target.value,
              });
            }}
            value={addNewJob.car_info}
            placeholder="please enter the car_info: "
          ></input>
          <input
            className="input"
            type="integer"
            onChange={(e) => {
              setAddNewJob({ ...addNewJob, mileage: e.target.value });
            }}
            value={addNewJob.mileage}
            placeholder="please enter the mileage: "
          ></input>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setAddNewJob({ ...addNewJob, license_plate: e.target.value });
            }}
            value={addNewJob.license_plate}
            placeholder="please enter the License Plate: "
          ></input>
          <input
            className="input"
            type="integer"
            value={addNewJob.sitting_capacity}
            onChange={(e) => {
              setAddNewJob({
                ...addNewJob,
                sitting_capacity: e.target.value,
              });
            }}
            placeholder="please enter the sitting capacity: "
          ></input>
          <button className="add-driver">Add</button>
        </form>
      </div>
    </div>
  );
};

export default Maintenance;
