import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

const CakeContainer = ({ numOfCakes, buyCake }) => {
    return (
        <div className="App">
            <h2>Number of Cakes: {numOfCakes}</h2>
            <button onClick={buyCake}>Buy Cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
