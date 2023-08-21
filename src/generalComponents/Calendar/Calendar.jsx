import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSelector } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import momentPlugin from '@fullcalendar/moment';
import interactionPlugin from '@fullcalendar/interaction';
import MonthDropdown from './month';
import EventFullCalendar from './EventFullCalendar';
import { 
  changeWidth, changeHeight, 
  getCaledandarHeight, prevNextBtnDisplay, changeHeaderToolbar } from './fullCalendarRenderMethods';
import './fullCalendar.css';

function Calendar() {

    const stateEvents = useSelector(state => state.toDos.events)
  
  const calendarRef = useRef(null)
  
  const [ events, setEvents ] = useState([]);
  const [ selectedDate, setSelectedDate ] = useState(null);
  const [ calendarView, setCalendarView ] = useState('dayGridMonth');
  const [ calendarHeight, setCalendarHeight ] = useState('');
  
  const fetchEvents = () => {
    if (stateEvents) setEvents(stateEvents)
  }

  useEffect(() => {
    // USE EFFECT TO FETCH DATA/EVENTS ONLY
  

    fetchEvents()
    setCalendarView('dayGridMonth') 

  }, [stateEvents])

  useEffect(() => {
    // USEEFFECT TO CHANGE THE DISPLAY OF THE CALENDAR ON WINDOW RESIZE - CHANGE WIDTH

    changeWidth()

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
    }

  }, [])

  useEffect(() => {
    // USEEFFECT TO CHANGE THE DISPLAY OF THE CALENDAR ON 
    // WINDOW RESIZE - CHANGE HEIGHT AND KEEP THE FOOTER ALWAYS AT THE BOTTOM

    changeHeight(setCalendarHeight) //places the footer in the bottom of the screen
    
    const handleResize = () => changeHeight(setCalendarHeight);
    
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      changeHeight(setCalendarHeight);
    };

  }, [calendarHeight])

  useEffect(() => {
    //USEEFFECT TO ADD A CUSTOM FUCTION TO THE PREV-NEXT BUTTONS OF THE CALENDAR

    if (calendarRef.current) {
      
      const button = document.querySelector('div.fc-button-group:nth-child(2) button:nth-child(1).fc-button.fc-button-primary');
      if (button) 
        button.innerHTML = 'Today';

      const calendarApi = calendarRef.current.getApi();
      
      const toolbarEl = calendarApi.el;
      
      const prevButton = toolbarEl.querySelector('.fc-prev-button');
      const nextButton = toolbarEl.querySelector('.fc-next-button');

      if (prevButton && nextButton) {
        prevButton.addEventListener('click', handlePrevNextClick);
        nextButton.addEventListener('click', handlePrevNextClick);
      }
    } 

    return () => {

        // const calendarApi = calendarRef.current.getApi();
      
        // const toolbarEl = calendarApi.el;

        // const prevButton = toolbarEl.querySelector('.fc-prev-button');
        // const nextButton = toolbarEl.querySelector('.fc-next-button');

        // prevButton.removeEventListener('click', handlePrevNextClick);
        // nextButton.removeEventListener('click', handlePrevNextClick);
    }
      
  }, []);

  const handleSelectDate = (date) => {
    //function to set the date in FullCalendar from DATEPICKER
      setSelectedDate(date);
      calendarRef.current.getApi().gotoDate(date)
  }


  const handleEventClick = (event) => {
        // CHANGE THE VIEW WHEN EVENT IS CLICKED
    const date = event.event.start
    const calendar = calendarRef.current.getApi()

    calendar.changeView('dayGridDay', date)
    setCalendarView('dayGridDay')
    setSelectedDate(new Date(date))
    handleDayGridDayClick()
  }

  const handleDateClick = (info) => {
    // CHANGE THE VIEW WHEN SELECT DATE FROM FULLCALENDAR
    calendarRef.current.getApi().changeView('dayGridDay', info.dateStr)
    setCalendarView('dayGridDay')
    handleDayGridDayClick()
    setSelectedDate(new Date(info.dateStr))
  }

  const handleDayGridDayClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView('dayGridDay')
    setCalendarView('dayGridDay')
    getCaledandarHeight(setCalendarHeight)
    changeHeaderToolbar('dayGridDay')
  }

  const handleDayGridWeekClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView('dayGridWeek')
    setCalendarView('dayGridWeek')
    getCaledandarHeight(setCalendarHeight)
    changeHeaderToolbar('dayGridWeek')
  }

  const handleDayGridMonthClick = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.changeView('dayGridMonth')
    setCalendarView('dayGridMonth')
    getCaledandarHeight(setCalendarHeight)
    changeHeaderToolbar('dayGridMonth', calendarApi, MonthDropdown)
  }

  const handlePrevNextClick = () => {
    const calendarApi = calendarRef.current.getApi();
    const date = calendarApi.getDate();
    handleSelectDate(date)
    prevNextBtnDisplay(calendarRef, setCalendarHeight, MonthDropdown)
  };

	return (
    <div className='userCalendar-container' id='dashboard-container'>
    <div className='row flex-wrap-reverse dashboard-container flex-md-nowrap' >
      <div className={`col-12 col-md-8 dashboard-fullCalendar userCalendar`}>
        <FullCalendar
          ref={calendarRef}
          selectable={true}
          dateClick={(info) => handleDateClick(info, calendarRef, setCalendarView, setSelectedDate, setCalendarHeight)}
          eventClick={(event) => handleEventClick(event, calendarRef, setCalendarView, setSelectedDate )}
          events={events}
          eventContent={(info) => <EventFullCalendar info={info} view={calendarView} />}
          plugins={[dayGridPlugin, momentPlugin, interactionPlugin]}
          views={{
            dayGridDay: {
              titleFormat: "DD MMMM YYYY"
            },
            dayGridWeek: {
              titleFormat: {
                month: 'long', 
                year: 'numeric' 
              },
              dayHeaderFormat: { 
                weekday: 'short', 
                day: '2-digit' 
              }
            },
            dayGridMonth: {
              titleFormat: {
                month: 'long', 
                year: 'numeric'
              }
            }
          }}
          initialView="dayGridMonth"
          firstDay={1}
          headerToolbar={{
            start: "dayGridDay dayGridWeek dayGridMonth",
            center: "title",
            end: "prev, , next"
          }}
          contentHeight='auto'
          dayMinWidth='fit-content'
          initialDate={selectedDate}
          customButtons={{
            dayGridDay: {
              text: 'Day',
              click: handleDayGridDayClick,
            },
            dayGridWeek: {
              text: 'Week',
              click: handleDayGridWeekClick,
            },
            dayGridMonth: {
              text: 'Month',
              click: handleDayGridMonthClick,
            }
          }}    
          />
      </div>
      <div className={`col-12 col-md-4 secondary-calendar`}>
        <DatePicker
            selected={selectedDate}
            onChange={handleSelectDate}
            dateFormat="MM/dd/yyyy"
            inline
          />      
      </div>
    </div>
    </div>
	);
};


export default Calendar