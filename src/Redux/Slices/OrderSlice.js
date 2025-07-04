import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance from "../../Helpers/axiosInstance";

const initialState={
    ordersData:null
}


export const placeOrder=createAsyncThunk('/orders/placeorder',async (orderDetails)=>{
    try {
        const response=axiosInstance.post(`/orders`,orderDetails);
        toast.promise(response,{
            loading:'Creating Order..',
            error:'can not Create Order',
            success:'Order Created Successfully'
        });
        const apiResponse=await response;
        return apiResponse;

    } catch (error) {
        console.log(error);
        toast.error('something went wrong..');
        
    }
})


const OrderSlice=createSlice({
    name:'orders',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(placeOrder.fulfilled,(state,action)=>{
            state.ordersData=action?.payload?.data;
        })
    }
})

export default OrderSlice.reducer;