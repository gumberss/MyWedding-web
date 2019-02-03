import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../container/Container';
import flowers from '../../images/flowers.jpg'

import { Keyframes, Frame } from 'react-keyframes'

class MainContainer extends Component {
    render() {
        return (
            <div>
                
                <Container style={styles.container}>

                    <Keyframes component="pre" loop className="animation-test">
                    <Frame duration={100}>
                            <img style={{...styles.flowers, ...styles.startFlowers}} src={flowers} />
                        </Frame>
                        <Frame duration={15000}>
                            <img style={{ ...styles.flowers, ...styles.zoomLoop }} src={flowers} />
                        </Frame>
                        <Frame duration={15000}>
                            <img style={styles.flowers} src={flowers} />
                        </Frame>
                    </Keyframes>

                </Container>
            </div>
        );
    }
}

const styles = {
    startFlowers: {
        transition: '0.1s'
    },
    flowers: {
        height: '100vh',
        maxHeight: '100vh',
        width: '100%',
        maxWidth: '100%',
        justifyContent: 'center',
        transition: '15s',
        overflow: 'hidden',
        transform: 'scale(1.2)'
    },
    zoomLoop: {
        transform: 'scale(1.3)',
    },
    container: {
        display: 'inline-block',
        overflow: 'hidden'
    },
    fade: {

    }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(MainContainer);
