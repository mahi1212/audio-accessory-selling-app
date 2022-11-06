import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { PRODUCT_IMAGE_MAP } from "../data/productImageMap"

const initialState = {
    products: [],
    status: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch("http://localhost:5000/products")
    console.log(response.json)
    return response.json() 

})
// fetchProducts retunrs three state : pending, fullfilled and rejected

export const productSlice = createSlice({
    name: 'products',
    initialState : initialState,
    reducers: {},
    extraReducers: {
        // what if pending
        [fetchProducts.pending]: (state, action) => {
            state.status = 'loading'
        },
        // what if success
        [fetchProducts.fulfilled]: (state, action) => {
            const {payload} = action
            state.status ='success'
            payload.products.forEach(product => {
                product.featuredImage = PRODUCT_IMAGE_MAP[product.name].featuredImage
                product.images = PRODUCT_IMAGE_MAP[product.name].images
            })
            state.products = payload.products;
            console.log('API Response ', payload)
        },
        // what if failed
        [fetchProducts.rejected] : (state, action) => {
            state.status = "Failed"
        }
    }
})

export const selectStatus = (state) => state.products.status
export default productSlice.reducer