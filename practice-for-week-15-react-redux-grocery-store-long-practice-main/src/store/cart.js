const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const ADD_COUNT = "ADD_COUNT";
const MINUS_COUNT = "MINUS_COUNT";
const CLEAR_CART = "CLEAR_CART";

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

export const addCount = (itemId) => {
    return {
        type: ADD_COUNT,
        itemId
    }
}

export const minusCount = (itemId) => {
    return {
        type: MINUS_COUNT,
        itemId
    }
}

export const clearCart = (cart) => {
    return {
        type: CLEAR_CART,
        cart
    }
}



export default function cartReducer(state={}, action) {
    const nextState = Object.assign({}, Object.freeze(state))
    switch (action.type) {
        case ADD_ITEM:
            if (nextState[action.itemId]) {
                nextState[action.itemId].count += 1;
            } else {
                nextState[action.itemId] = { id: action.itemId, count: 1 };
            }
            return nextState;
        case REMOVE_ITEM:
            delete nextState[action.itemId];
            return nextState;
        case ADD_COUNT:
            nextState[action.itemId].count += 1;
            return nextState;
        case MINUS_COUNT:
            if (nextState[action.itemId].count > 1) {
                nextState[action.itemId].count -= 1;
            } else {
                delete nextState[action.itemId];
            }
            return nextState;
        case CLEAR_CART:
            return {};
        default:
            return state;
    }
}