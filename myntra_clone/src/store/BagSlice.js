import { createSlice } from "@reduxjs/toolkit"


const Bagslice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        add_item_to_bag: (store, action) => {
            // console.log(store,action);
            store.push(action.payload);
        },
        rem_from_bag :(store,action) =>{
            return store.filter((it_id) => it_id != action.payload);
        }
    }
});

export const BagAction = Bagslice.actions;

export default Bagslice;

