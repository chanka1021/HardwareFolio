import React from "react";
import products from "../../../assets/fake-data/products";
import { HiCpuChip } from "react-icons/hi2";
import { SiPcgamingwiki } from "react-icons/si";
import { BsMotherboard, BsGpuCard, BsMemory, BsDeviceSsd, BsFillPlugFill } from "react-icons/bs";

function SelectedPart({ part, finalBuild, updateFinalBuild, UpdateFinalBuildTotal_price }) {
  const closeClick = (selectedPart) => {
    updateFinalBuild(selectedPart[0].category, 0);
    UpdateFinalBuildTotal_price(selectedPart[0].price, false);
  };

  const selected_part = products.filter((item) => item.id === part);

  const partIcon = (part) => {
    const partname = part.trim();
    switch (partname) {
      case 'case':
        return <SiPcgamingwiki />;
      case 'cpu':
        return <HiCpuChip />;
      case 'gpu':
        return <BsGpuCard />;
      case 'mobo':
        return <BsDeviceSsd />;
      case 'ram':
        return <BsMemory />;
      case 'storage':
        return <BsMotherboard />;
      case 'psu':
        return <BsFillPlugFill />;
      default:
        return null;
    }
  };

  return (
    <div className="selected_part">
      <div className="sp_category">{partIcon(selected_part[0].category)}</div>
      <img src={selected_part[0].image01} alt="product" />
      <h6 className="sp_name">{selected_part[0].title}</h6>
      <p className="sp_price">{selected_part[0].price} $</p>
      <p className="close_btn" onClick={() => closeClick(selected_part)}>x</p>
    </div>
  );
}

export default SelectedPart;
