import React, { useState, useEffect } from 'react';
import ModalButton from '../../../UsableComponents/Buttons/ModalButton';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';

const Categories = () => {

  const [isOpenNew, setIsOpenNew] = useState(false);

  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  return (
    <>
      <Title title='CATEGORÍAS'>
        <ModalButton
          onClick={() => viewModalNew()}
        />
      </Title>
      <InfoContainer>
        <div />
      </InfoContainer>
    </>
  );
};

export default Categories;
