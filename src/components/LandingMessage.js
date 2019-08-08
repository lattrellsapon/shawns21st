import React, { Component } from 'react';

export class LandingMessage extends Component {
  getStyle = () => {
    if (!this.props.isMessageOpened) {
      return {
        display: 'block'
      };
    } else {
      return {
        display: 'none'
      };
    }
  };

  render() {
    return (
      <div
        className='container'
        id='landing-content'
        style={this.getStyle()}
        onClick={this.props.readMessage}
      >
        <div className='two-grid'>
          <div className='user-avatar'>
            <i className='far fa-user' />
          </div>
          <div className='flex-column'>
            <div className='flex-row'>
              <div className='left-align'>
                <h3>Shawn</h3>
              </div>
              <div className='left-align'>
                <p>
                  7:37 pm <i className='fas fa-circle' id='message-status' />
                </p>
              </div>
            </div>
            <div className='left-align'>
              <p>I am inviting you . . .</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingMessage;
