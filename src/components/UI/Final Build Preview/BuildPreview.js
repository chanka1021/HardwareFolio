import React from "react";
import ReactPlaceholder from "react-placeholder";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartSlice";
import useGetProducts from "../../../Hooks/GetProducts";



function BuildPreview({ Build }) {
  
  const dispatch = useDispatch();
  const products = useGetProducts();

  const getBuildItemTitle = (itemId) => {
    const item = products.find((product) => product.id === itemId);
    return item ? item.title : "";
  };

  const getBuildImg = (itemId) => {
    const img = products.find((product) => product.id === itemId);
    return img ? img.imageUrls[0] : "";
  };



  const CartCollect = (itemId) => {
    const item = products.find((product) => product.id === itemId);
    if (item) {
      dispatch(
        cartActions.addItem({
          id: item.id,
          title: item.title,
          image01: item.image01,
          price: item.price,
        })
      );
    }
  };
  const AddtoCart = () => {
    const parts = ["case", "cpu", "gpu", "ram", "mobo", "psu", "storage"];
    parts.forEach((part) => CartCollect(Build[part]));
    };

  return (
    <div className="BuildPreview_Container">
      <div className="title"><h6>Your Build</h6></div>
      <ReactPlaceholder
        style={{ width: 0, height: 0 }}
        ready={getBuildImg(Build.case)}
      >
        <img src={getBuildImg(Build.case)} alt="" />
      </ReactPlaceholder>
      <p className="mt-2">{getBuildItemTitle(Build.case)?.title}</p>
      <p>{getBuildItemTitle(Build.cpu)}</p>
      <p>{getBuildItemTitle(Build.gpu)}</p>
      <p>{getBuildItemTitle(Build.mobo)}</p>
      <p>{getBuildItemTitle(Build.ram)}</p>
      <p>{getBuildItemTitle(Build.storage)}</p>
      <p>{getBuildItemTitle(Build.psu)}</p>
      <div className="buy_area">
        <h6>
          Total: <a className="price">{Build.total_price} $</a>
        </h6>
        <div className="Buy_btn" onClick={()=> AddtoCart()}>Add to cart</div>
      </div>
    </div>
  );
}

export default BuildPreview;
