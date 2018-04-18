import React, {Component} from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Login from '../containers/login.js'
import Dashboard from '../containers/dashboard.js'


const PrivateRoute = ({
  component: Component,
  ...rest
}) => (<Route {...rest} render={props => (
    localStorage.getItem('Token')//changeThis for an API Token Verify
    ? (<Component {...props}/>)
    : (<Redirect to={{
        pathname: '/',
        state: {
          from: props.location
        }
      }}/>))}/>)

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem('Token')
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute path="/dashboard" exact="exact" component={Dashboard} />
          <Route path="/" component={Login}/>
        </Switch>
    </BrowserRouter>);
  }

}

export default Routes
