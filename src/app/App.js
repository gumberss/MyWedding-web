import React, { Component } from 'react';
import MenuHeader from '../components/menu-header/MenuHeader';
import { Provider } from 'react-redux'
import createStore from '../store'
import './App.css'
import MainContainer from '../components/main-container/MainContainer';

import goMarige from '../images/bora-casar.png'

import { Parallax, Background } from 'react-parallax';


class App extends Component {
  render() {
    return (
      <Provider store={createStore()}>
        <div className="App">
          <MenuHeader>
            <MainContainer />
            <Parallax
              bgImage={goMarige}
              bgImageAlt="Foto do casal atravessando a BR"
              strength={300}
            >
            
            <div style={{height:'500px'}}></div>  
            </Parallax>

            <div style={{height:1000}}></div>
          </MenuHeader>
        </div>
      </Provider>
    );
  }
}

export default App;
