import Allreducer from "./Reducers";
import { createStore } from "redux"
const Store = createStore(Allreducer,{},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default Store;