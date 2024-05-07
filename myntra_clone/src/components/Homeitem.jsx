import { useDispatch, useSelector } from "react-redux";
import { BagAction } from "../store/BagSlice";
import { IoMdAdd } from "react-icons/io";
import { IoTrashBinOutline } from "react-icons/io5";
import store from "../store";

const Homeitem = ({ item }) => {
    const bag_id = useSelector(store => store.bag);

    const id_found = bag_id.indexOf(item.id) >= 0;

    const disptach = useDispatch();

    const handel_add = () => {
        disptach(BagAction.add_item_to_bag(item.id));
    }

    const handel_rev = () => {
        disptach(BagAction.rem_from_bag(item.id));
    }

    return (
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            {
                id_found && <button type="button" className="btn btn-add-bagbtn btn-danger" onClick={handel_rev}><IoTrashBinOutline />   Remove</button>
            }
            {
                !id_found && <button type="button" className="btn btn-add-bagbtn btn-success" onClick={handel_add}><IoMdAdd />   Add to Bag</button>
            }


        </div>
    );
}


export default Homeitem;