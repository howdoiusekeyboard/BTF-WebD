import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Homebuttons.css';


function Homebuttons() {
  return (
    <div className='home-container'>
      <h1>Welcome to BITS Tech Fest 2024</h1>
      <div className='home-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('school')}
        >
          TECHNOFEST FOR SCHOOLS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('uni')}
        >
          ENGINUITY FOR UNIVERSITIES 
        </Button>
      </div>
    </div>
  );
}

export default Homebuttons;