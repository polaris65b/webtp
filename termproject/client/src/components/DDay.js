import React from "react";
import moment from "moment";

const DDay = ({ eventDate }) => {
  const today = moment();
  const event = moment(eventDate);
  const diff = event.diff(today, "days");

  return (
    <div>
      <h2>
        D-Day: {diff} days left until {event.format("MMMM Do YYYY")}
      </h2>
    </div>
  );
};

export default DDay;
