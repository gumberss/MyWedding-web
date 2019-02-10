import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScrollAnimation from 'react-animate-on-scroll'
import { Parallax } from 'react-parallax';

import goMarige from '../../../images/bora-casar.png'

class WeddingComming extends Component {
    render() {
        return (
            <Parallax
                bgImage={goMarige}
                bgImageAlt="Foto do casal atravessando a BR"
                strength={300}
            >
                <div style={styles.paralaxContent}>

                    <ScrollAnimation animateIn='bounceInRight' animateOnce delay={800}>
                        <h2 style={styles.weddingCommingText}>
                            O casamento
                        </h2>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='bounceInRight' animateOnce delay={1800} >
                        <h2 style={styles.weddingCommingText}>
                            está
                        </h2>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='bounceInRight' animateOnce delay={2600}>
                        <h2 style={styles.weddingCommingText}>
                            chegando...
                        </h2>
                    </ScrollAnimation>

                </div>
            </Parallax>
        );
    }
}

const styles = {
    weddingCommingText: {
        paddingLeft: '8px',
        color: 'white'
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
)(WeddingComming);
