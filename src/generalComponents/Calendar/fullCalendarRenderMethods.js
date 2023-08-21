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

export const prevNextBtnDisplay = (calendarRef, setCalendarHeight, MonthDropdown) => {

  const calendar = calendarRef.current.getApi()
    
  if (calendar.view.type === 'dayGridMonth') {
    changeHeaderToolbar('dayGridMonth', calendar, MonthDropdown)
  } else if (calendar.view.type === 'dayGridWeek') {
    changeHeaderToolbar('dayGridWeek')
  } else {
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
