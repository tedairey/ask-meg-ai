import React, { useState, useMemo } from 'react';
import Header from './header/Header.js';
import HomePage from './homePage/HomePage.js';
import FAQ from './FAQ/FAQ.js';
import './App.css';
import { Router, Switch, Route } from 'react-router-dom';
import About from './about/About.js';
import Footer from './footer/Footer.js';
import BlogPosts from './blogPosts/BlogPosts.js';
import Profile from './profile/Profile';
import { UserContext, AppUserContext } from './context/UserContext.js';
import Conduct from './conduct/Conduct.js';
import UseOfApplication from './useOfApplication/UseOfApplication.js';
import LandingPageA from './landingPages/LandingPageA.js';
import LandingPageB from './landingPages/LandingPageB.js';
import Tutorials from './tutorials/Tutorials.js';
import HealthyOptions from './healthyOptions/HealthyOptions.js';
import MealPlan from './mealPlan/MealPlan.js';
import CoachReports from './coachReports/CoachReports.js';
import ShoppingList from './healthyOptions/shoppingList/ShoppingList.js';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { trackingId } from './config/Fire'

ReactGA.initialize(trackingId);

const history = createBrowserHistory();

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user'))),
        [isAppUser, setIsAppUser] = useState(false);

  const value = useMemo(() => ({user, setUser}), [user, setUser]);
  const appUserValue = useMemo(() => ({isAppUser, setIsAppUser}), [isAppUser, setIsAppUser]);

  return (
    <div className="page">
      <Router history={history}>
        {!isAppUser && 
          <UserContext.Provider value={value}>
            <Header/>
          </UserContext.Provider>
        }
        <AppUserContext.Provider value={appUserValue}>
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
              <UserContext.Provider value={value}>   
                <Route path='/healthy-options' exact component={HealthyOptions}/>
                <Route path='/healthy-options/:handle' component={HealthyOptions}/>
                <Route path='/meal-plan' exact component={MealPlan}/>
                <Route path='/meal-plan/:handle' component={MealPlan}/>
                <Route path='/coach-reports' exact component={CoachReports}/>
                <Route path='/coach-reports/:handle' component={CoachReports}/>
                <Route path='/shopping-list' exact component={ShoppingList}/>
                <Route path='/shopping-list/:handle' component={ShoppingList}/>
                <Route path='/blog-posts' component={BlogPosts}/>
                <Route path='/profile/:handle' component={Profile}/>
              </UserContext.Provider>
            </Switch>
            {!isAppUser &&
              <Footer/>
            }
          </div>
        </AppUserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
