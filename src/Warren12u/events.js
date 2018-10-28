let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
+ `?singleEvents=true&key=AIzaSyCVeRNYav9iZro5ZZwrgKyulUsQfdbgNZg`


export default {
  Instateam: makeGoogleCalendarURL(`cpn7oqq6d7ismvb3mmo9udcnufqp1ov0@import.calendar.google.com`)
}