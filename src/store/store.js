import {createStore} from "redux";
import busReducer from "./reducers/busReducers";


const store = createStore(busReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;


