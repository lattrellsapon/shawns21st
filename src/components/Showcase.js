import React, { Component } from 'react';
import ShowcaseVideo from '../videos/showcase.mp4';
import Invitation from './Invitation';

export class Showcase extends Component {
  render() {
    return (
      <div>
        <video autoPlay loop id='showcase-video'>
          <source src={ShowcaseVideo} type='video/mp4' />
        </video>
        <Invitation />
      </div>
    );
  }
}

export default Showcase;
