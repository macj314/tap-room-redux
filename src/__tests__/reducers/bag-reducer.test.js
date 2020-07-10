import bagReducer from '../../reducers/bag-reducer.js';
import * as a from '../../actions';

describe('bagReducer', () => {

  const currentState = {
    name: 'Jays Mocha',
    roast: 'light',
    flavor: 'Chocolate',
    price: 12.00,
    capacity: 12,
    stock: 12,
    id: 1
  };

  test('Should add a new bag to masterBagList', () => {
    const { name, roast, flavor, price, capacity, id } = currentState;
    const action = a.restockBag(currentState);
    expect(bagReducer({}, action)).toEqual({
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
  });
});