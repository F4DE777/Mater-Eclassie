import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import AccProbation from './sub_pages/School/AccProbation';
import AccStructure from './sub_pages/School/AccStructure';
import Curriculum from './sub_pages/School/Curriculum';
import NotFound from './NotFound';

function School() {
  return (
    <>
          <Router>
              <Switch>
                        <Route path={'/school'} exact >
                          <Redirect to={'/school/curriculum'}/>
                        </Route>
                        <Route path="/school/curriculum" component={Curriculum}   exact/>
                        <Route path="/school/academic-structure" component={AccStructure}   exact/>
                        <Route path="/school/academic-probation" component={AccProbation}   exact/>
                      <Route path="*" component={NotFound}  />
                </Switch>
          </Router>
    
    </>
  )
}

export default School