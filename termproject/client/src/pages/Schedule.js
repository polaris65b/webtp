import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Schedule.css";
import {
  Calendar as WeeklyCalendar,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Schedule = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventClick = (event) => {
    const { title, start, end } = event;
    const newTitle = prompt("Edit event title", title);
    if (newTitle) {
      setEvents(
        events.map((evt) => (evt === event ? { ...evt, title: newTitle } : evt))
      );
    }
  };

  const handleAddEvent = (slotInfo) => {
    const title = prompt("New Event name");
    if (title) {
      setEvents([
        ...events,
        { title, start: slotInfo.start, end: slotInfo.end },
      ]);
    }
  };

  const handleDoubleClickEvent = (event) => {
    if (window.confirm(`Do you want to delete the event '${event.title}'?`)) {
      setEvents(events.filter((evt) => evt !== event));
    }
  };

  return (
    <div className="schedule-container">
      <h2>Schedule</h2>
      <div className="calendar-container">
        <Calendar
          className="monthly-calendar"
          onChange={setDate}
          value={date}
          onClickDay={handleDateClick}
        />
        <WeeklyCalendar
          className="weekly-calendar"
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          views={["week"]}
          onSelectSlot={handleAddEvent}
          selectable
          onDoubleClickEvent={handleDoubleClickEvent}
          style={{ height: 500, width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Schedule;
