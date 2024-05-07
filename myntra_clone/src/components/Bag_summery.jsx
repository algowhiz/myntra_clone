import { useSelector } from "react-redux";

const Bag_summery = ({}) => {
  const GST = 99;
  const bag_item = useSelector(state => state.bag);
  const item_id = useSelector(state => state.items);

   const final_it = item_id.filter((it) => {
    const it_idx = bag_item.indexOf(it.id);
    return it_idx >=0;
   })

   console.log(final_it);

    let totalItem=bag_item.length;
    let totalMRP=0;
    let totalDiscount=0;

    //cal final price

    final_it.forEach(it =>{
      totalMRP += it.original_price;
      totalDiscount += it.original_price - it.current_price;
    });


    let finalPayment=totalMRP - totalDiscount + GST;


    return (
        <>
        <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr/>
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
        </>
    )
}


export default Bag_summery;