import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';
import AutoContainer from '../../UsableComponents/Containers/AutoContainer';
import RequestService from '../../../config';
import TableTaxes from './Table/TableTaxes';
import Search from '../../UsableComponents/Search/Search';
import ModalButton from '../../UsableComponents/Buttons/ModalButton';
import NewTax from './NewTax';
import Modal from '../../UsableComponents/Modal/Modal';

const Taxes = () => {

  const [tax, setTaxes] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isActive, setIsActive] = useState([{ isActive: '' }]);

  const viewModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  const getTaxes = async () => {
    const { data } = await RequestService.get('/tax');
    const { taxes } = data;
    setTaxes(taxes);
    setData(tax);
  };

  const handleSearch = (keyWord) => {
    const results = data.filter((item) => item.name === keyWord);
    setPermissions(results);
  };

  useEffect(() => {
    getTaxes();
  }, [isOpen, isOpenNew, isActive]);

  const handleActive = (data) => {
    const results = data;
    setIsActive(results);
  };

  return (
    <>
      <Title title='IMPUESTOS'>
        <ModalButton onClick={() => viewModalNew()} />
      </Title>
      <AutoContainer>
        <Search onClick={handleSearch} />
        <InfoContainer>
          <TableTaxes
            tax={tax}
            isOpen={isOpen}
            activation={handleActive}
            viewModal={() => viewModal()}
          />
        </InfoContainer>
      </AutoContainer>
      {isOpenNew && (
        <Modal className='ModalContainer'>
          <NewTax onClick={() => viewModalNew()} />
        </Modal>
      )}
    </>
  );
};

export default Taxes;
