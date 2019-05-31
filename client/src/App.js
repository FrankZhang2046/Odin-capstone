import React from 'react';
import Login from './components/Login/Login';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Repository from './pages/Repository/Repository';
import ReadArea from './pages/ReadArea/ReadArea';
import Article from "./components/Article/Article";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/loggedIn" render={(props)=><Login {...props} />}/>
        <Route exact path="/repository" component={Repository}/>
        <Route exact path="/feedly/:id" render={(props)=><ReadArea {...props} />}/>
        <Route exact path="/feedly/article/read" render={(props)=><Article {...props} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
