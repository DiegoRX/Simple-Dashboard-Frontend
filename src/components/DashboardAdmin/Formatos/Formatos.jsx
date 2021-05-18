import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';
import TableUnit from '../../UsableComponents/Table/TableUnit';
import NewFormato from './NewFormato';
import ModalButton from '../../UsableComponents/Buttons/ModalButton';
import Modal from '../../UsableComponents/Modal/Modal';
import Search from '../../UsableComponents/Search/Search';
import RequestService from '../../../config';

const Formatos = () => {

  const [unit, setUnits] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const _openModal = () => setIsOpen(true);
  const _closeModal = () => setIsOpen(false);

  const getUnits = async () => {
    const { data } = await RequestService.get('/unit');
    const { units } = data;
    console.log(data);
    setUnits(units);
    setData(units);
  };

  useEffect(() => {
    getUnits();
  }, []);

  const handleSearch = (keyWord) => {
    const results = data.filter((item) => item.description === keyWord);
    setUsers(results);
  };

  return (
    <>
      <Title title='FORMATOS DE IMPRESIÓN'>
        <ModalButton onClick={_openModal} />
      </Title>
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TableUnit
          unit={unit}
        />
      </InfoContainer>
      {isOpen && (
        <Modal className='ModalContainer'>
          <NewFormato onClick={_closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Formatos;
