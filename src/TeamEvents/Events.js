import React from 'react'
import { lifecycle, withState, compose } from 'recompose'
import styled from 'styled-components'
import theme from '../theme'
import eventUrls from '../data/events'
import Event from './Event'

let SectionTitle = styled.div`
  font-family: ${theme.fancyFont};
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  padding-top: 35px;
`

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
      Object.values(eventUrls).map(async val => {
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
    <SectionTitle>
      UPCOMING EVENTS
    </SectionTitle>
    <Card>
      {events.map((e, i) =>
        <div key={e.id}>
          <Event event={e} />
          {i < events.length - 1 && <hr />}
        </div>
      )}
        <a
          className="primary-cta"
          href="https://calendar.google.com/calendar/embed?src=jvadpcjgh5a9u1dgc7j4meu7oo%40group.calendar.google.com&ctz=America%2FNew_York"
          target="_blank" rel="noopener noreferrer"
        >
          Go to Calendar
        </a>
     </Card>
  </div>
))