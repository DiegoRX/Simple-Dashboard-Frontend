import React from 'react';
import './Title.scss';

const Title = ({ title, children }) => {
  return (
    <div className='TitleContainer'>
      <div className='LeftBox'>
        {title}
      </div>
      <div className='RightBox'>
        {children}
      </div>
    </div>
  );
};

export default Title;
