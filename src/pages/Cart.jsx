import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../store/shopping-cart/cartSlice";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const deleteItem = (id) => {
    dispatch(cartActions.deleteItem(id));
  };

  const isCartEmpty = cartItems.length === 0;

  return (
    <Helmet title="Cart">
      <CommonSection title="Your Cart" />
      <section className="py-8">
        <div className="container mx-auto">
          {isCartEmpty ? (
            <h5 className="text-center">Your cart is empty</h5>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2">Product Title</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <Tr key={item.id} item={item} deleteItem={deleteItem} />
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {!isCartEmpty && (
            <div className="mt-4">
              <h6 className="mb-2">
                Subtotal: $<span className="text-blue-600">{totalAmount}</span>
              </h6>
              <p>Taxes and shipping will calculate at checkout</p>
              <div className="flex mt-4">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md me-4">
                  <Link to="/pcparts">Continue Shopping</Link>
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
                  <Link to="/checkout">Proceed to checkout</Link>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </Helmet>
  );
};

const Tr = ({ item, deleteItem }) => {
  const { id, title, price, quantity } = item;

  return (
    <tr className="border-b border-gray-200">
   
      <td className="px-4 py-2">{title}</td>
      <td className="px-4 py-2">${price}</td>
      <td className="px-4 py-2">{quantity}px</td>
      <td className="px-4 py-2">
        <button onClick={() => deleteItem(id)}>
          <i className="ri-delete-bin-line text-red-500 cursor-pointer"></i>
        </button>
      </td>
    </tr>
  );
};

export default Cart;
