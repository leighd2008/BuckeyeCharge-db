let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
+ `?singleEvents=true&key=AIzaSyCVeRNYav9iZro5ZZwrgKyulUsQfdbgNZg`


export default {
  warren12U: makeGoogleCalendarURL('jvadpcjgh5a9u1dgc7j4meu7oo@group.calendar.google.com'),  
  Instateam: makeGoogleCalendarURL(`iice2b8m42ns1bn6lk8aj40b1srfdhgi@import.calendar.google.com`)
}