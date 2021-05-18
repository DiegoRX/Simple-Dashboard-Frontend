import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';
import RequestService from '../../../config';
import Search from '../../UsableComponents/Search/Search';
import ModalButton from '../../UsableComponents/Buttons/ModalButton';
import NewPaymentMethod from './NewPaymentMethod';
import Modal from '../../UsableComponents/Modal/Modal';
import TableMethods from './Table/TableMethods';

const PaymentMethods = () => {

  const [paymentMethod, setPaymentMethods] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isActive, setIsActive] = useState([{ isActive: '' }]);

  const viewModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  const getPaymentMethods = async () => {
    const { data } = await RequestService.get('/payment-methods/');
    const { paymentMethods } = data;
    setPaymentMethods(paymentMethods);
    setData(paymentMethod);
  };

  const handleSearch = (keyWord) => {
    const results = data.filter((item) => item.name === keyWord);
    setPaymentMethods(results);
  };

  useEffect(() => {
    getPaymentMethods();
  }, [isOpen, isOpenNew, isActive]);

  const handleActive = (data) => {
    const results = data;
    setIsActive(results);
  };

  return (
    <>
      <Title title='MEDIO DE PAGO'>
        <ModalButton onClick={() => viewModalNew()} />
      </Title>
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TableMethods
          paymentMethod={paymentMethod}
          isOpen={isOpen}
          activation={handleActive}
          viewModal={() => viewModal()}
        />
      </InfoContainer>
      {isOpenNew && (
        <Modal className='ModalContainer'>
          <NewPaymentMethod onClick={() => viewModalNew()} />
        </Modal>
      )}
    </>
  );
};

export default PaymentMethods;
