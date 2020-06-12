import React, { Component } from 'react'
import { connect } from 'react-redux'

class Card extends Component {

    state = {
        hover: false
    }

    onMouseEnter = () => this.setState({ hover: true })
    onMouseLeave = () => this.setState({ hover: false })

    render() {

        const { card, cardHover, paragraph } = styles
        var cardStyle = card

        this.state.hover && (cardStyle = { ...cardStyle, ...cardHover })

        return (
            <div
                style={cardStyle}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                <img
                    style={styles.image}
                    src="https://www.paixaoporgatos.com/wp-content/uploads/2018/07/gatinhos-mais-fofos-do-mundo-06.png"
                />
                <h4 style={styles.title}>Título legal</h4>
                <div style={styles.content}>

                    <p
                        style={paragraph}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales est et sem fringilla commodo.
                    </p>
                    <div style={styles.cardButtonContainer}>
                        <button style={styles.cardButton}>Pedir</button>
                        <button style={styles.cardButton}>Pedir</button>
                        <button style={styles.cardButton}>Pedir</button>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {

    card: {
        flex: '1',
        border: '1px solid gray',
        padding: '3px',
        marginTop: '10px',
        marginLeft: '4px',
        marginRight: '4px',
        opacity: 1,
        height: '400px',
        maxWidth: '250px',
        minWidth: '250px',
        backgroundColor: 'white',
        borderRadius: '3px',
        transition: '0.3s',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        textAlign: 'center'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',

    },
    cardButtonContainer: {
        display: 'flex',
        botton: '0px'
    },
    cardButton: {
        flex: 1
    },
    image: {
        width: '100%',
        paddingBottom: '3px',
        borderBottom: '1px solid gray',

    },
    paragraph: {
        fontFamily: 'Georgia',
        fontSize: '15px',
        margin: '3px',
        textAlign: 'justify'
    },
    cardHover: {
        zIndex: '1',
        marginTop: '3px',
        boxShadow: '0px 10px 30px 2px rgba(0,0,0,0.75)',
    }
}

export default connect()(Card)