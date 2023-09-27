const ADD_ITEM = "ADD_ITEM"

export const populateCart = (itemId) => {
    return {
        type: ADD_ITEM,
        itemId
        // produce: produceData
    }
}

export default function cartReducer(state={}, action) {
    const nextState = Object.assign({}, Object.freeze(state))
    switch (action.type) {
        case ADD_ITEM:
            nextState[action.itemId] = { id: action.itemId, count: 1 }
            return nextState
        default:
            return state
    }
}