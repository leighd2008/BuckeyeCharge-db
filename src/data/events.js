let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
+ `?singleEvents=true&key=AIzaSyCVeRNYav9iZro5ZZwrgKyulUsQfdbgNZg`


export default {
  warren12U: makeGoogleCalendarURL('jvadpcjgh5a9u1dgc7j4meu7oo@group.calendar.google.com'),  
  // torontojs: makeGoogleCalendarURL(`k6l8oiu416ftcjpjetn0r7a79me8pq4r@import.calendar.google.com`)
}