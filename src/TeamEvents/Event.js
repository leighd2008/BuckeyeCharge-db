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

export default ({ event }) => {
  
  let startDate = new Date(event.start.dateTime)
  
  let day = DAYS_OF_WEEK[startDate.getDay()]
  let month = MONTHS[startDate.getMonth()]
  let date = startDate.getDate()
  let hours = startDate.getHours() % 12
  let minutes = startDate.getMinutes()
  let AMPM = startDate.getHours() < 12 ? `AM` : `PM`

  if (minutes <= 10) {
    minutes = `0${minutes}`
  }

  let displayStartDate = `${day}, ${month} ${date} at ${hours}:${minutes}${AMPM}`
  return (
    <div>
      <h5>{event.summary}</h5>
      <h5>{displayStartDate}</h5>
      <h5><Link href={`https://maps.google.com/?q=${event.location}`} target="_blank"> {event.location} </Link></h5>
      <p>{event.description}</p>
      {/* {
        url === undefined
        ? <p></p>
        : <p>
            <Link href={url} target="_blank">
              Event Details
            </Link>
          </p>
      } */}
      
    </div>
  )
}
