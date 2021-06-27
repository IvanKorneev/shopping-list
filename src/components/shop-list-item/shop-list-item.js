import React from "react";
import "./shop-list-item.sass"

const ShopListItem = ({item, deleteItem,id}) => {
    const {product, category, price} = item.items
    console.log(id)
    return (
        <div className="shop-list-item">
            <div className="item">
                {product}
            </div>
            <div className="item">
                {category}
            </div>
            <div className="item">
                {price}
            </div>
            <div>
                <button onClick={() => deleteItem(id)}>Delete</button>
            </div>
        </div>
    );
};
export default ShopListItem;