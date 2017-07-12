import { combineReducers } from "redux";
import { WebRouter } from "../routes";

const defaultState = {
  index: 0,
  routes: [{ routeName: "Home" }]
};

const naviReducer = (state = defaultState, action) =>
  WebRouter.getStateForAction(state, action);

export default combineReducers({
  navi: naviReducer
});
