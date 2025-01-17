import React from 'react';
import Login from './components/Login/Login';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Repository from './pages/Repository/Repository';
import Article from "./components/Article/Article";
import Welcome from './pages/Welcome/Welcome';
import Navbar from '../src/components/Navbar/Navbar';
import './App.scss';
import Stats from './components/Stats/Stats';
import FeedlyArticle from './components/FeedlyArticle/FeedlyArticle'
import FeedlyScraped from './components/FeedlyScraped/FeedlyScraped';
import LoggedIn from './components/LoggedIn/LoggedIn';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" render={(props)=><Login {...props} />}/>
        <Route exact path="/loggedin" render={(props)=><LoggedIn {...props} />}/>
        <Route exact path="/repository/pocket" component={Repository} />
        <Route exact path="/repository/feedly" component={Repository} />
        <Route exact path="/repository/feedly/:id" render={(props) => <Repository {...props} />}/>
        <Route exact path="/reading-area" render={(props)=><Article {...props} />} />
        <Route exact path="/feedly-reading-area" render={(props)=><FeedlyArticle {...props} />} />
        <Route exact path="/stats" component={Stats}/>
        <Route exact path="/scraped-reading-area" render={(props) => <FeedlyScraped {...props}/>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
