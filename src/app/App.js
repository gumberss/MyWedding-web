import React, { Component } from 'react';
import MenuHeader from '../components/MenuHeader/MenuHeader';
import { Provider } from 'react-redux'
import createStore from '../store'
import './App.css'
import Main from '../views/main/Main';
import Gifts from '../views/Gifts/Gifts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <Router>
          <div className="App" >
          <style>{'body { background-color: #d6abff; }'}</style>
            <MenuHeader />
            <Switch>
              <Route exact path="/" component={Main}></Route>
              <Route path="/gifts" component={Gifts}></Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
