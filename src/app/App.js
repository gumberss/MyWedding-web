import React, { Component } from 'react';
import MenuHeader from '../components/menu-header/MenuHeader';
import { Provider } from 'react-redux'
import createStore from '../store'
import './App.css'
import Main from '../views/main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <div className="App">
          <MenuHeader>
            <Router>
              <Switch>
                <Route exact path="/" component={Main}></Route>
              </Switch>
            </Router>
            
          </MenuHeader>
        </div>
      </Provider>
    );
  }
}

export default App;
