import React from "react"
import styled from 'styled-components'
import theme from '../theme'

const DAYS_OF_WEEK = [
  `Sunday`,
  `Monday`,
  `Tuesday`,
  `Wednesday`,
  `Thursday`,
  `Friday`,
  `Saturday`,
]

const MONTHS = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
]

let Link = styled.a`
  text-decoration: none;
  color: ${theme.link};
  
`

const Event = ({ event }) => {
  let displayStartDate = '';
  if (event.start.dateTime) {
    let startDate = new Date(event.start.dateTime)
    let day = DAYS_OF_WEEK[startDate.getDay()]
    let month = MONTHS[startDate.getMonth()]
    let date = startDate.getDate()
    let hours = 1
    if(startDate.getHours() === 12) {
      hours = 1
    } else {
      hours = startDate.getHours() % 12
    }

    let minutes = startDate.getMinutes()
    let AMPM = startDate.getHours() < 12 ? `AM` : `PM`

    if (minutes <= 10) {
      minutes = `0${minutes}`
    }

    displayStartDate = `${day}, ${month} ${date} at ${hours}:${minutes}${AMPM}`

  } else {
    let startDate = new Date(event.start.date)
    let day = DAYS_OF_WEEK[startDate.getDay()]
    let month = MONTHS[startDate.getMonth()]
    let date = startDate.getDate()

    displayStartDate = `${day}, ${month} ${date} `
  }
  return (
    <div>
      <h6>{event.summary}</h6>
      <h6>{displayStartDate}</h6>
      <h6><Link href={`https://maps.google.com/?q=${event.location}`} target="_blank"> {event.location} </Link></h6>
      <p>{event.description}</p>
    </div>
  )
}

export default Event;