import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom';
import Apply from    './sub_pages/Academics/Apply'
import AgeCons from    './sub_pages/Academics/AgeCons'
import Result from    './sub_pages/Academics/Result'
import NotFound from './NotFound';




function Academics() {
  return (
    <>
        <Router>
              <Switch>
                        <Route path={'/academics'} exact >
                          <Redirect to={'/academics/how_to_apply'}/>
                        </Route>
                        <Route path="/academics/how_to_apply" component={Apply}   exact/>
                        <Route path="/academics/school-fees" component={AgeCons}   exact/>
                        <Route path="/academics/result_&_scholarships" component={Result}   exact/>

                      <Route path="*" component={NotFound}  />
                </Switch>
          </Router>
      
    </>
  )
}

export default Academics