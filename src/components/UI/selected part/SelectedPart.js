import React from "react";
import { HiCpuChip } from "react-icons/hi2";
import { SiPcgamingwiki } from "react-icons/si";
import {
  BsMotherboard,
  BsGpuCard,
  BsMemory,
  BsDeviceSsd,
  BsFillPlugFill,
} from "react-icons/bs";
import useGetProducts from "../../../Hooks/GetProducts";

function SelectedPart({
  part,
  finalBuild,
  updateFinalBuild,
  UpdateFinalBuildTotal_price,
}) {
  const closeClick = (selectedPart) => {
    updateFinalBuild(selectedPart[0]?.category || '', 0);
    UpdateFinalBuildTotal_price(selectedPart[0]?.price || 0, false);
  };

  const products = useGetProducts();
  const selected_part = products.filter((item) => item.id === part);

  const partIcon = (part) => {
    const partname = part.trim();
    switch (partname) {
      case "case":
        return <SiPcgamingwiki className="text-2xl" />;
      case "cpu":
        return <HiCpuChip className="text-2xl" />;
      case "gpu":
        return <BsGpuCard className="text-2xl" />;
      case "mobo":
        return <BsMotherboard className="text-2xl" />;
      case "ram":
        return <BsMemory className="text-2xl" />;
      case "storage":
        return <BsDeviceSsd className="text-2xl" />;
      case "psu":
        return <BsFillPlugFill className="text-2xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center text-center w-full p-2 border-b border-gray-300">
      {selected_part[0] && (
        <>
          <div className="flex items-center justify-center bg-blue-500 text-black p-2 w-14 h-14">
            {partIcon(selected_part[0].category)}
          </div>
          <img
            src={selected_part[0].imageUrls[0]}
            alt="product"
            className="h-14 w-14 rounded object-cover mx-2"
          />
          <div className="flex-1 text-left">
            <h6 className="text-lg font-semibold">{selected_part[0].title}</h6>
          </div>
          <p className="text-green-800 text-lg font-semibold ml-4">
            {selected_part[0].price} $
          </p>
          <button
            className="pl-4 text-2xl  font-bold text-red-600 hover:text-red-800 transition ease-out duration-150"
            onClick={() => closeClick(selected_part)}
          >
            x
          </button>
        </>
      )}
    </div>
  );
}

export default SelectedPart;
