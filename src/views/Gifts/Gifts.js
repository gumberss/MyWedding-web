import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from '../../components/container/Container'

import Card from '../../components/Card/Card';

class Gifts extends Component {

    render() {
        return (
            <div style={styles.container}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        )
    }
}

const styles = {
    container: {
        paddingLeft: '100px',
        paddingRight: '100px',
        display: 'flex',
        flexWrap: 'wrap',
    }
}


export default connect()(Gifts)