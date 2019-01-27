import React, { Component } from 'react';

import { bubble as Menu } from 'react-burger-menu'

import './MenuHeader.css'

export default class MenuHeader extends Component {

    showSettings = e => {
        e.preventDefault()
    }

    render() {
        return (
            <div id="outer-container">
                <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >
                        <a  id="home" href="/">Home</a>
                </Menu>
                <main id="page-wrap">
                    {this.props.children}
                </main>
            </div>
        )
    }
}