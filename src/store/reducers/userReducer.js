import * as actions from '../actions/types';

const initalState = {
  user: null,
  auth: false,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        user: action.payload,
        auth: true,
      };
    case actions.LOGOUT:
      return {
        ...state,
        user: null,
        auth: false,
      };
  }
  return state;
};

export default userReducer;
