// HerbDetails.js
import React from 'react';
import styles from './HerbDetails.module.css'

const HerbDetails = ({ herbData }) => {
  return (
    <div className={styles.herbDetails}>
      <h2>Herb Name: {herbData['Herb Name']}</h2>
      <h3>Benefits:</h3>
     <ul>
        {herbData.Benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
      <h3>Properties:</h3>
      <ul>
        {herbData.Properties.map((property, index) => (
          <li key={index}>{property}</li>
        ))}
      </ul>
      <h3>Precautions:</h3>
      <ul>
        {herbData.Precautions.map((precaution, index) => (
          <li key={index}>{precaution}</li>
        ))}
      </ul>
    </div>
  );
};

export default HerbDetails;
