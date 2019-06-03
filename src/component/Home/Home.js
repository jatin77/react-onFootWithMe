import React from 'react';
import './home.css';

function Home(props) {
  return (
    <div className='home'>
      <div className='home-inner'>
        <div className='home-content'>
          <div className='home-content-logo'>
            <i className='far fa-gem' />
          </div>
          <div className='home-content-text'>
            <h1>Travel with me</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
