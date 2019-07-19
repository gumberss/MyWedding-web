import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class MenuItem extends Component {

    render() {
        return (
            <Link
                className="bm-item"
                style={style.menuItem}
                id={this.props.name}
                to={this.props.path}
            >
                {this.props.title}
            </Link>

        )
    }
}

const style = {
    menuItem: {
        display: 'block',
        marginBottom: '10px'
    }
}   