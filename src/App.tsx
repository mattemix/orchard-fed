
import React from 'react';
import Slider1 from './Slider/Slider1';
import Header from './Header/Header';
import './App.scss'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/slick-animation.css'
import './assets/css/animate.min.css'

function App() {

  return (
    <React.Fragment>
       <Header />
      <div className='container'>
        <div className='row'>
        <Slider1 />
        </div>
      </div>
      </React.Fragment>
  );
}



export default App;

