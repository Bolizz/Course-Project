import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../../styles.css';

const Auction = () => {
  const { state } = useLocation();
  const [auctionCar, setAuctionCar] = useState(state.auctionCar);
  var soldCars = [];
  if (!state || !state.auctionCar || state.auctionCar.length === 0) {
    return <p>No cars available for auction.</p>;
  }
  const handleDeleteAuction = (carPlate) => {
    var newCars = [...auctionCar];
    const index = auctionCar.findIndex((car) => car.license_plate === carPlate);
    newCars.splice(index, 1);
    setAuctionCar(newCars);
  };
  const onSold = (carPlate) => {
    const index = auctionCar.findIndex((car) => car.license_plate === carPlate);
    soldCars += index;
  };
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Model</th>
            <th>Year</th>
            <th>License Plate</th>
            <th>Sitting Capacity</th>
          </tr>
        </thead>
        <tbody className="read-only">
          {state.auctionCar.map((car) => (
            <tr>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.license_plate}</td>
              <td>{car.sitting_capacity}</td>
              <td>
                <button onClick={() => handleDeleteAuction(car.license_plate)}>
                  Delete
                </button>
                <button onClick={() => onSold(car.license_plate)}>Sold</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
        to={{
          pathname: "/vehicles",
        }}
      >
        <p>Back to Vehicles</p>
      </Link>
    </div>
  );
};

export default Auction;
