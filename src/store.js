// store.js
import { createStore } from "redux";

const rootReducer = (state = { value: "" }, action) => {
  if (action.type === "UPDATE_VALUE") {
    return { ...state, value: action.payload };
  }
  return state;
};

const store = createStore(rootReducer);

export default store;
