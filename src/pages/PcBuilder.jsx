import React, { useState } from "react";
import "../styles/pcbuilder.css";
import PartsSelector from "../components/UI/parts-selector/PartsSelector";
import SelectedPart from "../components/UI/selected part/SelectedPart";
import BuildPreview from "../components/UI/Final Build Preview/BuildPreview";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { IconName } from "react-icons/hi2";

function PcBuilder() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPart, setSelectedPart] = useState("");
  const [finalBuild, setFinalBuild] = useState({
    case: 0,
    cpu: 0,
    gpu: 0,
    mobo: 0,
    ram: 0,
    storage: 0,
    psu: 0,
    total_price : 0,
  });

  const updateFinalBuild = (part, value) => {
    setFinalBuild((prevBuild) => ({
      ...prevBuild,
      [part]: value,
    }));
  };

  function updateFinalBuildTotal_price(value, add) {
    const newTotalPrice = add ? finalBuild.total_price + value : finalBuild.total_price - value;
    setFinalBuild((prevBuild) => ({
      ...prevBuild,
      total_price: newTotalPrice,
    }));
  }



  const handlePartSelection = (part) => {
    setOpenModal(true);
    setSelectedPart(part);
  };

  const renderPart = (part, label) => {
    if (finalBuild[part] !== 0) {
      return <SelectedPart part={finalBuild[part]} finalBuild={finalBuild} updateFinalBuild={updateFinalBuild} UpdateFinalBuildTotal_price={updateFinalBuildTotal_price}/>;
    } else {
      return (
        <div onClick={() => handlePartSelection(part)}>
          + {label}
        </div>
      );
    }
  };

  return (
    <Helmet title="Pc Builder 💻">
      <CommonSection title="Pc Builder" />

    <div className="pcbuilder_container">
      <div className="builder">
        {openModal ? (
          <PartsSelector
            closemodal={() => setOpenModal(false)}
            part={selectedPart}
            finalBuild={finalBuild}
            updateFinalBuild={updateFinalBuild}
            UpdateFinalBuildTotal_price={updateFinalBuildTotal_price}
          />
        ) : (
          <div className="parts ">
            <div className="part">
              {renderPart("case", "Choose a case")}
            </div>
            <div className="part">
              {renderPart("cpu", "Choose a CPU")}
            </div>
            <div className="part">
              {renderPart("gpu", "Choose a GPU")}
            </div>
            <div className="part">
              {renderPart("mobo", "Choose a motherboard")}
            </div>
            <div className="part">
              {renderPart("ram", "Choose a RAM")}
            </div>
            <div className="part">
              {renderPart("storage", "Choose a storage")}
            </div>
            <div className="part">
              {renderPart("psu", "Choose a PSU")}
            </div>
          </div>
        )}

        <div className="final_build">
          <BuildPreview Build={finalBuild}/>
        </div>
      </div>
    </div>
    </Helmet>

  );
}

export default PcBuilder;
