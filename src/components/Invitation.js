import React, { Component } from 'react';

export class Invitation extends Component {
  hideTurnOnButton = () => {
    return {
      display: this.props.isSoundOff ? 'block' : 'none'
    };
  };
  hideTurnOffButton = () => {
    return {
      display: this.props.isSoundOff ? 'none' : 'block'
    };
  };

  render() {
    return (
      <div className='invitation-content'>
        <h1>Shawn's 21st Birthday</h1>
        <p>Please join us to celebrate</p>
        <p>August 24 2019 at 7:00 PM</p>
        <p>RSVP to Shawn by August 18 2019</p>
        <p>Email Shawn at test@gmail.com</p>
        <div className='sound-buttons'>
          <div style={this.hideTurnOnButton()}>
            <button onClick={this.props.turnSoundOn}>
              <i class='fas fa-volume-up' id='soundItem' />
            </button>
          </div>
          <div style={this.hideTurnOffButton()}>
            <button onClick={this.props.turnSoundOff}>
              <i class='fas fa-volume-mute' id='soundItem' />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Invitation;
