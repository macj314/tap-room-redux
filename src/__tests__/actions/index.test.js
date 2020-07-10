import * as actions from '../../actions';

describe('form actions', () => {
  test('toggle form should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });

  test('deleteBag should call DELETE_BAG action', () => {
    expect(actions.deleteBag(1)).toEqual({
      type: 'DELETE_BAG',
      id: 1
    });
  });

  test('addBag should call ADD_BAG action', () => {
    expect(actions.addBag({
      name: 'Jays Mocha',
      roast: 'light',
      flavor: 'Chocolate',
      price: 12.00,
      capacity: 18,
      stock: 18,
      id: 1
    })).toEqual({
      type: 'ADD_BAG',
      name: 'Jays Mocha',
      roast: 'light',
      flavor: 'Chocolate',
      price: 12.00,
      capacity: 18,
      stock: 18,
      id: 1
    });
  });

  test('restockBag should call RESTOCK_BAG action', () => {
    expect(actions.restockBag({
      name: 'Jays Mocha',
      roast: 'light',
      flavor: 'Chocolate',
      price: 12.00,
      capacity: 18,
      stock: 0,
      id: 1
    })).toEqual({
      type: 'RESTOCK_BAG',
      name: 'Jays Mocha',
      roast: 'light',
      flavor: 'Chocolate',
      price: 12.00,
      capacity: 18,
      stock: 18,
      id: 1
    });
  });  
})