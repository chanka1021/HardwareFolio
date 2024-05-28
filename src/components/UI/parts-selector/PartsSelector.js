import React from "react";
import useGetProducts from "../../../Hooks/GetProducts";

function PartsSelector({ closemodal, part, updateFinalBuild,UpdateFinalBuildTotal_price }) {

function psClick (selectedPart) {
   updateFinalBuild(selectedPart.category, selectedPart.id) 
  UpdateFinalBuildTotal_price(selectedPart.price,true)
  closemodal(false)

}

  const products = useGetProducts();

  return (
    <div className="modal_container">
      <div className="ps_header">
        <h6>Choose a {part} :</h6>
        <h6 className="close_btn" onClick={() => closemodal(false)}>x</h6>
      </div>
      <div className="parts_list">
        <ul className="">
          {products
          .filter((item) => item.category=== part)
          .map((item) => (
            <li className="part_to_select">
              <img src={item.imageUrls[0]} alt="product" />
              <p className="part_title">{item.title}</p>
              <p className="part_price">{item.price} $</p>
              <div className="add_btn"  onClick={() => psClick(item)}>add</div>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default PartsSelector;
