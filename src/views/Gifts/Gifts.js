import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from '../../components/container/Container'
import { Desktop } from'../../components/container/ScreenSize'
import Card from '../../components/Card/Card';

class Gifts extends Component {

    render() {
        return (
            
            <Desktop style={styles.container}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Desktop>
        )
    }
}

const styles = {
    container: {
        //paddingLeft: '100px',
        //paddingRight: '100px',
        //width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifySelf: 'center',
        justifyContent:'space-around',
        marginLeft: "auto",
        marginRight: "auto"

    }
}


export default connect()(Gifts)