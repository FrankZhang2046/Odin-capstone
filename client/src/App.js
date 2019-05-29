import React from 'react';
import Login from './components/Login/Login';
import {Switch, Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/loggedIn" render={(props)=><Login {...props} />}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
