import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {  removeToCart } from "../redux/action";
import { useDispatch } from "react-redux";
const Cart = () => {
  const cartData = useSelector((state) => state.cartData);
  const amount =
    cartData.length &&
    cartData.map((item) => item.price).reduce((prev, next) => prev + 1);
  const dispatch = useDispatch();
  return (
    <div>
      <h>cart</h>
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
      <div className="cart-page-container">
        <table className="table">
          <tr>
          <td className="table-hader">Item</td>
            <td className="table-hader">Name</td>
            <td className="table-hader">Color</td>
            <td className="table-hader">Price</td>
            <td className="table-hader">Brand</td>
            <td className="table-hader">category</td>
            <td className="table-hader">Action</td>
          </tr>
          {cartData.map((item) => (
            <tr key={item.key}>
              <td><img className="imgCart" src={item.photo} alt="abc" /></td>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{item.price}</td>
              <td>{item.brand}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn-rem-cart"
                  onClick={() => dispatch(removeToCart(item.id))}
                >
                  Remove X
                </button>
              </td>
            </tr>
          ))}
        </table>
        <div className="price-details">
          <div className="adjust-price">
            {" "}
            <span>Amount</span>
            <span>{amount}</span>
          </div>
          <div className="adjust-price">
            {" "}
            <span>Discount 10%</span>
            <span style={{ color: "green" }}>{amount / 10} </span>
          </div>
          <div className="adjust-price">
            {" "}
            <span>Tax</span>
            <span>00.0</span>
          </div>
          <div className="adjust-price">
            {" "}
            <span>total</span>
            <span>{amount - amount / 10}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
