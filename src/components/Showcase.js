import React, { Component } from 'react';
import ShowcaseVideo from '../videos/showcase.mp4';
import Invitation from './Invitation';

export class Showcase extends Component {
  state = {
    isSoundOff: true
  };

  turnSoundOn = () => {
    this.setState({
      isSoundOff: false
    });

    const video = this.refs.mainVideo;

    video.muted = false;
  };

  turnSoundOff = () => {
    this.setState({
      isSoundOff: true
    });
    const video = this.refs.mainVideo;

    video.muted = true;
  };


  render() {
    return (
      <div>
        <video autoPlay muted loop id='showcase-video' ref='mainVideo'>
          <source src={ShowcaseVideo} type='video/mp4' />
        </video>

        <Invitation
          turnSoundOn={this.turnSoundOn}
          turnSoundOff={this.turnSoundOff}
          isSoundOff={this.state.isSoundOff}
        />
      </div>
    );
  }
}

export default Showcase;
