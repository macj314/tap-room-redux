import formVisibleReducer from '../../reducers/form-visible-reducer.js';

describ("formVisibleReducer", () => {

  test('Should return to default state if action type is not one of the predefined actions', () => {
    expect(formVisibleReducer(false, { type: null })).toEqaul(false);
  });
})