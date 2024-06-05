import React from "react";
import ScheduleCalendar from "../components/Calendar";
import "./Schedule.css"; // CSS 파일 추가

const Schedule = () => {
  return (
    <div className="schedule-page">
      <ScheduleCalendar />
    </div>
  );
};

export default Schedule;
