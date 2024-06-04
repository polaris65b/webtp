import React from "react";
import ScheduleCalendar from "../components/Calendar";
import "./Schedule.css"; // CSS 파일 추가

const Schedule = () => {
  return (
    <div className="schedule-page">
      <h2>Schedule</h2>
      <ScheduleCalendar />
    </div>
  );
};

export default Schedule;
