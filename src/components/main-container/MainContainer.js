import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../container/Container';
import flowers from '../../images/flowers.jpg'

import { Keyframes, Frame } from 'react-keyframes'

class MainContainer extends Component {
    render() {
        return (

            <Container style={styles.container}>

                <Keyframes component="pre" loop className="animation-test">
                    <Frame duration={15000}>
                        <img style={styles.mainContainer} src={flowers} />
                    </Frame>

                    <Frame duration={15000}>
                        <img style={{ ...styles.mainContainer, ...styles.zoomLoop }} src={flowers} />
                    </Frame>
                </Keyframes>

            </Container>
        );
    }
}

const styles = {
    mainContainer: {
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
    }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(MainContainer);
