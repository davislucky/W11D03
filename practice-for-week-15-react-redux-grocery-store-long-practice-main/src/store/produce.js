import produceData from '../mockData/produce.json';
const POPULATE = "produce/POPULATE";
const TOGGLE_LIKE = "TOGGLE_LIKE";

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

export const toggleLike = (itemId) => {
    return {
        type: TOGGLE_LIKE,
        itemId
    }
}

export default function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const nextState = {};
            action.produce.forEach(product => {
                nextState[product.id] = product;
            })
            return nextState;
        case TOGGLE_LIKE:
            const newState = Object.assign({}, Object.freeze(state));
            newState[action.itemId].liked === false ? 
            newState[action.itemId].liked = true : newState[action.itemId].liked = false;
            return newState;
        default:
            return state;
    }
}

