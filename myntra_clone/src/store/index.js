import {configureStore} from "@reduxjs/toolkit"
import itemslice from "./item_store";
import FetchstatusSlice from "./loadStatus";
import Bagslice from "./BagSlice";

const store = configureStore({
    reducer:{
        items: itemslice.reducer,
        fetchStatus:FetchstatusSlice.reducer,
        bag:Bagslice.reducer,
    }
})

export default store;