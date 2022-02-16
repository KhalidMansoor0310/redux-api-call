import { actionTypes } from "../Constants/action_types"
export const SetProducts=(products)=>{
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:products
    }
}

export const selectProducts=(products)=>{
    return {
        type:actionTypes.SELECT_PRODUCTS,
        payload:products
    }
}
export const RemoveProducts=(products)=>{
    return {
        type:actionTypes.REMOVE_SELECTED_PRODUCTS,
        payload:products
    }
}