import React, { Component } from 'react';

export class Going extends Component {
  testMe = () => {
    console.log('Hello World');
  };

  render() {
    return (
      <div>
        <a href='mailto:zapantashawn@gmail' className='going-button'>
          GOING
        </a>
      </div>
    );
  }
}

export default Going;
