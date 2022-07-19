import { combineReducers } from "redux";
import users from "./signup";
import res from "./reservation";
const rootReducer = combineReducers({ users, res });
export default rootReducer;
