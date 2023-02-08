import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


import Header from './components/Header';

import Dashboard from './containers/Dashboard';
import Login from './containers/Login';

const App = () => {
  const isAuthorized = useSelector(({ auth }) => auth.isAuthorized);

   return (
     <Router>
       <Header />
       <Switch>
         <Route exact path="/login" component={Login} />
         <Route
           path="/"
           render={() => (
            isAuthorized ? <Dashboard /> : <Redirect to="/login" />
          )}
         />
       </Switch>
     </Router>
  );
};
export default App;
