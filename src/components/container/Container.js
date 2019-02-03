import React, { Component } from 'react';

import { connect } from 'react-redux';


class Container extends Component {
    render() {
        const { children, dispatch, style, ...props } = this.props

        return (
            <div  style={{ ...styles.fullScreen, ...style }}  {...props}>
                {children}
            </div>);
    }
}

const styles = {
    fullScreen: {
        display: 'flex',
        height: '100vh',
        maxHeight: '100vh',
        width: '100%',
        maxWidth: '100%'

    }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(Container);
