import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Student from '../views/student'
import Sortable from '../views/sortable'
import Learn from '../views/learn/learn'

const Routes = e => {
  return (
    <Switch>
      <Route path="/student" component={Student} />
      <Route exact path="/sortable" component={Sortable} />
      <Route exact path="/learn" component={Learn} />
    </Switch>
  )
}

export default Routes
