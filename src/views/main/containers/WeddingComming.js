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
                            𝒪 𝒸𝒶𝓈𝒶𝓂𝑒𝓃𝓉𝑜
                        </h2>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='bounceInRight' animateOnce delay={1800} >
                        <h2 style={styles.weddingCommingText}>
                            𝑒𝓈𝓉á
                        </h2>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn='bounceInRight' animateOnce delay={2600}>
                        <h2 style={styles.weddingCommingText}>
                            𝒸𝒽𝑒𝑔𝒶𝓃𝒹𝑜
                        </h2>
                    </ScrollAnimation>

                </div>
            </Parallax>
        );
    }
}

const styles = {
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
)(WeddingComming);
