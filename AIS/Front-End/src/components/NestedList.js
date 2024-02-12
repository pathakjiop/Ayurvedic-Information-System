import React from 'react';

function NestedList({ data }) {
    const renderNestedList = (obj) => {
      return (
        <ul>
          {Object.entries(obj).map(([key, value]) => (
            <li key={key}>
              {key}: {typeof value === 'object' ? renderNestedList(value) : value}
            </li>
          ))}
        </ul>
      );
    };
  
    return <div>{renderNestedList(data)}</div>;
  }

export default NestedList;
