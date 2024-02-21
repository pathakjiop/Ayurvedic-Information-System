// import React from 'react';

// function NestedList({ data }) {
//     const renderNestedList = (obj) => {
//       return (
//         <ul>
//           {Object.entries(obj).map(([key, value]) => (
//             <li key={key}>
//               {key}: {typeof value === 'object' ? renderNestedList(value) : value}
//             </li>
//           ))}
//         </ul>
//       );
//     };
  
//     return <div>{renderNestedList(data)}</div>;
//   }

// export default NestedList;


import React from 'react';

function NestedList({ data }) {
  const renderNestedList = (obj, isNestedArray = false) => {
    return (
      
    <div>
      <ul>
        {Object.entries(obj).map(([key, value], index) => {
          // Check if the parent object is an array to adjust the display index
          const displayKey = isNestedArray ? `Item ${index + 1}` : key;
          return (
            <li key={isNestedArray ? index : key}>
              {displayKey}: {
                typeof value === 'object' ? renderNestedList(value, Array.isArray(value)) : value
              }
            </li>
          );
        })}
      </ul>
      </div>
    );
  };

  return <div>{renderNestedList(data)}</div>;
}

export default NestedList;