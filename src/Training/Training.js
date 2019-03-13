import React from 'react';
// import Tournaments from './Tournaments';
import { Card, CardTitle } from 'reactstrap';
import './Training.css';

const Training = () => {
  
  return (
    <div>

      <Card className='youtube' >
        <CardTitle tag = "h1"> How to Throw a Softball with Mike Candea</CardTitle>
        <div class="iframe-container">
            <iframe src='https://www.youtube.com/embed?v=fB6-_rRxMVE&t=0s&list=PL8qoNtNkOuasNWBdyaa6W9NE1sss6Bx3D&index=5'
                width="1425"
                height="559"
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
            />
        </div>
      </Card>
      <Card className='youtube' >
        <CardTitle tag = "h1"> Softball How to Field Fly Balls with Mike Candea</CardTitle>
        <div class="iframe-container">
            <iframe src='https://www.youtube.com/embed?v=QZ4lrNN5Pv8&list=PL8qoNtNkOuasNWBdyaa6W9NE1sss6Bx3D&index=1'
                width="1425"
                height="559"
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
            />
        </div>
      </Card>
      <Card className='youtube' >
        <CardTitle tag = "h1"> How to Field Groundballs in Softball with Mike Candea</CardTitle>
        <div class="iframe-container">
            <iframe src='https://www.youtube.com/embed?v=TM6hnPz8-uo&list=PL8qoNtNkOuasNWBdyaa6W9NE1sss6Bx3D&index=2'
                width="1425"
                height="559"
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
            />
        </div>
      </Card>
      <Card className='youtube' >
        <CardTitle tag = "h1"> How to Improve as a Softball Catcher with Mike Candea</CardTitle>
        <div class="iframe-container">
            <iframe src='https://www.youtube.com/embed?v=TM6hnPz8-uo&list=PL8qoNtNkOuasNWBdyaa6W9NE1sss6Bx3D&index=3'
                width="1425"
                height="559"
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
            />
        </div>
      </Card>
      <Card className='youtube' >
        <CardTitle tag = "h1"> How to Pitch a Softball with Mike Candea</CardTitle>
        <div class="iframe-container">
            <iframe src='https://www.youtube.com/embed?v=7kxI_hAVk-g&list=PL8qoNtNkOuasNWBdyaa6W9NE1sss6Bx3D&index=4'
                width="1425"
                height="559"
                frameBorder='0'
                allow='autoplay; encrypted-media'
                allowFullScreen
                title='video'
            />
        </div>
      </Card>
      <div><br/><br/></div>
    </div>
    
  )
}

export default Training;