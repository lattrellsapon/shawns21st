import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BanjeeClassy extends Component {
  render() {
    return (
      <div className='banjee-classy'>
        <div className='left'>
          <Link to='/'>
            <i className='fas fa-chevron-left back-button' />
          </Link>
        </div>
        <div className='left'>
          <h1 className='heading-banjee'>Banjee</h1>
          <p>A term originating in the house system and</p>
          <p>ball culture of New York City which describes someone</p>
          <p>
            seen to be from the hood or embodying an urban, ghetto, tough,
            swagger.
          </p>
        </div>
        <div className='right'>
          <h1 className='heading-classy'>Classy</h1>
          <p>The highest level of 'supremeness' of which can be defined</p>
          <p>
            in the case whereby the 'classy' one can recieve a compliment of the
            like,
          </p>
          <p>
            and yet by pretending to ignore that compliment then appears even
            classier than before.
          </p>
        </div>
      </div>
    );
  }
}

export default BanjeeClassy;
