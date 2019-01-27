import React, { Component } from 'react';
import MenuHeader from './components/menu-header/MenuHeader';
import { Provider } from 'react-redux'

import createStore from './store'

import logo from './logo.svg'


class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <div className="App">
          <MenuHeader >
            <img src={logo} />
          </MenuHeader>
        </div>
      </Provider>
    );
  }
}

export default App;
