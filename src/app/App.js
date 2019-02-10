import React, { Component } from 'react';
import MenuHeader from '../components/menu-header/MenuHeader';
import { Provider } from 'react-redux'
import createStore from '../store'
import './App.css'
import Main from '../views/main/Main';

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <div className="App">
          <MenuHeader>
            <Main />
          </MenuHeader>
        </div>
      </Provider>
    );
  }
}

export default App;
