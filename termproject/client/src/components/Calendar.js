import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Calendar as BigCalendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./Calendar.css";

const localizer = momentLocalizer(moment);

const ScheduleCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [eventText, setEventText] = useState("");
  const [eventStart, setEventStart] = useState("");
  const [eventEnd, setEventEnd] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [calendarDate, setCalendarDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const onDoubleClickDay = (date) => {
    setDate(date);
    setShowModal(true);
  };

  const handleAddEvent = () => {
    const newEvent = {
      title: eventText,
      start: new Date(eventStart),
      end: new Date(eventEnd),
    };
    setEvents([...events, newEvent]);
    setShowModal(false);
    setEventText("");
    setEventStart("");
    setEventEnd("");
  };

  const handleEditEvent = () => {
    const updatedEvents = events.map((event) =>
      event === selectedEvent
        ? {
            ...event,
            title: eventText,
            start: new Date(eventStart),
            end: new Date(eventEnd),
          }
        : event
    );
    setEvents(updatedEvents);
    setShowEditModal(false);
    setSelectedEvent(null);
    setEventText("");
    setEventStart("");
    setEventEnd("");
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((e) => e !== selectedEvent));
    setShowEditModal(false);
    setSelectedEvent(null);
  };

  const handleTodayClick = () => {
    const today = new Date();
    setDate(today);
  };

  const handleSelectSlot = ({ start, end }) => {
    setEventStart(start);
    setEventEnd(end);
    setShowModal(true);
  };

  const handleDoubleClickEvent = (event) => {
    setSelectedEvent(event);
    setEventText(event.title);
    setEventStart(event.start.toISOString().slice(0, 16));
    setEventEnd(event.end.toISOString().slice(0, 16));
    setShowEditModal(true);
  };

  const tileClassName = ({ date }) => {
    const day = date.getDay();
    if (day === 6) {
      return "saturday";
    }
    return null;
  };

  const formatDay = (locale, date) => {
    return date.getDate();
  };

  const handleApplyDate = () => {
    setEventStart(calendarDate.toISOString().slice(0, 16));
    setEventEnd(calendarDate.toISOString().slice(0, 16));
  };

  return (
    <div className="calendar-container">
      <button className="today-button" onClick={handleTodayClick}>
        Today
      </button>
      <Calendar
        onChange={onChange}
        value={date}
        onClickDay={onChange}
        onDoubleClickDay={onDoubleClickDay}
        tileClassName={tileClassName}
        formatDay={formatDay}
      />
      <div style={{ height: 500, width: "100%", marginTop: 20 }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          selectable
          views={["month", "week"]}
          date={date}
          onNavigate={(newDate) => setDate(newDate)}
          onSelectSlot={handleSelectSlot}
          onDoubleClickEvent={handleDoubleClickEvent}
        />
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>Add Event</h4>
            <input
              type="text"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              placeholder="Event description"
            />
            <Calendar
              onChange={setCalendarDate}
              value={calendarDate}
              tileClassName={tileClassName}
              formatDay={formatDay}
            />
            <button onClick={handleApplyDate}>Apply Date</button>
            <input
              type="datetime-local"
              value={eventStart}
              onChange={(e) => setEventStart(e.target.value)}
              placeholder="Start time"
            />
            <input
              type="datetime-local"
              value={eventEnd}
              onChange={(e) => setEventEnd(e.target.value)}
              placeholder="End time"
            />
            <button onClick={handleAddEvent}>Add</button>
            <button onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      {showEditModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>Edit Event</h4>
            <input
              type="text"
              value={eventText}
              onChange={(e) => setEventText(e.target.value)}
              placeholder="Event description"
            />
            <Calendar
              onChange={setCalendarDate}
              value={calendarDate}
              tileClassName={tileClassName}
              formatDay={formatDay}
            />
            <button onClick={handleApplyDate}>Apply Date</button>
            <input
              type="datetime-local"
              value={eventStart}
              onChange={(e) => setEventStart(e.target.value)}
              placeholder="Start time"
            />
            <input
              type="datetime-local"
              value={eventEnd}
              onChange={(e) => setEventEnd(e.target.value)}
              placeholder="End time"
            />
            <button onClick={handleEditEvent}>Save</button>
            <button onClick={handleDeleteEvent}>Delete</button>
            <button onClick={() => setShowEditModal(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScheduleCalendar;
