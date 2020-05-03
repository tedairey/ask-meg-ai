import React, {useState, useMemo} from 'react';
import Header from './header/Header.js';
import HomePage from './homePage/HomePage.js';
import FAQ from './FAQ/FAQ.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HowItWorks from './howItWorks/howItWorks.js';
import About from './about/About.js';
import Footer from './footer/Footer.js';
import BlogPosts from './blogPosts/BlogPosts.js';
import MediaQuery from 'react-responsive';
import { UserContext } from './context/UserContext.js';

function App() {
  
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({user, setUser}), [user, setUser]);
  
  return (
    <div className="page">
      <Router>
      <UserContext.Provider value={value}>
        <Header/>
      </UserContext.Provider>
        <div className='page-content'>
          <Switch>
            <Route path="/" exact component={HomePage}/>
            <Route path="/FAQ" component={FAQ}/>
            <Route path="/how-it-works" component={HowItWorks}/>
            <Route path="/about" component={About}/>
            <UserContext.Provider value={user}>
              <Route path="/blog-posts" component={BlogPosts}/>
            </UserContext.Provider>
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
