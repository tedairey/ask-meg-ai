import React from 'react';
import Header from './header/Header.js';
import PageContent from './pageContent/PageContent.js';
import FAQ from './FAQ/FAQ.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HowItWorks from './howItWorks/howItWorks.js';
import About from './about/About.js';

function App() {
  return (
    <div className="page">
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={PageContent}/>
          <Route path="/FAQ" component={FAQ}/>
          <Route path="/how-it-works" component={HowItWorks}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
