import React from 'react';

const DropDown = ({ classN, value1, value2, value3, value4 }) => {
  return (
    <select className={classN}>
      <option>{value1}</option>
      <option>{value2}</option>
      <option>{value3}</option>
      <option>{value4}</option>
    </select>
  );
};

export default DropDown;
