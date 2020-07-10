import bagReducer from '../../reducers/bag-reducer.js';
import * as a from '../../actions';

describe('bagReducer', () => {

  const currentState = {
    name: 'Jays Mocha',
    roast: 'light',
    flavor: 'Chocolate',
    price: 12.00,
    capacity: 12,
    stock: 5,
    id: 1
  };

  test('Should set stock equal to capacity', () => {
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

  test('Should lower stock by 0.36', () => {
    const { name, roast, flavor, price, capacity, stock, id } = currentState;
    const action = a.lowerStock(currentState);
    expect(bagReducer({}, action)).toEqual({
      [id]: {
        name: name,
        roast: roast,
        flavor: flavor,
        price: price,
        capacity: capacity,
        stock: Math.round((stock - 0.36) * 100) / 100,
        id: id
      }
    });
  });
});