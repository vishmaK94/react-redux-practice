import { BUY_SCONE, SELL_SCONE } from './sconeTypes'

export const buyScone = (number = 1) => {
    return {
        type: BUY_SCONE,
        payload: number
    }
}

export const sellScone = () => {
    return {
        type: SELL_SCONE
    }
}