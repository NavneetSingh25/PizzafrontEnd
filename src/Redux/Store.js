import { configureStore } from "@reduxjs/toolkit";
import AuthSliceReducer from './Slices/AuthSlice'
import ProductSliceReducer from './Slices/ProductSlice'
import CartSliceReducer from './Slices/CartSlice'
import OrderSliceReducer from './Slices/OrderSlice'
export const store=configureStore({
    reducer:{
        auth:AuthSliceReducer,
        product:ProductSliceReducer,
        carts:CartSliceReducer,
        orders:OrderSliceReducer
    },
    devTools:true
})