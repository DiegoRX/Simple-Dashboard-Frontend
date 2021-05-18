import React, { useState, useEffect } from 'react';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';
import TableReferals from '../../../UsableComponents/Table/TableReferals';
import Search from '../../../UsableComponents/Search/Search';
import RequestService from '../../../../config';

const Referals = () => {

  const [user, setUsers] = useState([]);

  const getUser = async () => {
    const { data } = await RequestService.get('/user');
    const { users } = data;
    setUsers(users);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSearch = (keyWord) => {
    const results = data.filter((item) => item.firstName === keyWord);
    setUsers(results);
  };

  return (
    <>
      <Title title='REMISIONES' />
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TableReferals
          user={user}
        />
      </InfoContainer>
    </>
  );
};

export default Referals;
