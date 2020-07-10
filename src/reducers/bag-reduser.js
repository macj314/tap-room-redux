import * as a from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, roast, flavor, price, capacity, stock, id } = action;
  switch (action.type) {
    case a.RESTOCK_BAG:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          roast: roast,
          flavor: flavor,
          price: price,
          capacity: capacity,
          stock: capacity,
          id: id
        }
      });

    case a.LOWER_STOCK:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          roast: roast,
          flavor: flavor,
          price: price,
          capacity: capacity,
          stock: stock - 0.36,
          id: id
        }
      });
    }
}