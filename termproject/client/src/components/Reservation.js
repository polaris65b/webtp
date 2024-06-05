import React, { useState } from "react";

const Reservation = () => {
  const [reservations, setReservations] = useState([]);

  const handleReserve = (date, time) => {
    setReservations([...reservations, { date, time }]);
  };

  return (
    <div>
      <h2>Reservation</h2>
      <button onClick={() => handleReserve("2024-06-10", "10:00 AM")}>
        Reserve June 10th, 10:00 AM
      </button>
      <ul>
        {reservations.map((res, index) => (
          <li key={index}>
            {res.date} at {res.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservation;
