import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";

const ProductCard = (props) => {
  const { id, title, imageUrls, price } = props.item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01: imageUrls[0],
        price,
      })
    );
  };

  return (
    <div className="border border-blue-100 text-center p-4 rounded-lg transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-1 hover:shadow-lg w-full max-w-xs mx-auto box-border h-full flex flex-col">
      <div className="mb-4 overflow-hidden rounded-lg h-48 flex items-center justify-center transition-transform duration-400 ease-in-out">
        <img src={imageUrls[0]} alt="product-img" className="max-w-full max-h-full object-cover" />
      </div>
      <div className="flex-grow text-left">
        <h5 className="mb-4 text-lg font-semibold">
          <Link to={`/items/${id}`} className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
            {title}
          </Link>
        </h5>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-bold text-xl text-blue-600">${price}</span>
          <button
            className="py-2 px-4 bg-blue-600 text-white rounded transition-colors duration-300 hover:bg-blue-700"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
