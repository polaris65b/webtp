import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Calendar.css"; // CSS 파일 추가

const ScheduleCalendar = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  return (
    <div className="calendar-container">
      <Calendar onChange={onChange} value={date} />
      <div>Selected date: {date.toDateString()}</div>
    </div>
  );
};

export default ScheduleCalendar;
