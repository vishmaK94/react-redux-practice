import { BUY_SCONE, SELL_SCONE } from "./sconeTypes"

const initialState = {
    numOfScones: 50
}

const sconeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_SCONE:
            return {
                ...state,
                numOfScones: state.numOfScones - action.payload
            }
        case SELL_SCONE:
            return {
                ...state,
                numOfScones: state.numOfScones + 1
            }
        default: return state
    }
}

export default sconeReducer