import bagListReducer from '../../reducers/bag-list-reducer';
import * as a from '../../actions';

describe('bagListReducer', () => {

  const currentState = {
    1:{
      name: 'Jays Mocha',
      roast: 'light',
      flavor: 'Chocolate',
      price: 12.00,
      id: 1
    },
    2:{
      name: 'Beans in a Bag',
      roast: 'dark',
      flavor: 'fruity',
      price: '10.00',
      id: 2
    }
  }

  const firstBag = {
    name: 'Jays Mocha',
    roast: 'light',
    flavor: 'Chocolate',
    price: 12.00,
    id: 1
  };

  test('Should return a default state if there is no action passed into the reducer', () => {
    expect(bagListReducer({}, {type: null})).toEqual({});
  });

  test('Should add a new bag to masterBagList', () => {
    const { name, roast, flavor, price, id } = firstBag;
    const action = a.addBag(firstBag);
    expect(bagListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        roast: roast,
        flavor: flavor,
        price: price,
        id: id
      }
    });
  });

  test('Should delete a bag from masterBagList', () => {
    const action = a.deleteBag(1);
    expect(bagListReducer(currentState, action)).toEqual({
      2:{
        name: 'Beans in a Bag',
        roast: 'dark',
        flavor: 'fruity',
        price: '10.00',
        id: 2
      }
    });
  });
});