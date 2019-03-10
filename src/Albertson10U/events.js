let makeGoogleCalendarURL = calID =>
  `https://www.googleapis.com/calendar/v3/calendars/${calID}/events`
+ `?singleEvents=true&key=AIzaSyDIKhZBFveZRNmVPPJ9NeZhXnYm8MMGfUE`



export default {
  // Instateam2: makeGoogleCalendarURL(`54b2hk3u19l9j12ovjo020h7mj9hed83@import.calendar.google.com`),
  Instateam: makeGoogleCalendarURL(`vcs6e7pceduilagmr52c0h8ev4@group.calendar.google.com`)
  
}