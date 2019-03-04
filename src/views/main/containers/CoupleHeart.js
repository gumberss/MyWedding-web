import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScrollAnimation from 'react-animate-on-scroll'
import Container from '../../../components/container/Container';

import leftHeart from '../../../images/left-heart-side.png'
import rightHeart from '../../../images/right-heart-side.png'
import coupleHeart from '../../../images/couple-heart.png'

class CoupleHeart extends Component {
    render() {
        return (
            <Container>

                <ScrollAnimation 
                    animateIn='bounceInRight' 
                    animateOnce 
                    delay={800}
                    style={{zIndex: 100}}
                >
                    <img style={styles.absolute} src={leftHeart} />
                </ScrollAnimation>

                <ScrollAnimation 
                    animateIn='bounceInRight' 
                    animateOnce 
                    delay={1800} 
                    style={{zIndex: 100}}
                >
                    <img style={{ ...styles.absolute, ...styles.rightHeart }} src={rightHeart} />
                </ScrollAnimation>

                <ScrollAnimation 
                    animateIn='bounceInRight' 
                    animateOnce 
                    delay={2600}
                >
                    <img style={{ ...styles.absolute, ...styles.coupleHeart }} src={coupleHeart} />
                </ScrollAnimation>

            </Container>

        );
    }
}

const styles = {
    rightHeart: {
        marginLeft: '158px'
    },
    coupleHeart: {
        marginLeft: '2px',
        top: '2px',
    },
    absolute: {
        position: 'absolute'
    },
    weddingCommingText: {
        paddingLeft: '10px',
        color: 'white',
        paddingTop: '20vh'
    },
    paralaxContent: {
        height: '500px',
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '30px'

    }
}


export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(CoupleHeart);
