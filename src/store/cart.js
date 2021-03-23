


const POPULATE_CART = 'produce/POPULATE_CART';
const DELETE_ITEM = 'cart/DELETE_ITEM'

export const populateCart = (produceId) => {
    return {
        type: POPULATE_CART,
        id: produceId
    }
}

export const deleteItem = (produceId) =>{
    return {
        type: DELETE_ITEM,
        id: produceId
    }
}

export default function cartReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case POPULATE_CART:
          newState = {...state};
          newState[action.id] = {
              id: action.id,
              count: 1
          }
          return newState;

        case DELETE_ITEM:
            newState = {...state}
            delete newState[action.id]
            return newState

        default:
            return state;
    }
}
