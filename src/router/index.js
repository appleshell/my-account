import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Index from '../views/index'
import Login from '../views/login/index.jsx'

const Routes = e => {
  return (
    <BrowserRouter basename="learn">
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Index} />
        <Redirect to="/" /> 
      </Switch>
    </BrowserRouter>
  )
}

export default Routes