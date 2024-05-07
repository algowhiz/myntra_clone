import { createSlice } from "@reduxjs/toolkit"


const FetchstatusSlice = createSlice({
    name: 'fetch',
    initialState: {
        fetchDone:false,
        currfetch:false,
    },
    reducers: {
        markfetchDone: (state) => {
            return state.fetchDone=true;
        },
        markfetchingst: (state) => {
            return state.currfetch=true;
        },
        markfetchinged: (state) => {
            return state.currfetch=false;
        }
    }
});

export const fetchAction = FetchstatusSlice.actions;

export default FetchstatusSlice;

