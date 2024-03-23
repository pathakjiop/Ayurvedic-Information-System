// HerbDetails.js
import React from "react";
import styles from "./HerbDetails.module.css";

const HerbDetails = ({ herbData }) => {
  const renderSubComponent = (subComponent) => {
    return (
      <>
        {Array.isArray(subComponent) ? (
          subComponent.map((subPoint, index) => <li key={index}>{subPoint}</li>)
        ) : (
          <li>{subComponent}</li>
        )}
      </>
    );
  };
  return (
    <div className={styles.herbDetails}>
      <h2>Herb Name: {herbData["Herb Name"]}</h2>
      <h3>Benefits:</h3>
      <ul>{renderSubComponent(herbData.Benefits)}</ul>
      <h3>Properties:</h3>
      <ul>{renderSubComponent(herbData.Properties)}</ul>
      <h3>Precautions:</h3>
      <ul>{renderSubComponent(herbData.Precautions)}</ul>
    </div>
  );
};

export default HerbDetails;
