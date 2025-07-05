import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState={
    cartsData:''
}

export const addProductToCart=createAsyncThunk('/carts/addproduct',async (id)=>{
    try {
        const response=axiosInstance.post(`/carts/add/${id}`);
        toast.promise(response,{
            loading:'Adding product to the cart..',
            error:'can not add product to the cart',
            success:'Successfully added the product to the cart'
        });
        const apiResponse=await response;
        return apiResponse;

    } catch (error) {
        console.log(error);
        toast.error('something went wrong..');
        
    }
})

export const removeProductFromCart=createAsyncThunk('/carts/removeproduct',async (id)=>{
    try {
        const response=axiosInstance.post(`/carts/delete/${id}`);
        toast.promise(response,{
            loading:'removing product from the cart..',
            error:'can not remove product from the cart',
            success:'Successfully removed the product from the cart'
        });
        const apiResponse=await response;
        return apiResponse;

    } catch (error) {
        console.log(error);
        toast.error('something went wrong..');
        
    }
})

export const getCartDetails=createAsyncThunk('/carts/getcartdetails',async ()=>{
    try {
        const response=axiosInstance.get(`/carts`);
        toast.promise(response,{
            loading:'fetching cart details..',
            error:'can not fetch cart details',
            success:'Successfully fetched the cart details'
        });
        const apiResponse=await response;
        return apiResponse;
    } catch (error) {
        console.log(error);
        if(error?.response?.status===401){
            toast.error('please login to view cart');
            return{
                isUnAuthorised:true
            }
        }else{
        toast.error('something went wrong..');
        }
    }
})


const cartSlice=createSlice({
    name:'carts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getCartDetails.fulfilled,(state,action)=>{
            state.cartsData=action?.payload?.data?.data;
        })
    }
})

export default cartSlice.reducer;