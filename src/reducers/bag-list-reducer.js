import * as a from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, roast, flavor, price, capacity, stock, id } = action;
  switch (action.type) {
    case a.ADD_BAG:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        roast: roast,
        flavor: flavor,
        price: price,
        capacity: capacity,
        stock: stock,
        id: id
      }
    });

    case a.DELETE_BAG:
      const newState = { ...state };
      delete newState[id];
      return newState;      

    default:
      return state;
    }
  };