import produceData from '../mockData/produce.json';
const POPULATE = "produce/POPULATE";

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
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
        default:
            return state;
    }
}

