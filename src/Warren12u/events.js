let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
+ `?singleEvents=true&key=AIzaSyCVeRNYav9iZro5ZZwrgKyulUsQfdbgNZg`


export default {
  Instateam: makeGoogleCalendarURL(`54b2hk3u19l9j12ovjo020h7mj9hed83@import.calendar.google.com`)
}