import React from 'react';
import ModalButton from '../../../UsableComponents/Buttons/ModalButton';
import Title from '../../../UsableComponents/Title/Title';
import InfoContainer from '../../../UsableComponents/Containers/InfoContainer';
import Search from '../../../UsableComponents/Search/Search';
import TablePurchases from './Table/TablePurchases';

const Purchases = () => {

  const handleSearch = (keyWord) => {
    // const results = data.filter((item) => item.firstName === keyWord);
    // setUsers(results);
    // console.log(results);
  };

  return (
    <>
      <Title title='COMPRAS'>
        <ModalButton />
      </Title>
      <Search onClick={handleSearch} />
      <InfoContainer>
        <TablePurchases />
      </InfoContainer>
    </>
  );
};

export default Purchases;
