const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";

export const populateCart = (itemId) => {
    return {
        type: ADD_ITEM,
        itemId
    }
}

export const removeItem = (itemId) => {
    return {
        type: REMOVE_ITEM,
        itemId
    }
}

export default function cartReducer(state={}, action) {
    const nextState = Object.assign({}, Object.freeze(state))
    switch (action.type) {
        case ADD_ITEM:
            nextState[action.itemId] = { id: action.itemId, count: 1 }
            return nextState;
        case REMOVE_ITEM:
            delete nextState[action.itemId];
            return nextState;
        default:
            return state
    }
}