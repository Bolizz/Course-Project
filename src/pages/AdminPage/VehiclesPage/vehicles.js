import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import data from "./MOCK_DATA.json";
import { useState } from "react";
import EditableRow from "./editableRow";

import ReadOnly from "./readOnly";
const Vehicles = () => {
  // data
  const [carData, setCarData] = useState(data);
  const [addNewCar, setAddNewCar] = useState({
    model: "",
    year: "",
    license_plate: "",
    sitting_capacity: "",
    auction: false,
  });
  const [getPlate, setPlate] = useState(null);
  const [editCar, setEditCar] = useState({
    model: "",
    year: "",
    license_plate: "",
    sitting_capacity: "",
    auction: false,
  });
  const [auctionCar, setAuctionCar] = useState([]);

  // useEffect(() => {
  //   const carsAfterAuction = data.filter(
  //     (car) => !soldCars.some((sold) => sold.licensePlate === car.licensePlate)
  //   );

  //   // Update the state with the new array
  //   setCarData(carsAfterAuction);
  // }, [carData, soldCars]);}
  //--------
  // adding functions
  //--------
  const handleAddSubmit = (e) => {
    e.preventDefault();

    setCarData((prevArray) => [
      ...carData,
      {
        model: addNewCar.model,
        year: addNewCar.year,
        license_plate: addNewCar.license_plate,
        sitting_capacity: addNewCar.sitting_capacity,
        auction: false,
      },
    ]);

    setAddNewCar({
      model: "",
      year: "",
      license_plate: "",
      sitting_capacity: "",
      auction: false,
    });
  };

  //--------
  // edition funtion for readOnly
  //--------
  const handleEditClick = (event, car) => {
    event.preventDefault();
    setPlate(car.license_plate);
    setEditCar({
      model: car.model,
      year: car.year,
      license_plate: car.license_plate,
      sitting_capacity: car.sitting_capacity,
      auction: false,
    });
  };

  //--------
  // edition funtion for edit
  //--------
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    var newEditCars = [...carData];

    const index = carData.findIndex((car) => car.license_plate === getPlate);
    newEditCars[index] = {
      model: editCar.model,
      year: editCar.year,
      license_plate: editCar.license_plate,
      sitting_capacity: editCar.sitting_capacity,
      auction: editCar.auction,
    };
    setCarData(newEditCars);
    setPlate(null);
  };
  const handleEditChange = (event) => {
    event.preventDefault();
    setEditCar({ ...editCar, [event.target.name]: event.target.value });
  };
  const handleCancelClick = () => {
    setPlate(null);
  };
  //------
  //deletion
  //-----
  const handleDeleteClick = (carPlate) => {
    var newCars = [...carData];
    const index = carData.findIndex((car) => car.license_plate === carPlate);
    newCars.splice(index, 1);
    setCarData(newCars);
  };
  // ----
  //-----add to auction-----
  //----
  const handleAddAuction = (sellCar) => {
    const isCarAlreadySelected = auctionCar.some(
      (car) => car.license_plate === sellCar.license_plate
    );
    if (!isCarAlreadySelected) {
      var newStat = [...carData];
      const index = carData.findIndex(
        (car) => car.license_plate === sellCar.license_plate
      );
      newStat[index].auction = true;
      setCarData(newStat);
      setAuctionCar((prevArray) => [
        ...auctionCar,
        {
          model: sellCar.model,
          year: sellCar.year,
          license_plate: sellCar.license_plate,
          sitting_capacity: sellCar.sitting_capacity,
          auction: true,
        },
      ]);
      console.log(auctionCar);
    }
  };

  //--------
  // return
  //--------
  return (
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Year</th>
              <th>License Plate</th>
              <th>Sitting Capacity</th>
            </tr>
          </thead>

          <tbody>
            {carData.map((car) => (
              <Fragment>
                {getPlate === car.license_plate ? (
                  <EditableRow
                    editCar={editCar}
                    handleEditChange={handleEditChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnly
                    car={car}
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
            name="model"
            onChange={(e) => {
              setAddNewCar({
                ...addNewCar,
                model: e.target.value,
              });
            }}
            value={addNewCar.model}
            placeholder="please enter the model: "
          ></input>
          <input
            className="input"
            type="integer"
            onChange={(e) => {
              setAddNewCar({ ...addNewCar, year: e.target.value });
            }}
            value={addNewCar.year}
            placeholder="please enter the year: "
          ></input>
          <input
            className="input"
            type="text"
            onChange={(e) => {
              setAddNewCar({ ...addNewCar, license_plate: e.target.value });
            }}
            value={addNewCar.license_plate}
            placeholder="please enter the License Plate: "
          ></input>
          <input
            className="input"
            type="integer"
            value={addNewCar.sitting_capacity}
            onChange={(e) => {
              setAddNewCar({
                ...addNewCar,
                sitting_capacity: e.target.value,
              });
            }}
            placeholder="please enter the sitting capacity: "
          ></input>
          <button className="add-driver">Add</button>
        </form>
      </div>
      <Link
        to={{
          pathname: "/auction",
          state: {
            auctionCar: auctionCar,
          },
        }}
      >
        <p className="box">auction</p>
      </Link>
    </div>
  );
};
export default Vehicles;