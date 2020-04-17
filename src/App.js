import React from 'react';
import Header from './header/Header.js';
import PageContent from './pageContent/PageContent.js';
import FAQ from './FAQ/FAQ.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HowItWorks from './howItWorks/howItWorks.js';

function App() {
  return (
    <div className="page">
      <Router>
      <Header/>
        <Switch>
          <Route path="/" exact component={PageContent}/>
          <Route path="/FAQ" component={FAQ}/>
          <Route path="/howitworks" component={HowItWorks}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
