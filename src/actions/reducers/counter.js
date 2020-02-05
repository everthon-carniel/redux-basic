import * as actionTypes from '../actions';

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  const { type, value } = action;
  const { counter } = state;

  const {
    INCREMENT, DECREMENT, ADD, SUBTRACT,
  } = actionTypes;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        counter: counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: counter - 1,
      };
    case ADD:
      return {
        ...state,
        counter: counter + value,
      };
    case SUBTRACT:
      return {
        ...state,
        counter: counter - value,
      };
    default: return state;
  }
};

export default reducer;
