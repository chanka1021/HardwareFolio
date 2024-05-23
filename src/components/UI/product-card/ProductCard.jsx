import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import "../../../styles/product-card.css";

const ProductCard = (props) => {
  const { id, title, imageUrls, price } = props.item;
  const image = imageUrls[0]
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image,
        price,
      })
    );
  };
  return (
    <div className="product__item">
      <div className="product__img">
        <img src={image} alt="product-img" className="product__img--main" />
      </div>
      <div className="product__content">
        <h5 className="product__title">
          <Link to={`/items/${id}`}>{title}</Link>
        </h5>
        <div className="product__details">
          <span className="product__price">${price}</span>
          <button className="product__btn--add" onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
