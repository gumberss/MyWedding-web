import React, { Component, Fragment } from 'react'
import MainContainer from './containers/MainContainer'
import WeddingComming from './containers/WeddingComming'
import CoupleHeart from './containers/CoupleHeart'
import { from } from 'rxjs'

/**
 
<WeddingComming />
                <CoupleHeart />

 */

class Main extends Component {
	render() {
		return (
			<Fragment>
				<MainContainer />
			</Fragment>
		)
	}
}

export default Main
