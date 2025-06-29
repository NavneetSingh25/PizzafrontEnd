import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance"
import toast from "react-hot-toast";

const initialState={
    productData:[]
}

export const getAllProducts=createAsyncThunk('/products/getAll',async ()=>{
    try {
        const products=axiosInstance.get('/product');
        toast.promise(products,{
            loading:'loading the products..',
            error:'can not load the products',
            success:'Successfully loaded the products'
        });
        const apiResponse=await products;
        return apiResponse;

    } catch (error) {
        console.log(error);
        toast.error('something went wrong..');
        
    }
})

        export const createProduct = createAsyncThunk('/product/createProduct', async (data) => {
  try {
    const response = axiosInstance.post('/product', data);
    toast.promise(response, {
      loading: 'Creating product...',
      success: (res) => res?.data?.message || 'Product created!',
      error: 'Product creation failed'
    });
    const result = await response;
    return {
      success: result.data.success,
      message: result.data.message,
      data: result.data.data
    };
  } catch (error) {
    toast.error('Something went wrong while creating the product');
    throw error;
  }
});

export const getProductDetails=createAsyncThunk('/products/getdetails',async (id)=>{
    try {
        const products=axiosInstance.get(`/product/${id}`);
        toast.promise(products,{
            loading:'loading the product..',
            error:'can not load the product',
            success:'Successfully loaded the product'
        });
        const apiResponse=await products;
        return apiResponse;

    } catch (error) {
        console.log(error);
        toast.error('something went wrong..');
        
    }
})


const ProductSlice=createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            console.log(action.payload);
            state.productData=action?.payload?.data?.data;
        })
        .addCase(createProduct.fulfilled, (state, action) => {
        if (action.payload?.data) {
        state.productData.push(action.payload.data);
        }
    });
    }
})

export default ProductSlice.reducer;
