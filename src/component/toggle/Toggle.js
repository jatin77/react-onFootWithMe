import React from 'react';
import './toggle.css';
const Toggle = props => {
  return (
    <div id='toggle' onClick={props.toggleBtn}>
      <div className='one' />
      <div className='two' />
      <div className='three' />
    </div>
  );
};

export default Toggle;
