import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Index from '../views/index'
import Login from '../views/login/index.jsx'

const Routes = e => {
  return (
    <BrowserRouter basename="learn">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Index} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes