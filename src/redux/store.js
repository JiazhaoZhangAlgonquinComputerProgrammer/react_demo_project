import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk  from "redux-thunk";
import  cityReducer  from "./reducers/city";
const allReducers = combineReducers(
                {
                    cities:cityReducer
                }
            )
export default createStore(allReducers, applyMiddleware(thunk));