import { combineReducers } from "redux";
import users from "./signup";
import res from "./reservation";
import utils from "./pageutils";
const rootReducer = combineReducers({ users, res, utils });
export default rootReducer;
