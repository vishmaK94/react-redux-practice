import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyCake } from '../redux'

const HooksCakeContainer = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
    return (
        <div className="App">
            <h2>Number of Cakes: {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HooksCakeContainer
