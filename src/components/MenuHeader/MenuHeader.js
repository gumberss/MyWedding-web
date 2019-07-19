import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bubble as Menu } from 'react-burger-menu'

import './MenuHeader.css'
import menuHeader from './MenuHeaderData.js'
import MenuItem from './MenuItem/MenuItem'

class MenuHeader extends Component {

    showSettings = e => {
        e.preventDefault()
    }

    render() {
        return (
            <div id="outer-container">
                <Menu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} >
                {menuHeader.items.map(item =>
                    <MenuItem 
                            name={item.name}
                            key={item.name}
                            path={item.path}
                            title={item.title}
                        />
                    )}
                </Menu>
                <main id="page-wrap">
                    {this.props.children}
                </main>
            </div>
        )
    }
}



export default connect()(MenuHeader)