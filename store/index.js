import { configureStore } from "@reduxjs/toolkit"
// Reducers Locales
import shopReducer from "../features/shop/shopSlice"
import cartReducer from "../features/cart/cartSlice"
import authReducer from "../features/auth/authSlice"
// Reducers Asincronos
import {setUpListeners} from "@reduxjs/toolkit/query"
import { shopApi } from "../services/shopService"
import { authApi } from "../services/authService"


const store = configureStore({
    reducer: {
        shopReducer,
        cartReducer,
        authReducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(shopApi.middleware).concat(authApi.middleware)
})

setUpListeners(store.dispatch)

export default store