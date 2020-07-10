import bagReducer from '../../reducers/bag-reducer.js';
import * as a from '../../actions';

describe('bagReducer', () => {

  const bagToRestock = {
    name: 'Jays Mocha',
    roast: 'light',
    flavor: 'Chocolate',
    price: 12.00,
    capacity: 12,
    stock: 5,
    id: 1
  };

  const bagToLowerStock = {
    name: 'Jays Mocha',
    roast: 'light',
    flavor: 'Chocolate',
    price: 12.00,
    capacity: 12,
    stock: 12,
    id: 1
  };

  test('Should set stock equal to capacity', () => {
    const { name, roast, flavor, price, capacity, id } = bagToRestock;
    const action = a.restockBag(bagToRestock);
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
    const { name, roast, flavor, price, capacity, stock, id } = bagToLowerStock;
    const action = a.lowerStock(bagToLowerStock);
    console.log(bagToLowerStock.stock);
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