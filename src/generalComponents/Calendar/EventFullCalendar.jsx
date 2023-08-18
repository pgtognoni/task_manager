import React from 'react'

function EventFullCalendar({info, view}) {

    const {event} = info;
    const date = new Date(event.start);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });   

    return (
        <div className='container-fluid'>
        <div 
          className={`row flex-nowrap event-container ${view === 'dayGridWeek' 
              ? 'week-container' 
              : view === 'dayGridMonth' ? 'month-container' : ''}`} 
          >
          <div className='event-title col-4'>
            <p>{event.title}</p>
          </div>
          <div className='event-time col-4'>
            <p>{time}</p>
          </div>
        </div>
        </div>
      )
}

export default EventFullCalendar