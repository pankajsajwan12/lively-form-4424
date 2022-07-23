import  { createContext, useContext, useReducer } from "react";
import products from '../Data/Data.json'
import { cartReducer, ProdReducer } from "./Reducers";

export  const CartContext = createContext();

export const CartProvider = ({ children }) => {


    const [state, dispatch]= useReducer(cartReducer, {
        products:products,
        cart:[],
    })

    const [prodState, prodDispatch] =useReducer(ProdReducer,);
    return (
    <CartContext.Provider value={{ state, dispatch ,prodState, prodDispatch }}>
        {children}
    </CartContext.Provider>
    )
}

export const CartState = () => {
    return useContext(CartProvider)
}

