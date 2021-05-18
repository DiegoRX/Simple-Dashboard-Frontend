import React from 'react';
import Title from '../../UsableComponents/Title/Title';
import HomeBox from './HomeBox';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';

const HomeUser = () => {
  return (
    <>
      <Title title='Inicio' />
      <InfoContainer>
        <HomeBox />
      </InfoContainer>
    </>
  );
};

export default HomeUser;
