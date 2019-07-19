import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from '../../components/container/Container'
import { withRouter } from "react-router";

import Link from 'react-router-dom/Link'

class Gifts extends Component {

    render() {
        return  <Link to='/'>display text</Link>
    }
}



export default withRouter(Gifts)