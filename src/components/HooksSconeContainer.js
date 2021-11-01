import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyScone, sellScone } from '../redux'

const HooksSconeContainer = () => {

    const numOfScones = useSelector(state => state.scone.numOfScones)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Num of Scones: {numOfScones}</h2>
            <div>
                <button onClick={() => dispatch(buyScone())}>Buy Scone</button>
                <button onClick={() => dispatch(sellScone())}>Sell Scone</button>
            </div>
        </div>
    )
}

export default HooksSconeContainer
