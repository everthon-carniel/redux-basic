import * as actionTypes from '../actions';

const initialState = { results: [] };

const reducer = (state = initialState, action) => {
  const { type, list, element } = action;
  const { results } = state;

  const { STORE_RESULT, DELETE_RESULT } = actionTypes;

  switch (type) {
    case STORE_RESULT:
      return {
        ...state,
        results: results.concat(element),
      };
    case DELETE_RESULT:
      return {
        ...state,
        results: list,
      };
    default: return state;
  }
};

export default reducer;
