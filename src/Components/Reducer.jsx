import { cart } from "./Cartdata"

const initialState = {
    shop: [],
}

export default function Reducer(state = initialState, action){
    switch(action.type){
        case "Increment":
           return{
            ...state, shop: state.shop.map((item)=>item.id === action.product.id ? {...item, qty: (item.qty || 1) + 1} : item)
           }


        case "Decrement":
            return{
                ...state, shop: state.shop.map((item)=>item.id === action.product.id ? {...item, qty: (item.qty || 1) - 1}: item) 
            }

        case "Add":
            const exist = state.shop.find((item)=>item.id === action.product.id)
            if (exist){
                return state
            }else{
                return { ...state, shop: [...state.shop, action.product] }
            }


        case "Remove":
            const updatedState = [...state.shop]
            console.log(updatedState)
            const indextoRemove = updatedState.findIndex((item)=>item.id === action.product.id)

            if(indextoRemove !== -1){
                updatedState.splice(indextoRemove, 1)
            }

            return {...state, shop: updatedState}

        default:
            return state
    }

}