import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => {
  const { events, editAvailablity, canEdit, updateAvailability } = props;

  // onClick event that clears current events array from state then makes calendar selectable
  // allows user to slect free times
  // saves free times to state
  // on submit makes call to update freetimes

  return (
    <>
      <h1>Planit</h1>
      <h4>Show My Calendar</h4>
      <h4 onClick={ updateAvailability }>
        Edit Availablity
      </h4>
      { canEdit ?
<>
<button type='submit'>Cancel</button>
<button type='submit'>Submit</button>
</> : null
      }
      <Calendar
        selectable={canEdit}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={(event) => alert(event.title)}
        onSelectSlot={editAvailablity}
      />
    </>
  );
};

export default CalendarComponent;
