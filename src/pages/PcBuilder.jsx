import React, { useState } from "react";
import "../styles/pcbuilder.css";
import PartsSelector from "../components/UI/parts-selector/PartsSelector";
import SelectedPart from "../components/UI/selected part/SelectedPart";
import BuildPreview from "../components/UI/Final Build Preview/BuildPreview";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

function PcBuilder() {
  // State for controlling the modal
  const [openModal, setOpenModal] = useState(false);
  // State for storing the selected part
  const [selectedPart, setSelectedPart] = useState("");
  // State for storing the final build and its total price
  const [finalBuild, setFinalBuild] = useState({
    case: 0,
    cpu: 0,
    gpu: 0,
    mobo: 0,
    ram: 0,
    storage: 0,
    psu: 0,
    total_price: 0,
  });

  // Function to update the final build based on the selected part
  const updateFinalBuild = (part, value) => {
    setFinalBuild((prevBuild) => ({
      ...prevBuild,
      [part]: value,
    }));
  };

  // Function to update the total price of the final build
  const updateFinalBuildTotal_price = (value, add) => {
    const newTotalPrice = add
      ? finalBuild.total_price + value
      : finalBuild.total_price - value;
    setFinalBuild((prevBuild) => ({
      ...prevBuild,
      total_price: newTotalPrice,
    }));
  };

  // Function to handle part selection
  const handlePartSelection = (part) => {
    setOpenModal(true);
    setSelectedPart(part);
  };

  // Function to render either the selected part or the selection prompt
  const renderPart = (part, label) => {
    if (finalBuild[part] !== 0) {
      return (
        <SelectedPart
          part={finalBuild[part]}
          finalBuild={finalBuild}
          updateFinalBuild={updateFinalBuild}
          UpdateFinalBuildTotal_price={updateFinalBuildTotal_price}
        />
      );
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
            // Render the parts selector modal if openModal is true
            <PartsSelector
              closemodal={() => setOpenModal(false)}
              part={selectedPart}
              finalBuild={finalBuild}
              updateFinalBuild={updateFinalBuild}
              UpdateFinalBuildTotal_price={updateFinalBuildTotal_price}
            />
          ) : (
            // Render the parts selection interface if openModal is false
            <div className="parts ">
              <div onClick={() => handlePartSelection("case")} className="part">{renderPart("case", "Choose a case")}</div>
              <div onClick={() => handlePartSelection("cpu")}  className="part">{renderPart("cpu", "Choose a CPU")}</div>
              <div onClick={() => handlePartSelection("gpu")} className="part">{renderPart("gpu", "Choose a GPU")}</div>
              <div onClick={() => handlePartSelection("mobo")} className="part">{renderPart("mobo", "Choose a motherboard")}</div>
              <div onClick={() => handlePartSelection("ram")} className="part">{renderPart("ram", "Choose a RAM")}</div>
              <div onClick={() => handlePartSelection("storage")} className="part">{renderPart("storage", "Choose a storage")}</div>
              <div onClick={() => handlePartSelection("psu")} className="part">{renderPart("psu", "Choose a PSU")}</div>
            </div>
          )}

          {/* Render the final build preview */}
          <div className="final_build">
            <BuildPreview Build={finalBuild} />
          </div>
        </div>
      </div>
    </Helmet>
  );
}

export default PcBuilder;
