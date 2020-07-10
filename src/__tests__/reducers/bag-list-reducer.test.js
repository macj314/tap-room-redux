import bagListReducer from '../../reducers/bag-list-reducer';

describe('bagListReducer', () => {
  test('Should return a default state if there is no action passed into the reducer', () => {
    expect(bagListReducer({}, {type: null})).toEqual({});
  });
});