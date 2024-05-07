import { createSlice } from "@reduxjs/toolkit"


const itemslice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        additems: (store, action) => {
            // console.log(store,action);
            return action.payload;
        }
    }
});

export const itemAction = itemslice.actions;

export default itemslice;

