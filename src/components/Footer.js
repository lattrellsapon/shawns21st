import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='mtb-10'>
          <p>
            Video by <strong>Tanu Gago</strong>
          </p>
        </div>
        <div className='mtb-10'>
          <p>
            Website By{' '}
            <a
              className='treezy'
              href='https://www.treezywebdesign.com/'
              target='_blank'
            >
              Treezy Web Design
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
