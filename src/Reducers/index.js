import { productReducer } from "./productReducers";
import { combineReducers } from "redux";

const Allreducer = combineReducers({
    allProducts: productReducer,
});

export default Allreducer;