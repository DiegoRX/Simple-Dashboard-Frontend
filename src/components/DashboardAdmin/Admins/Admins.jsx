import React, { useState, useEffect } from 'react';
import ModalButton from '../../UsableComponents/Buttons/ModalButton';
import Title from '../../UsableComponents/Title/Title';
import Modal from '../../UsableComponents/Modal/Modal';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';
import TableAdmin from './Table/TableAdmin';
import Search from '../../UsableComponents/Search/Search';
import RequestService from '../../../config';
import NewAdmin from './NewAdmin';

const Administradores = () => {

  const [user, setUsers] = useState([]);
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenNew, setIsOpenNew] = useState(false);
  const [isActive, setIsActive] = useState([{ isActive: '' }]);

  const viewModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  const viewModalNew = () => (isOpenNew ? setIsOpenNew(false) : setIsOpenNew(true));

  const getUser = async () => {
    const { data } = await RequestService.get('/user/?rol=SUPER_ADMIN');
    const { users } = data;
    setUsers(users);
    setData(users);
  };

  useEffect(() => {
    getUser();
  }, [isOpen, isOpenNew, isActive]);

  const handleSearch = (keyWord) => {
    const results = data.filter((item) => item.firstName === keyWord);
    setUsers(results);
    console.log(results);
  };

  const handleActive = (data) => {
    const results = data;
    setIsActive(results);
  };

  console.log(user);

  return (
    <>
      <Title title='ADMINISTRADORES'>
        <ModalButton onClick={() => viewModalNew()} />
      </Title>
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TableAdmin
          user={user}
          isOpen={isOpen}
          viewModal={() => viewModal()}
          activation={handleActive}
        />
      </InfoContainer>
      {isOpenNew && (
        <Modal className='ModalContainer'>
          <NewAdmin onClick={() => viewModalNew()} />
        </Modal>
      )}
    </>
  );
};

export default Administradores;
