import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p>
          Created By{' '}
          <a
            className='treezy'
            href='https://www.treezywebdesign.com/'
            target='_blank'
          >
            Treezy Web Desgin
          </a>
        </p>
      </div>
    );
  }
}

export default Footer;
