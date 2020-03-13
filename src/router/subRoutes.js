import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Student from '../views/student'
import Sortable from '../views/sortable'
import Learn from '../views/learn/learn'
import EmptyLine from '../views/ui-demo/empty_line'
import Button from '../views/ui-demo/button'
import Layout from '../views/ui-demo/layout'

const Routes = e => {
  return (
    <Switch>
      <Route path="/student" component={Student} />
      <Route exact path="/sortable" component={Sortable} />
      <Route exact path="/learn" component={Learn} />
      <Route exact path="/emptyLine" component={EmptyLine} />
      <Route exact path="/button" component={Button} />
      <Route exact path="/layout" component={Layout} />
    </Switch>
  )
}

export default Routes
