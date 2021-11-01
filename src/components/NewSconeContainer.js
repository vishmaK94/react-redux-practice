import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyScone } from '../redux'

const NewSconeContainer = ({ numOfScones, buyScone }) => {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Num of Scones : {numOfScones}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => buyScone(number)}>Buy {number} scone</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfScones: state.scone.numOfScones
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyScone: number => dispatch(buyScone(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSconeContainer)
