import React from 'react'
import { lifecycle, withState, compose } from 'recompose'
import styled from 'styled-components'
import Event from './Event'

let Card = styled.div`
  padding: 20px;
  max-width: 750px;
  margin: 0 auto;
`
export default
compose(
  withState(`events`, `addEvent`, []),
    lifecycle({
    componentDidMount() {
      Object.values(this.props.eventUrls).map(async val => {
        let r = await fetch(val, { mode: `cors` })
        let { items } = await r.json()
        this.props.addEvent(s => [
          ...s,
          ...(items || []).filter(event =>
            
            event.organizer && +Date.now() < +new Date(event.end.dateTime) 
          ),
        ].sort((a, b) => +new Date(a.start.dateTime) - +new Date(b.start.dateTime)))
        
      })
    },
  })
)(({ events }) => (
  <div>
    <Card>
      {events.map((e, i) =>
        <div key={e.id}>
          <Event event={e} />
          {i < events.length - 1 && <hr />}
        </div>
      )}
      <a
        className="primary-cta"
        href="https://calendar.google.com/calendar/embed?src=iice2b8m42ns1bn6lk8aj40b1srfdhgi@import.calendar.google.com&ctz=America%2FNew_York"
        target="_blank" rel="noopener noreferrer"
      >
       <h1> Go to Calendar </h1>
      </a>
    </Card>
  </div>
))