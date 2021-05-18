import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';
import RequestService from '../../../config';
import TablePayments from './Table/TablePayments';
import Search from '../../UsableComponents/Search/Search';
import ModalButton from '../../UsableComponents/Buttons/ModalButton';
import NewPayment from './NewPayment';
import Modal from '../../UsableComponents/Modal/Modal';

const Payments = () => {

  const [payment, setPayments] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const viewModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  const getPayments = async () => {
    const { data } = await RequestService.get('/payment');
    const { payments } = data;
    setPayments(payments);
    setData(payment);
  };

  const handleSearch = (keyWord) => {
    const results = data.filter((item) => item.name === keyWord);
    setPermissions(results);
  };

  useEffect(() => {
    getPayments();
  }, [isOpen, isOpenNew, isActive]);

  const handleActive = (data) => {
    const results = data;
    setIsActive(results);
  };

  return (
    <>
      <Title title='FORMAS DE PAGO'>
        <ModalButton onClick={() => viewModalNew()} />
      </Title>
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TablePayments
          payment={payment}
          isOpen={isOpen}
          activation={handleActive}
          viewModal={() => viewModal()}
        />
      </InfoContainer>
      {isOpenNew && (
        <Modal className='ModalContainer'>
          <NewPayment onClick={() => viewModalNew()} />
        </Modal>
      )}
    </>
  );
};

export default Payments;
