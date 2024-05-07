import Bag_summery from "../components/Bag_summery";
import Bag_item from "../components/Bag_item";
import { useSelector } from "react-redux";
import store from "../store";

const Bag = () => {

   const bag_item = useSelector(state => state.bag);
   const item_id = useSelector(state => state.items);

   const final_it = item_id.filter((it) => {
    const it_idx = bag_item.indexOf(it.id);
    return it_idx >=0;
   })

    return (
        <>
            <main>
                <div className="bag-page">
                    <div className="bag-items-container">
                        {final_it.map((item) => <Bag_item item={item}/>)}
                        {/* <Bag_item item={item}/> */}
                    </div>
                    <div className="bag-summary">
                        <Bag_summery/>
                    </div>

                </div>
            </main>
        </>
    );
}
export default Bag;