import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import bagListReducer from '../../reducers/bag-list-reducer';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return to default state if action type is not one of the predefined actions', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterBagList: {},
      formVisibleOnPage: false
    });
  });

 test( 'Check that bagListReducer matches rootReducer', () => {
   expect(store.getState().masterBagList).toEqual(bagListReducer(undefined, {type:null}));
 });

  test('Check that formVisibleReducer matches rootReducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  })

  test('Check that initial state of bagListReducer matches root reducer after adding a bag', () => {
    const action = {
      type: 'ADD_BAG',
      name: 'Beans in a Bag',
      roast: 'dark',
      flavor: 'fruity',
      price: '10.00',
      id: 2
    }
    store.dispatch(action);
    expect(store.getState().masterBagList).toEqual(bagListReducer(undefined, action));
  })

  test('Check that formVisible reducer matches root reducer after the form is toggled', () => {
    const action ={
      type: 'TOGGLE_FORM'
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  })
});