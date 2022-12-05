import { AUTH, LOGOUT } from "../constants/actionTypes"
import { Action } from "../actions/index"

const authReducer = (state = {authData: null}, action: Action) => {
  switch(action.type) {
    case AUTH:
      return state;
    case LOGOUT:
      return state;
    default:
      return state;
  }
}

export default authReducer;