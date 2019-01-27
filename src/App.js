import React, { Component } from 'react';
import MenuHeader from './components/MenuHeader';
import { Provider } from 'react-redux'

import createStore from './store'

class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <div className="App">
          <MenuHeader />
            

        </div>
      </Provider>
    );
  }
}

export default App;
