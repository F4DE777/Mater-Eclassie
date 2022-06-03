import React from 'react'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Eyfs from './sub_pages/Learning/Eyfs'
import JuniorSchool from './sub_pages/Learning/JuniorSchool'
import Nursery from './sub_pages/Learning/Nursery'
import Primary from './sub_pages/Learning/Primary'
import SecSchool from './sub_pages/Learning/SecSchool'
import NotFound from './NotFound';


function Learn() {
  return (
    <>
          <Router>
              <Switch>
                        <Route path={'/learn'} exact >
                          <Redirect to={'/learn/early-years'}/>
                        </Route>
                        <Route path="/learn/early-years" component={Eyfs}   exact/>
                        <Route path="/learn/nursery" component={Nursery}   exact/>
                        <Route path="/learn/primary_school" component={Primary}   exact/>
                        <Route path="/learn/junior_school" component={JuniorSchool}   exact/>
                        <Route path="/learn/secondary_school" component={SecSchool}   exact/>
                      <Route path="*" component={NotFound}  />
                </Switch>
          </Router>
    
    </>
  )
}

export default Learn