import {createSlice} from "@reduxjs/toolkit"
import categories_data from "../../data/categories.json"
import products_data from "../../data/products.json"



export const shopSlice = createSlice({
    name: "Shop",
    initialState:{
        categorySelected: "",
        productIdSelected: null,
        products: products_data,
        productsFilteredByCategory: [],
        categories: categories_data,
    },
    reducers: {
        setCategorySelected: (state,action)=>{
            state.value.categorySelected = action.payload
            state.productsFilteredByCategory = products_data.filter(product => product.category === state.categorySelected)
        },
        setProductIdSelected : (state,action)=>{
            state.value.productIdSelected = action.payload
        },
    }
})

export const {setCategorySelected, setProductIdSelected} = shopSlice.actions

export default shopSlice.reducer