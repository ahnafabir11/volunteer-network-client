import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddEvent from './components/AddEvent/AddEvent';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import SignIn from './components/SignIn/SignIn';
import { createContext } from 'react';
import { useState } from 'react';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/donation">
              <h1 className="text-center py-5">This Page is Under Constraction</h1>
            </Route>
            <Route path="/blogs">
              <h1 className="text-center py-5">This Page is Under Constraction</h1>
            </Route>
            <Route path="/tasks">
              <h1 className="text-center py-5">This Page is Under Constraction</h1>
            </Route>
            <Route path="/signin">
              <SignIn/>
            </Route>
            <PrivetRoute path="/admin">
              <AddEvent/>
            </PrivetRoute>
            <Route path="*">
              <h1 className="text-center">Page Not Found</h1>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;