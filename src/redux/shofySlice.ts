import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    favorite: [],
    userInfo: null,
}

export const shofySlice = createSlice({
    name: "shofy",
    initialState,
    reducers: {
        addToCart: (state,action) => {
            state.cart = action.payload; 
        }
    }
})

export const { addToCart } = shofySlice.actions
export default shofySlice.reducer
