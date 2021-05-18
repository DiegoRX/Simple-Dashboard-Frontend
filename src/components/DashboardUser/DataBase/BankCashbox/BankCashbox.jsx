import React, { useState, useEffect } from 'react';
import ModalButton from '../../../UsableComponents/Buttons/ModalButton';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';

const BankCashbox = () => {

  const [isOpenNew, setIsOpenNew] = useState(false);

  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  return (
    <>
      <Title title='BANCOS Y CAJAS'>
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

export default BankCashbox;
