import React from 'react';
import styles from './RemedyDetails.module.css'
import NestedList from './NestedList';

const RemedyDetails = ({ remedyData }) => {

    function convertKeysToLowerCase(obj) {
        if (typeof obj !== "object" || obj === null) {
          return obj; // Return unchanged if not an object
        }
      
        // If obj is an array, map over its elements and recursively convert keys to lowercase
        if (Array.isArray(obj)) {
          return obj.map(item => convertKeysToLowerCase(item));
        }
      
        // Create a new object to store the converted keys
        const newObj = {};
        for (let key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // Recursively convert nested objects
            newObj[key.toLowerCase()] = convertKeysToLowerCase(obj[key]);
          }
        }
        return newObj;
      }

      remedyData = convertKeysToLowerCase(remedyData);

      return (
        <div className={styles.remedyDetails}>
            {console.log(remedyData)}
          <NestedList data={remedyData} />
        </div>
      );
};

export default RemedyDetails;
