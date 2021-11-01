import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyScone } from '../redux'

const HooksNewSconeContainer = () => {
    const [number, setNumber] = useState(1)
    const numOfScones = useSelector(state => state.scone.numOfScones)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Num of Scones : {numOfScones}</h2>
            <input type="text" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyScone(number))}>Buy {number} scone</button>
        </div>
    )
}

export default HooksNewSconeContainer
