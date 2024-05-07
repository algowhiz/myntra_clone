import { useDispatch, useSelector } from "react-redux";
import store from "../store";
import { useEffect } from "react";
import { itemAction } from "../store/item_store";
import { fetchAction } from "../store/loadStatus";

const Fetchitem = () =>{
    const fetchstatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch();


    useEffect(() =>{
        if(fetchstatus.fetchDone) return;

        const cnt = new AbortController();
        const signal = cnt.signal;
        // dispatch(fetchAction.markfetchDone)
        fetch("http://localhost:8080/items",{signal})
        .then((res) => res.json())
        .then(({items}) => {
            // dispatch(fetchAction.markfetchDone())
            // console.log(items);
            dispatch(fetchAction.markfetchinged())
            dispatch(itemAction.additems(items[0]));
        });

        return () =>{
            console.log("clean");
            cnt.abort();
        };
    },[fetchstatus])
     

    return <></>
}

export default Fetchitem;