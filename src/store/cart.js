


const POPULATE_CART = 'produce/POPULATE_CART';

export const populateCart = (produceId) => {
    return {
        type: POPULATE_CART,
        id: produceId
    }
}


export default function cartReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE_CART: 
          const newState = {...state};
          newState[action.id] = {
              id: action.id,
              count: 1
              
          }

          return newState;
          default: 
            return state;
    }
}