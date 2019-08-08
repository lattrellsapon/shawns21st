import React, { Component } from 'react';
import Countdown from './Countdown';
import Going from './Going';

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
        <div className='invitation-header mtb-10'>
          <h3 className='shawn-heading'>SHAWN ARJAN</h3>
          <span className='cursive'>beinte uno</span>
          <h3>23 AUGUST 2019</h3>
        </div>
        <div className='countdown-timer mtb-30'>
          <Countdown />
        </div>
        <div className='invitation-details mtb-10'>
          <div className='time-address'>
            <p>7:00 PM @ PROTOCOL</p>
            <p>2 COLOMBO ST, CASHMERE</p>
            <p>CHRISTCHURCH</p>
          </div>
          <div className='birthday-tagline mtb-30'>
            <h1>
              BE <span className='banjee'>BANJEE</span> BE{' '}
              <span className='classy'>Classy</span>
            </h1>
          </div>
        </div>
        <div className='going-div mtb-30'>
          <Going />
        </div>
        <div className='r18-label'>
          <h1>R18</h1>
        </div>
        <div className='sound-buttons mtb-10'>
          <div style={this.hideTurnOnButton()}>
            <button onClick={this.props.turnSoundOn}>
              <i className='fas fa-volume-up' id='soundItem' />
            </button>
          </div>
          <div style={this.hideTurnOffButton()}>
            <button onClick={this.props.turnSoundOff}>
              <i className='fas fa-volume-mute' id='soundItem' />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Invitation;
