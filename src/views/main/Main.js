import React, { Component, Fragment } from 'react';

import MainContainer from './containers/MainContainer'
import WeddingComming from './containers/WeddingComming'
import CoupleHeart from './containers/CoupleHeart';
import { withRouter } from "react-router";
/**
 
<WeddingComming />
                <CoupleHeart />

 */

class Main extends Component {
    render() {
        return (
            <Fragment>
                <MainContainer />
                
            </Fragment>
        );
    }
}

export default withRouter(Main);
