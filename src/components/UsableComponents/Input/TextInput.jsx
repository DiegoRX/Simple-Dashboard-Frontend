import React from 'react';

const TexInput = ({ name, classN, type, placeholder }) => {
  return (
    <input
      name={name}
      className={classN}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default TexInput;
