export const changeWidth = () => {
    // function to set the width of the toolbar when dayGridDay view is selected

    const container = document.querySelector('.dashboard-container');
    const toolbar = document.querySelector('.dashboard-fullCalendar .fc-header-toolbar.fc-toolbar')
    
    const width = container.offsetWidth - 35;
    toolbar.style.width = `${width}px`

}

export const getCaledandarHeight = (setCalendarHeight) => {
    //to set footer in the bottom of the page 
    let dashboard = document.getElementsByClassName('dashboard-container')[0];
    var elementHeight = dashboard.offsetHeight; // Height of the element
    var elementOffsetTop = dashboard.offsetTop; // Distance from the element's top to the top of its offset parent

    var distanceFromBottomToTop = elementOffsetTop + elementHeight;
    return distanceFromBottomToTop;
}

export const changeHeight = (setCalendarHeight) => {
    const body = document.getElementsByClassName('userCalendar-container')[0];
    const height = getCaledandarHeight()
    setCalendarHeight(height)
    body.style.height = height + 100 + 'px';
}

const eventSingleLineDisplay = () => {
  const eventTitle = document.querySelectorAll('.dashboard-fullCalendar .event-title')
  const eventDescription = document.querySelectorAll('.dashboard-fullCalendar .event-description')
  const eventTime = document.querySelectorAll('.dashboard-fullCalendar .event-time')

  eventDescription.forEach((event) => {
    event.classList.remove('col-12')
    event.classList.add('col-4')
  })

  eventTime.forEach((event) => {
    event.classList.remove('col-12')
    event.classList.add('col-4')
  })

  eventTitle.forEach((event) => {
    event.classList.remove('col-12')
    event.classList.add('col-4')
  })
}

const eventColumnDisplay = () => {
  const eventTitle = document.querySelectorAll('.dashboard-fullCalendar .event-title')
  const eventDescription = document.querySelectorAll('.dashboard-fullCalendar .event-description')
  const eventTime = document.querySelectorAll('.dashboard-fullCalendar .event-time')

  eventDescription.forEach((event) => {
    event.classList.remove('col-4')
    event.classList.add('col-12')
  })

  eventTime.forEach((event) => {
    event.classList.remove('col-4')
    event.classList.add('col-12')
  })

  eventTitle.forEach((event) => {
    event.classList.remove('col-4')
    event.classList.add('col-12')
  })
}

const hideDatePickerCalendar = () => {
  const calendar = document.querySelector('.dashboard-fullCalendar')
  calendar.classList.add('col-12')
  calendar.classList.remove('col-md-8')
  
  const secondary = document.querySelector('.secondary-calendar')
  secondary.style.display = 'none'
}

export const eventDayDisplay = () => {

    const width = window.innerWidth;
    const calendar = document.querySelector('.dashboard-fullCalendar')

    if (width > 768){
      calendar.classList.add('col-md-8')
      calendar.classList.remove('col-12')
    } 
    const secondary = document.querySelector('.secondary-calendar')
    secondary.style.display = 'block'
  
    eventSingleLineDisplay()
}

export  const eventWeekDisplay = () => {

    // hideDatePickerCalendar()
    
    eventColumnDisplay()
}

export const eventMonthDisplay = () => {
  hideDatePickerCalendar()
  eventSingleLineDisplay()
}

export const prevNextBtnDisplay = (calendarRef, setCalendarHeight, MonthDropdown) => {

  const calendar = calendarRef.current.getApi()
    
  if (calendar.view.type === 'dayGridMonth') {
    eventMonthDisplay()
    changeHeaderToolbar('dayGridMonth', calendar, MonthDropdown)
  } else if (calendar.view.type === 'dayGridWeek') {
    eventWeekDisplay()
    changeHeaderToolbar('dayGridWeek')
  } else {
    eventDayDisplay()
    changeHeaderToolbar('dayGridDay')
  }
  getCaledandarHeight(setCalendarHeight)

}

export const changeHeaderToolbar = (calendarView, calendarApi, MonthDropdown) => {
   
    let currentMonth = '';
    const button = document.querySelector('div.fc-button-group:nth-child(2) button:nth-child(1).fc-button.fc-button-primary');
    
    if (calendarView === 'dayGridMonth' && calendarApi) {
      const date = calendarApi.getDate();
      const month = date.getMonth() + 1;
      currentMonth = MonthDropdown.find((m) => + m.id.match(month)).month;
    }

    if (calendarView === 'dayGridDay') {
      button.innerHTML = 'Today';
    } else if (calendarView === 'dayGridWeek') {
      button.innerHTML = 'This week';
    } else {
      button.innerHTML = currentMonth;
    }
}

export const formatDate = (date) => {

    const originalDate = new Date(date);

    const options = {
        day: "2-digit",
        month: "long", 
        year: "2-digit"
      };
      
      return new Intl.DateTimeFormat("en-GB", options).format(originalDate);
  }
