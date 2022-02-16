import { actionTypes } from "../Constants/action_types";
const initialState = {
    products:[
        {
        id:1,
        title:'programmer',
        category:'programmer'
    }]
}
export const productReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case actionTypes.SET_PRODUCTS:
            return state;
        case actionTypes.SELECTED_PRODUCTS:
            return state;
        case actionTypes.REMOVE_SELECTED_PRODUCTS:
            return state;
        default:
            return state;
    }
}