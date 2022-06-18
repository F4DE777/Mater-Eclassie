import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Desk from    './sub_pages/About/PrincipalsDesk'
import Resources from    './sub_pages/About/HumanResources'

import NotFound from './NotFound';
import Contact from './sub_pages/About/Contact';
import History from './sub_pages/About/History';
import Faculty from './sub_pages/About/Faculty';

function About() {
  return (
    <>
     <Router>
          <Switch>
                    <Route path={'/about'} exact >
                      <Redirect to={'/about/administrators-message'}/>
                    </Route>
                    <Route path="/about/administrators-message" component={Desk}   />
                    <Route path="/about/history" component={History}   />
                    <Route path="/about/proprietors-message" component={Resources}   />
                    <Route path="/about/contact-us" component={Contact}   />
                    <Route path="/about/faculty" component={Faculty}   />

                  <Route path="*" component={NotFound}  />
            </Switch>
      </Router>
    
    
    </>
  )
}

export default About