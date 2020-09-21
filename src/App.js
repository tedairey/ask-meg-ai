import React, {useState, useMemo, useEffect} from 'react';
import Header from './header/Header.js';
import HomePage from './homePage/HomePage.js';
import FAQ from './FAQ/FAQ.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './about/About.js';
import Footer from './footer/Footer.js';
import BlogPosts from './blogPosts/BlogPosts.js';
import Profile from './profile/Profile';
import { UserContext, FooterContext } from './context/UserContext.js';
import Conduct from './conduct/Conduct.js';
import UseOfApplication from './useOfApplication/UseOfApplication.js';
import LandingPageA from './landingPages/LandingPageA.js';
import LandingPageB from './landingPages/LandingPageB.js';
import Tutorials from './tutorials/Tutorials.js';
import HealthyOptions from './healthyOptions/HealthyOptions.js';

function App() {

  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user'))),
        [showFooter, setShowFooter] = useState(true);

  const value = useMemo(() => ({user, setUser}), [user, setUser]);
  const footerValue = useMemo(() => ({showFooter, setShowFooter}), [showFooter, setShowFooter]);
  
  return (
    <div className="page">
      <Router>
        <UserContext.Provider value={value}>
          <Header/>
        </UserContext.Provider>
        <FooterContext.Provider value={footerValue}>
          <Switch>
            <Route path='/healthy-options' component={HealthyOptions}/>
          </Switch>
          <div className='page-content'>
            <Switch>
              <Route path='/' exact component={HomePage}/>
              <Route path='/meet-meg' exact component={HomePage}/>
              <Route path='/meet-meg/:handle' component={HomePage}/>
              <Route path='/FAQ' component={FAQ}/>
              <Route path='/about' component={About}/>
              <Route path='/conduct' component={Conduct}/>
              <Route path='/terms-of-use' component={UseOfApplication}/>
              <Route path='/privacy-policy' component={UseOfApplication}/>
              <Route path='/landing-page-a' component={LandingPageA}/>
              <Route path='/landing-page-b' component={LandingPageB}/>
              <Route path='/tutorials' component={Tutorials}/>
              <UserContext.Provider value={user}>
                <Route path='/blog-posts' component={BlogPosts}/>
                <Route path='/profile/:handle' component={Profile}/>
              </UserContext.Provider>
            </Switch>
            {showFooter &&
              <Footer/>
            }
          </div>
        </FooterContext.Provider>
      </Router>
    </div>
  );
}

export default App;
