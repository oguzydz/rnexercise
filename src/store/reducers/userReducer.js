import * as actions from '../actions/types';

const initalState = {
  user: null,
  auth: false,
  remember: true,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case actions.SIGNIN:
      return {
        ...state,
        auth: true,
        remember: action.payload.remember
      };
    case actions.SIGNUP:
      return {
        ...state,
        user: action.payload,
      };
    case actions.SIGNOUT:
      return {
        ...state,
        user: null,
        auth: false,
      };
  }
  return state;
};

export default userReducer;
