import { createSlice } from "@reduxjs/toolkit"

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        user: "User logged",
        update: Date.now().toLocaleString(),
        total: 0,
        items: []
    },
    reducers:{
        addItem: (state,action) =>{
            const productRepeated = state.items.find(
                (item) => item.id === action.payload.id
            )
            if (productRepeated){
                const itemsUpdated = state.items.map(item => {
                    if(item.id === action.payload.id){
                        item.quantity += action.payload.quantity
                        return item
                    }
                    return item
                })
                const total = itemsUpdated.reduce(
                    (accumulator, currentItem) => (accumulator += currentItem.price * currentItem.quantity),0
                )
                state.total = total
                state = {
                    ...state,
                    items: itemsUpdated,
                    total,
                    updatedAt: Date.now().toLocaleString(),
                }
            } else {
                state.items.push(action,payload)
                const total = state.items.reduce(
                    (accumulator, currentItem) => (accumulator +=currentItem.price * currentItem.quantity),0
                )
                state.total = total
                state = {
                    ...state,
                    total,
                    updatedAt: Date.now().toLocaleString(),
                }
            }

        },
        removeItem: (state,action) =>{
            
        }
    }
})

export const {addItem, removeItem} = cartSlice.actions

export default cartSlice.reducer