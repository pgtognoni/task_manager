import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle,faCircleXmark, faBars } from '@fortawesome/free-solid-svg-icons'

function EventFullCalendar({ info, view }) {

    const { event } = info;
    const date = new Date(event.start);
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });   

    return (
        <div className={`container-fluid event-container ${event.extendedProps.description ? 'completed' : 'pending'}`}>
        <div 
          className={`${view === 'dayGridWeek' 
              ? 'week-container' 
              : view === 'dayGridMonth' ? 'month-container' : 'dayGrid'}`} 
          >
          <div className='event-title'>
            {event.extendedProps.description 
            ? <FontAwesomeIcon icon={faCheckCircle} className= 'text-green'/>
            : <FontAwesomeIcon icon={faCircleXmark} className= 'text-danger'/>
            }
            <p>{event.title}</p>
          </div>
          <div className='event-time'>
            <p>{time}</p>
          </div>
        </div>
        </div>
      )
}

export default EventFullCalendar