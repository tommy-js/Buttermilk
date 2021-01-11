import { initialState } from "./initialState";

const userReducer = (state = initialState, action: any) => {
  const newState = { ...state };
  if (action.type == "SET_STATUS") {
    newState.status = action.payload;
  }
  return newState;
};

export default userReducer;
