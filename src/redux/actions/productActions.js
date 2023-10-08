import {actionTypes} from '../contants/actionTypes'
export const setProduct=(product)=>{
    return{
        type: actionTypes.SET_PRODUCT,
        payload: product
    }
}

export const selectedProduct=(product)=>{
    return{
        type: actionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct=()=>{
    return{
        type: actionTypes.REMOVE_SELECTED_PRODUCT
    }
}
