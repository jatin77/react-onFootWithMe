import React from 'react';
import './menuBox.css';
function MenuBox(props) {
  let display;
  if (props.show) {
    display = 'menuBox open';
  } else {
    display = 'menuBox';
  }

  return (
    <div className={display}>
      <div className='menuBox-content'>
        <h1>Menu</h1>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Generic</a>
          </li>
          <li>
            <a href='/'>Elements</a>
          </li>
          <li>
            <a href='/'>Log in</a>
          </li>
          <li>
            <a href='/'>Sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MenuBox;
