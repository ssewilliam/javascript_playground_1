import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/login'
import ViewNumbers from './containers/viewNumbers'


const Routes = () => {
    return (
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={ViewNumbers} />
      </Switch>
    );
}
export default Routes
