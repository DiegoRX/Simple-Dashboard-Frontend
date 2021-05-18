import React, { useState } from 'react';

const Switch = ({ className, initialState, id, onChange }) => {
  // const [checked, setChecked] = useState(initialState);

  // const onClick = (checked) => {
  //   setChecked(checked);
  //   onChange(id, checked);
  // };
  return (
    <>
      <label className={className}>
        <input
          type='checkbox'
          onChange={() => onChange()}
          checked={initialState}
          className='inputCheck'
        />
        <span className='slider round' />
      </label>
    </>

  );
};

export default Switch;

