import React, { useState, useEffect } from 'react';
import Title from '../../UsableComponents/Title/Title';
import InfoContainer from '../../UsableComponents/Containers/InfoContainer';
import TableComercios from './Table/TableComercios';
import Search from '../../UsableComponents/Search/Search';
import RequestService from '../../../config';

const Comercios = () => {

  const [user, setUsers] = useState([]);
  const [dataUser, setDataUsers] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState([{ isActive: '' }]);

  //opens User Info Modal
  const viewModal = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  const getUsers = async () => {
    const { data } = await RequestService.get('/user/?rol=COMERCIO');
    const { users } = data;
    setUsers(users);
    setDataUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, [
    isOpen,
    isActive,
  ]);

  const handleSearch = (keyWord) => {
    const results = dataUser.filter((item) => item.firstName === keyWord);
    setUsers(results);
  };

  const handleActive = (data) => {
    const results = data;
    setIsActive(results);
  };

  return (
    <>
      <Title title='COMERCIOS' />
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TableComercios
          user={user}
          activation={handleActive}
          isOpen={isOpen}
          viewModal={() => viewModal()}

        />
      </InfoContainer>
    </>
  );
};

export default Comercios;
