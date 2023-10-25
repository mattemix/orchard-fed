
import React, { Component } from 'react';
import Slider1 from './Slider/Slider1';
import Header from './Header/Header';
import { getContainer } from './ioc/IOCSetup';
import BlogThumbnail from './BlogThumbnail/BlogThumbnail';
import {Helmet} from "react-helmet";
import Footer from './Footer/Footer';
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
          <Helmet>
            <meta charSet="utf-8" />
            <title lang="en">Orchard FED Exam</title>
            <meta name="description" content="Orchard Front-end Developers" lang="en" />
            <meta name="keywords" content="Front-end Developer" lang="en"/>
        </Helmet>
        <Header />
        <div className='container'>
          <div className='row'>
            <Slider1 slides={content1} />
            <BlogThumbnail slides={content2} />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

