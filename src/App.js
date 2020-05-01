import React from 'react';
import Header from './header/Header.js';
import HomePage from './homePage/homePage.js';
import FAQ from './FAQ/FAQ.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HowItWorks from './howItWorks/howItWorks.js';
import About from './about/About.js';
import Footer from './footer/Footer.js';
import BlogPosts from './blogPosts/BlogPosts.js';
import MediaQuery from 'react-responsive';

function App() {
  return (
    <div className="page">
      <Router>
      <Header/>
        <div className='page-content'>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/FAQ" component={FAQ}/>
            <Route path="/how-it-works" component={HowItWorks}/>
            <Route path="/about" component={About}/>
            <Route path="/blog-posts" component={BlogPosts}/>
          </Switch>
          <MediaQuery minWidth={768}>
            <Footer/>
          </MediaQuery>
        </div>
      </Router>
    </div>
  );
}

export default App;
