import React from 'react';
import './overlay.css';
function Overlay(props) {
  return <div onClick={props.overlayClicked} className='overlay' />;
}

export default Overlay;
