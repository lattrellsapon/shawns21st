import React, { Component } from 'react';

export class Countdown extends Component {
  state = {
    countdownDate: new Date('August 23, 2019').getTime(),
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
    isTimePassed: false,
    happeningNowMessage: 'THANK YOU FOR COMING'
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      let now = new Date().getTime();

      let distance = this.state.countdownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isTimePassed: true
        });
      } else {
        this.setState({
          days,
          hours,
          minutes,
          seconds
        });
      }
    }, 1000);
  }

  render() {
    if (this.state.isTimePassed) {
      return (
        <div className='happening-now'>
          <h1>{this.state.happeningNowMessage}</h1>
        </div>
      );
    } else {
      return (
        <div className='timer six-grid'>
          {/* <h1>
            {this.state.days} days {this.state.hours} hours {this.state.minutes}{' '}
            minutes {this.state.seconds} seconds
          </h1> */}
          <div className='number-container text-center'>
            <p>{this.state.days}</p>
          </div>
          <div className='number-container text-center'>
            <p>{this.state.hours}</p>
          </div>
          <div className='number-container text-center'>
            <p>{this.state.minutes}</p>
          </div>
          <div>
            <p className='time-label text-center'>days</p>
          </div>
          <div>
            <p className='time-label text-center'>hours</p>
          </div>
          <div>
            <p className='time-label text-center'>minutes</p>
          </div>
        </div>
      );
    }
  }
}

export default Countdown;
