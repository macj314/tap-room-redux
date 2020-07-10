import formVisibleReducer from '../../reducers/form-visible-reducer.js';

describe("formVisibleReducer", () => {

  test('Should return to default state if action type is not one of the predefined actions', () => {
    expect(formVisibleReducer(false, { type: null })).toEqual(false);
  });

  test('Should successfully toggle form state from false to true', () => {
    expect(formVisibleReducer(false, { type : 'TOGGLE_FORM'})).toEqual(true);
  });
})