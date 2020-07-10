import * as actions from './../../actions';

describe('form actions', () => {
  test('toggle form should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
})