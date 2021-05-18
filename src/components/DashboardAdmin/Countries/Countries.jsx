import React, { useState } from 'react';
import ModalButton from '../../UsableComponents/Buttons/ModalButton';
import Modal from '../../UsableComponents/Modal/Modal';
import Title from '../../UsableComponents/Title/Title';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';
import TableCountries from './Table/TableCountries';
import Search from '../../UsableComponents/Search/Search';
import NewCountry from './NewCountry';

const Countries = () => {

  const [isOpen, setIsOpen] = useState(false);

  const _openModal = () => setIsOpen(true);
  const _closeModal = () => setIsOpen(false);

  const handleSearch = (keyWord) => {
    const results = data.filter((item) => item.description === keyWord);
    setUsers(results);
  };

  return (
    <>
      <Title title='PAISES'>
        <ModalButton onClick={_openModal} />
      </Title>
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TableCountries />
      </InfoContainer>
      {isOpen && (
        <Modal className='ModalContainer'>
          <NewCountry onClick={_closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Countries;
