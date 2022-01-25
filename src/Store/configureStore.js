import rootReducer from "../Reducers/rootReducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
