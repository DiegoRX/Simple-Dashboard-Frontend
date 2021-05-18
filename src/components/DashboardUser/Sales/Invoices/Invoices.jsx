import React, { useState, useEffect } from 'react';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';
import TableInvoices from '../../../UsableComponents/Table/TableInvoices';
import Search from '../../../UsableComponents/Search/Search';
import RequestService from '../../../../config';

const Invoices = () => {

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
      <Title title='FACTURAS DE VENTAS' />
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TableInvoices
          user={user}
        />
      </InfoContainer>
    </>
  );
};

export default Invoices;
