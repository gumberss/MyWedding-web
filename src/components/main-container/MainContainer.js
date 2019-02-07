import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../container/Container';
import flowers from '../../images/flowers.jpg'

import { Keyframes, Frame } from 'react-keyframes'

class MainContainer extends Component {
    render() {
        return (
            <div>
                <Container style={styles.fade}>

                </Container>
                <Container style={styles.container}>

                    <Keyframes component="pre" loop className="animation-test">
                        <Frame duration={100}>
                            <img style={{ ...styles.flowers, ...styles.startFlowers }} src={flowers} />
                        </Frame>
                        <Frame duration={15000}>
                            <img style={{ ...styles.flowers, ...styles.zoomLoop }} src={flowers} />
                        </Frame>
                        <Frame duration={15000}>
                            <img style={styles.flowers} src={flowers} />
                        </Frame>
                    </Keyframes>

                </Container>

                <span style={styles.coupleNames} >𝓐𝓷𝓭𝓻𝓲𝓮𝓵𝓮 & 𝓖𝓾𝓼𝓽𝓪𝓿𝓸</span>
            </div>
        );
    }
}

const styles = {
    coupleNames: {
        position: 'absolute',
        marginRight: '0px',
        left: '50%',
        width: 'auto',
        transform: 'translateX(-50%)',
        top: '20vh',
        fontSize: '8vh',
        color: 'white',
        zIndex: 1000
    },
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
        transform: 'scale(1.2)',
    },
    zoomLoop: {
        transform: 'scale(1.3)',
    },
    container: {
        display: 'inline-block',
        overflow: 'hidden'
    },
    fade: {
        position:'absolute',
        zIndex: '100',
        backgroundColor: 'purple',
        opacity: '0.2',
        filter: 'blur(8px)',
        '-webkit-filter': 'blur(8px)'

    }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(MainContainer);
