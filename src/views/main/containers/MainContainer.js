import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from '../../../components/container/Container';
import flowers from '../../../images/flowers.jpg'

import { Keyframes, Frame } from 'react-keyframes'

class MainContainer extends Component {

    remainDays = (date1, date2) => {

        var one_day = 1000 * 60 * 60 * 24;

        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();

        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;

        // Convert back to days and return
        return Math.round(difference_ms / one_day);
    }

    daysLeftMessage = () => {

        const daysLeft = this.remainDays(new Date(), new Date(2021, 0, 9))

        if (daysLeft > 0)
            return `𝐹𝒶𝓁𝓉𝒶𝓂 ${daysLeft} 𝒹𝒾𝒶𝓈`

        if (daysLeft === 0)
            return "É 𝒽𝑜𝒿𝑒!!"

        const daysAfter = this.remainDays(new Date(2021, 0, 9), new Date())

        return `𝒞𝒶𝓈𝒶𝒹𝑜𝓈 à ${daysAfter} 𝒹𝒾𝒶𝓈`
    }

    render() {
        return (
            <div>
                <Container style={styles.fade} />
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

                <Keyframes loop>
                    <Frame duration={5000}>
                        <span style={styles.coupleNames} >𝒜𝓃𝒹𝓇𝒾𝑒𝓁𝑒 & 𝒢𝓊𝓈𝓉𝒶𝓋𝑜</span>
                    </Frame>

                    <Frame duration={1000}>
                        <span style={{...styles.coupleNames, ...styles.coupleNamesFadeOut}} >𝒜𝓃𝒹𝓇𝒾𝑒𝓁𝑒 & 𝒢𝓊𝓈𝓉𝒶𝓋𝑜</span>
                    </Frame>

                    <Frame duration={5000}>
                        <span style={styles.coupleNames}>{this.daysLeftMessage()}</span>
                    </Frame>
                    <Frame duration={1000}>
                        <span style={{...styles.coupleNames, ...styles.coupleNamesFadeOut}} >{this.daysLeftMessage()}</span>
                    </Frame>
                </Keyframes>
            </div>
        );
    }
}

const styles = {

    coupleNamesFadeOut: {
        opacity: '0'
    },

    coupleNames: {
        position: 'absolute',
        marginRight: '0px',
        left: '50%',
        width: 'auto',
        transform: 'translateX(-50%)',
        top: '20vh',
        fontSize: '8vh',
        color: 'white',
        zIndex: 1000,
        transition: '1s',
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
        position: 'absolute',
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
