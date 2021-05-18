import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';
import TableUnits from './Table/TableUnits';
import Search from '../../UsableComponents/Search/Search';
import ModalButton from '../../UsableComponents/Buttons/ModalButton';
import NewUnits from './NewUnits';
import Modal from '../../UsableComponents/Modal/Modal';
import RequestService from '../../../config';

const Units = () => {

  const [unit, setUnits] = useState([]);
  const [dataUnit, setDataUnits] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isActive, setIsActive] = useState([{ isActive: '' }]);

  const viewModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  const getUnits = async () => {
    const { data } = await RequestService.get('/unit');
    const { units } = data;
    setUnits(units);
    setDataUnits(unit);
  };

  useEffect(() => {
    getUnits();
  }, [isOpen, isOpenNew, isActive]);

  const handleSearch = (keyWord) => {
    const results = dataUnit.filter((item) => item.description === keyWord);
    setUnits(results);
  };

  const handleActive = (data) => {
    const results = data;
    setIsActive(results);
  };

  return (
    <>
      <Title title='UNIDADES'>
        <ModalButton onClick={() => viewModalNew()} />
      </Title>
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TableUnits
          unit={unit}
          isOpen={isOpen}
          activation={handleActive}
          viewModal={() => viewModal()}
        />
      </InfoContainer>
      {isOpenNew && (
        <Modal className='ModalContainer'>
          <NewUnits onClick={() => viewModalNew()} />
        </Modal>
      )}
    </>
  );
};

export default Units;
