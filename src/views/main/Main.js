import React, { Component, Fragment } from 'react';

import MainContainer from './containers/MainContainer'
import WeddingComming from './containers/WeddingComming'

class Main extends Component {
    render() {
        return (
            <Fragment>
                <MainContainer />
                <WeddingComming />
                <div style={{ height: 1000 }}></div>
            </Fragment>
        );
    }
}

export default Main;
