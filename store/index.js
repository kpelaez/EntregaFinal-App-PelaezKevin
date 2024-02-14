import { configureStore } from "@reduxjs/toolkit"
// Reducers Locales
import shopReducer from "../features/shop/shopSlice"
import cartReducer from "../features/cart/cartSlice"
// Reducers Asincronos
import {setUpListeners} from "@reduxjs/toolkit/query"
import { shopApi } from "../services/shopService"


const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        [shopApi.reducerPath]: shopApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware)
})

setUpListeners(store.dispatch)

export default store