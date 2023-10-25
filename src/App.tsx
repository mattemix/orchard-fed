
import React, { Component } from 'react';
import Slider1 from './Slider/Slider1';
import Header from './Header/Header';
import { getContainer } from './ioc/IOCSetup';
import BlogThumbnail from './BlogThumbnail/BlogThumbnail';
import './App.scss'
import './assets/css/slick.css'
import './assets/css/slick-theme.css'
import './assets/css/slick-animation.css'
import './assets/css/animate.min.css'

export class App extends Component {
  render() {
    let content1 = getContainer().getSettingsService().getComponent1();
    let content2 = getContainer().getSettingsService().getComponent2();
    return (
      <React.Fragment>
        <Header />
        <div className='container'>
          <div className='row'>
            <Slider1 slides={content1} />
            <BlogThumbnail slides={content2} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

